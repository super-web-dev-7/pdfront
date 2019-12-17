Ext.define('HD.controller.settings.userslist.UsersListTabContent', {
    extend: 'Ext.app.Controller',

    views: [
		'settings.users.Grid',
		'settings.users.WindowForm'
    ],

    stores: [
		'settings.Users',
		'settings.UserType',
		'settings.GetAllDepartmentsBasic'
    ],

	models: [
		'settings.Users'
    ],
	
	

    init: function() {
		
		this.control({
					
			'[action=buttonUsersAddForm]': {
				click: this.buttonUsersAddForm
            },
			'[action=buttonUsersSave]': {
				click: this.buttonUsersSave
            },
			'[action=buttonUsersEdit]': {
				click: this.buttonUsersEdit
            },
			'[action=buttonUsersDel]': {
				click: this.buttonUsersDel
            }	


					
		});
    },



	buttonUsersAddForm: function(button){
		var win=Ext.create('HD.view.settings.users.WindowForm');
		win.addValidationPass();
	},



	buttonUsersSave: function(button){
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
					m: 'users',
					p: p
				},
				success: function(form, action) {
					Ext.getStore('settings.Users').load();
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
				m	: 'users',
				p	: 'getUserById',
				id	: id
			},
			method: 'GET',
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
			
			
			},
			success: function(){
						
			}
		});
	},


	buttonUsersEdit: function(button){
		var id = button.up('gridpanel').getSelectionModel().getSelection()[0].get('id');
		var win=Ext.create('HD.view.settings.users.WindowForm');
		win.setTitle( Lan.settings.users.WinTitleEditUsers );
		
		win.down('[name=userName]').setDisabled(true);
		this.loadUsersEdit( win.down('form'), id );
	},







	buttonUsersDel: function(button){
		var id = button.up('gridpanel').getSelectionModel().getSelection()[0].get('id');

		Ext.widget('messagebox').show({
			 title:  Lan.settings.users.InfoTitleRemove ,
			 msg: Lan.settings.users.removeConfirmMessage,
			 buttons: Ext.Msg.YESNO,
			 icon: Ext.MessageBox.QUESTION,
			 fn: function(btn, text){
				 if (btn == 'yes'){
					Ext.Ajax.request({
						url: 'index.php',
						method: 'post',
						params: {
							id: id,
							m: 'users',
							p: 'updateUserActive'
						},
						failure: function(){
							switch (action.failureType) {
								case Ext.form.action.Action.CONNECT_FAILURE:
									Ext.Msg.alert( Lan.failure, Lan.ajaxcommunicationfailed );
									break;
								case Ext.form.action.Action.SERVER_INVALID:
									if(action.result.error){
										Ext.Msg.alert( Lan.failure, action.result.error);
									}
							}
						
						
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