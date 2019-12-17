Ext.define('HD.controller.settings.emailmanagement.EmailManagementTab', {
    extend: 'Ext.app.Controller',

    views: [
		'settings.emailmanagement.EmailsGrid',
		'settings.emailmanagement.WindowForm'
    ],

    stores: [
		'settings.GetAllEmailsFull',
		'settings.GetAllDepartmentsBasic',
		'settings.AllEmailsBasic'
    ],

	models: [
		'settings.GetAllEmailsFull'
    ],
	
	

    init: function() {
		
		this.control({
	
			'emailmanagementgrid' :{
				beforerender: function(t){ 
					t.getStore().load(); 
				}
            },
			'[action=buttonEmailmanagementAddForm]': {
				click: this.buttonEmailmanagementAddForm
            },
			'[action=buttonEmailmanagementSave]': {
				click: this.buttonEmailmanagementSave
            },
			'[action=buttonEmailmanagementEdit]': {
				click: this.buttonEmailmanagementEdit
            },
			'[action=buttonEmailmanagementRemove]': {
				click: this.buttonEmailmanagementRemove
            }
		
		});
    },



	buttonEmailmanagementAddForm: function(button){
				
		var win=Ext.create('HD.view.settings.emailmanagement.WindowForm');
	},



	buttonEmailmanagementSave: function(button){
		var form=button.up('window').down('form');
		this.doEmailmanagementSave(form);
		
	},

	doEmailmanagementSave: function(fform){
		var form=fform.getForm();
				
		if( form.isValid() ){
			
			var isId=form.getValues().id;
			if(isId){
				var p = 'updateEmail';
			}else{
				var p = 'addEmail';
			}
			
			form.submit({
				url: 'index.php',
				params: {
					m: 'emailmanagement',
					p: p
				},
				waitMsg: Lan.global.Saving,
				success: function(form, action) {
					Ext.getStore('settings.GetAllEmailsFull').load();
				    fform.up('window').close();
				},
				failure: function(form, action) {
					switch (action.failureType) {
						case Ext.form.action.Action.CONNECT_FAILURE:
							Ext.Msg.alert( 'Lan.failure', 'Lan.ajaxcommunicationfailed' );
							break;
						case Ext.form.action.Action.SERVER_INVALID:
							if(action.result.error){
								Ext.Msg.alert( 'Lan.failure', action.result.error);
							}
				   }
				}
			});
		}
		
	},



	loadEmailmanagementEdit: function(form, id){
		form.getForm().load({
			url: 'index.php',
			params: {
				m	: 'emailmanagement',
				p	: 'getEmail',
				id	: id
			},
			waitMsg: Lan.global.Loading,
			method: 'GET',
			failure: function(form, action) {
				Ext.Msg.alert( 'Lan.error', 'Lan.error' );
			},
			success: function(){
						
			}
		});
	},


	buttonEmailmanagementEdit: function(button){
		var id = button.up('gridpanel').getSelectionModel().getSelection()[0].get('id');
		var win=Ext.create('HD.view.settings.emailmanagement.WindowForm');
		win.setTitle( Lan.settings.emailmanagement.WinTitleEditEmail );
		this.loadEmailmanagementEdit( win.down('form'), id );
	},














	buttonEmailmanagementRemove: function(button){
		var id = button.up('gridpanel').getSelectionModel().getSelection()[0].get('id');

		Ext.widget('messagebox').show({
			 title:  Lan.settings.emailmanagement.WinTitleRemove,
			 msg: Lan.settings.emailmanagement.ConfirmEmailRemoveMessage,
			 buttons: Ext.Msg.YESNO,
			 icon: Ext.MessageBox.QUESTION,
			 fn: function(btn, text){
				 if (btn == 'yes'){
					Ext.Ajax.request({
						url: 'index.php',
						method: 'post',
						params: {
							id: id,
							m: 'emailmanagement',
							p: 'delEmail'
						},
						failure: function(){

						},
						success: function(response){
							var text = response.responseText;
							var json=Ext.JSON.decode(text);
							if(json.success==true){
								button.up('gridpanel').getStore().load();
							}else{
								
							}
						}
					});
				 }
			 }
			 
		});
		
	}



});