Ext.define('HD.controller.settings.customersla.UsersWithSlaListTabContent', {
	extend: 'Ext.app.Controller',

    views: [
		'settings.customersla.Grid',
		'settings.customersla.WindowForm'
    ],

    stores: [
		'settings.UsersSla',
		'settings.SlaType'
    ],	
	

    init: function() {
		
		this.control({
				
			'[action=buttonUsersSlaAddForm]': {
				click: this.buttonUsersSlaAddForm
            },
			'[action=buttonUsersSlaSave]': {
				click: this.buttonUsersSlaSave
            },
			'[action=buttonUsersSlaEdit]': {
				click: this.buttonUsersSlaEdit
            },
			'[action=buttonUsersSlaDel]': {
				click: this.buttonUsersSlaDel
            }	
		
		});
    },



	buttonUsersSlaAddForm: function(button){
		var win=Ext.create('HD.view.settings.customersla.WindowForm');
	},



	buttonUsersSlaSave: function(button){
		var form=button.up('window').down('form');
		this.doUsersSave(form);
		
	},

	doUsersSave: function(fform){
		var form=fform.getForm();
				
		if( form.isValid() ){
			
			var isId=form.getValues().id;
			if(isId){
				var p = 'editUser';
			}else{
				var p = 'addUser';
			}
			

			form.submit({
				url: 'index.php',
				params: {
					m: 'userssla',
					p: p
				},
				waitMsg: Lan.global.Saving,
				success: function(form, action) {
					Ext.getStore('settings.UsersSla').load();
				    fform.up('window').close();
				},
				failure: function(form, action) {
					switch (action.failureType) {
						case Ext.form.action.Action.CONNECT_FAILURE:
							Ext.Msg.alert( Lan.failure, Lan.ajaxcommunicationfailed );
							break;
						case Ext.form.action.Action.SERVER_INVALID:
							if(action.result.error){
								Ext.Msg.alert( Lan.failure, action.result.error);
							}
				   }
				}
			});
		}
		
	},





	loadUsersEdit: function(form, id){
		form.getForm().load({
			url: 'index.php',
			params: {
				m	: 'userssla',
				p	: 'getUserById',
				id	: id
			},
			waitMsg: Lan.global.Saving,
			method: 'GET',
			failure: function(form, action) {
				Ext.Msg.alert( Lan.error, Lan.error );
			},
			success: function(){
						
			}
		});
	},


	buttonUsersSlaEdit: function(button){
		var id = button.up('gridpanel').getSelectionModel().getSelection()[0].get('id');
		var win=Ext.create('HD.view.settings.customersla.WindowForm');
		win.setTitle( Lan.settings.customersla.WinTitleEditSla );
		this.loadUsersEdit( win.down('form'), id );
	},



	buttonUsersSlaDel: function(button){
		var id = button.up('gridpanel').getSelectionModel().getSelection()[0].get('id');
		this.delUsersSla( id );
	},

	
	delUsersSla: function(id){

		Ext.widget('messagebox').show({
			 title:  Lan.settings.customersla.RemoveInfo ,
			 msg: Lan.settings.customersla.RemoveQuestion ,
			 buttons: Ext.Msg.YESNO,
			 icon: Ext.MessageBox.QUESTION,
			 fn: function(btn, text){
				 if (btn == 'yes'){
					Ext.Ajax.request({
						url: 'index.php',
						method: 'get',
						params: {
							id: id,
							m: 'userssla',
							p: 'delUser'
						},
						failure: function(){
						},
						success: function(response){
							var text = response.responseText;
							var json=Ext.JSON.decode(text);
							if(json.success==true){
								Ext.getStore('settings.UsersSla').load();
							}else{
								
							}
						}
					});

				 }
			 }
		});

	}









});