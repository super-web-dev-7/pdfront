Ext.define('HD.controller.settings.departments.DepartmentsTabContent', {
    extend: 'Ext.app.Controller',

    views: [
		
		'settings.departments.DepartmentsGrid',
		'settings.departments.WindowForm'
    ],

    stores: [
		'settings.Departments',
		'settings.DepartmentType',
		'settings.AllUsersBasic',
		'settings.AllEmailsBasic',
		'YesNo'
    ],

	models: [
		'settings.Departments'
    ],
	
	

    init: function() {
				
		this.control({
			'departmentsGrid':{
				selectionchange: this.switchButtons
			},
			'[action=buttonDepartmentsAddForm]': {
				click: this.buttonDepartmentsAddForm
            },
			'[action=buttonDepartmentsSave]': {
				click: this.buttonDepartmentsSave
            },
			'[action=buttonDepartmentsEdit]': {
				click: this.buttonDepartmentsEdit
            },
			'[action=buttonDepartmentsRemove]': {
				click: this.buttonDepartmentsRemove
            }

					
		});
    },


	
	
	switchButtons: function(view){
		
		if(view.selected.items.length){
			Ext.getCmp('buttonDepartmentsEdit').enable();
			Ext.getCmp('buttonDepartmentsRemove').enable();
		}else{
			Ext.getCmp('buttonDepartmentsEdit').disable();	
			Ext.getCmp('buttonDepartmentsRemove').disable();	
		}	
	
	},
	
	
	buttonDepartmentsAddForm: function(button){
		Ext.create('HD.view.settings.departments.WindowForm');
	},
	
	buttonDepartmentsSave: function(button){
		var fform=button.up('window').down('form');
			
		var form=fform.getForm();
				
		if( form.isValid() ){
			
			var isId=form.getValues().id;
			if(isId){
				var p = 'editdepartment';
			}else{
				var p = 'adddepartment';
			}
			

			form.submit({
				url: 'index.php',
				params: {
					m: 'departments',
					p: p
				},
				success: function(form, action) {
					Ext.getStore('settings.Departments').load();
					Ext.getStore('settings.DepartmentType').load();
				    fform.up('window').close();
				},
				failure: function(form, action) {
					switch (action.failureType) {
						case Ext.form.action.Action.CONNECT_FAILURE:
							Ext.Msg.alert( 'Lan.failure', 'Lan.ajaxcommunicationfailed' );
							break;
						case Ext.form.action.Action.SERVER_INVALID:
						   Ext.Msg.alert( 'Lan.failure', 'action.result.error');
				   }
				}
			});
		}
	
	
	
	
	
	
	
	},

	
	
	
	buttonDepartmentsEdit: function(button){
		var id = button.up('gridpanel').getSelectionModel().getSelection()[0].get('id');
		var win=Ext.create('HD.view.settings.departments.WindowForm');
		win.setTitle( Lan.settings.departments.WinTitleEdit );
		
		var form=win.down('form');

	
	
		form.getForm().load({
			url: 'index.php',
			params: {
				m	: 'departments',
				p	: 'getdepartment',
				id	: id
			},
			method: 'GET',
			failure: function(form, action) {
				Ext.Msg.alert( 'Lan.error', 'Lan.error' );
			},
			success: function(){
						
			}
		});
	
	
	
	
	
	},	
	
	
	
	
	
	buttonDepartmentsRemove: function(button){
		var id = button.up('gridpanel').getSelectionModel().getSelection()[0].get('id');

		Ext.widget('messagebox').show({
			 title: 'Lan.info',
			 msg: 'Lan.removeConfirmMessage' ,
			 buttons: Ext.Msg.YESNO,
			 icon: Ext.MessageBox.QUESTION,
			 fn: function(btn, text){
				 if (btn == 'yes'){
					Ext.Ajax.request({
						url: 'index.php',
						method: 'post',
						params: {
							id: id,
							m: 'departments',
							p: 'deldepartment'
						},
						failure: function(){

						},
						success: function(response){
							var text = response.responseText;
							var json=Ext.JSON.decode(text);
							
							if(json.success==true){
								
								Ext.getStore('settings.Departments').load();
								
								Ext.getStore('settings.DepartmentType').load();
							}else{
								
							}
						}
					});
				 }
			 }
			 
		});
		
	}	
	



});