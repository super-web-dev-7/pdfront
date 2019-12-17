
Ext.application({
	name				: 'HD',
	appFolder: '/media/v001/app',	
    paths: {
        'Ext.ux': '/media/v001/app/class/ux/'
    },

	controllers: ['main.Main', 'settings.SettingsWindow', 'profile.Profile', 'sugestions.Sugestions', 'newticket.NewTicket'],

	autoCreateViewport	: true
});
