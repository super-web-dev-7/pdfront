Ext.define('HD.controller.settings.spamlist.SpamListTabContent', {
    extend: 'Ext.app.Controller',

    views: [
		'settings.spamlist.Grid',
		'settings.spamlist.WindowForm'
    ],

    stores: [
		'settings.GetEmailSpamListFull'
    ],	
	

    init: function() {
		
		this.control({
					
			'[action=buttonEmailSpamAddForm]': {
				click: this.buttonEmailSpamAddForm
            },
			'[action=buttonEmailSpamSave]': {
				click: this.buttonEmailSpamSave
            },
			'[action=buttonEmailSpamEdit]': {
				click: this.buttonEmailSpamEdit
            },
			'[action=buttonEmailSpamDel]': {
				click: this.buttonEmailSpamDel
            }	


					
		});
    },



	buttonEmailSpamAddForm: function(button){
		var win=Ext.create('HD.view.settings.spamlist.WindowForm');
	},



	buttonEmailSpamSave: function(button){
		var form=button.up('window').down('form');
		this.doUsersSave(form);
		
	},

	doUsersSave: function(fform){
		var form=fform.getForm();
				
		if( form.isValid() ){
			
			var isId=form.getValues().id;
			if(isId){
				var p = 'editEmail';
			}else{
				var p = 'addEmail';
			}
			

			form.submit({
				url: 'index.php',
				params: {
					m: 'emailspam',
					p: p
				},
				success: function(form, action) {
					Ext.getStore('settings.GetEmailSpamListFull').load();
				    fform.up('window').close();
				},
				failure: function(form, action) {
					switch (action.failureType) {
						case Ext.form.action.Action.CONNECT_FAILURE:
							Ext.Msg.alert( Lan.global.WinTitleConnectionFailure, Lan.global.ConnectionFailureMessage);
							break;
						case Ext.form.action.Action.SERVER_INVALID:
							if(action.result.error){
								Ext.Msg.alert( Lan.global.WinTitleAppError, action.result.error);
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
				m	: 'emailspam',
				p	: 'getUserById',
				id	: id
			},
			method: 'GET',
			failure: function(form, action) {
				Ext.Msg.alert( Lan.error, Lan.error );
			},
			success: function(){
						
			}
		});
	},


	buttonEmailSpamEdit: function(button){
		var id = button.up('gridpanel').getSelectionModel().getSelection()[0].get('id');
		var win=Ext.create('HD.view.settings.spamlist.WindowForm');
		win.setTitle( Lan.editUserSla );
		this.loadUsersEdit( win.down('form'), id );
	},



	buttonEmailSpamDel: function(button){
		var id = button.up('gridpanel').getSelectionModel().getSelection()[0].get('id');
		this.delEmailSpam( id );
	},

	
	delEmailSpam: function(id){

		Ext.widget('messagebox').show({
			 title:  Lan.settings.spamlist.WinTitleDelInfo ,
			 msg: Lan.settings.spamlist.EmailRemoveConfirmationMessage,
			 buttons: Ext.Msg.YESNO,
			 icon: Ext.MessageBox.QUESTION,
			 fn: function(btn, text){
				 if (btn == 'yes'){
					Ext.Ajax.request({
						url: 'index.php',
						method: 'get',
						params: {
							id: id,
							m: 'emailspam',
							p: 'delEmail'
						},
						failure: function(){
						},
						success: function(response){
							var text = response.responseText;
							var json=Ext.JSON.decode(text);
							if(json.success==true){
								Ext.getStore('settings.GetEmailSpamListFull').load();
							}else{
								
							}
						}
					});

				 }
			 }
		});

	}






});