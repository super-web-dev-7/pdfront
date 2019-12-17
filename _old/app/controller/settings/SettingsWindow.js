Ext.define('HD.controller.settings.SettingsWindow', {
    extend: 'Ext.app.Controller',

    
	controllers: [
		'settings.departments.DepartmentsTabContent', 
		'settings.emailmanagement.EmailManagementTab',
		'settings.spamlist.SpamListTabContent',
		'settings.customersla.UsersWithSlaListTabContent',
		'settings.userslist.UsersListTabContent',
		'kb.Knowledgebase',
		'kb.KnowledgebaseSections'
	],
		
	views: [
		'settings.SettingsWindow'
    ],

	

    init: function() {
		this.control({
			'[action=buttonSettings]': {
				click: function(button){
					var win=Ext.create('HD.view.settings.SettingsWindow');
				}
            }
					
		});
    }

});


/*
,
		'knowledgebase.Grid',
		'emailmanagement.Grid',
		'users.Grid',
		'emailspam.Grid'

*/