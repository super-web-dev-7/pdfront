Ext.define('HD.view.settings.SettingsWindow', {
    extend: 'Ext.window.Window',
	alias : 'widget.settingsWindow',

	autoShow: true,
	
	modal: true,
	layout: 'fit',
	width: 800,
	height: 500,
	border: false,

    initComponent: function() {
		
		this.title = 'Settings';
		
		this.items = [
			{
                xtype: 'tabpanel',
				items: [
					{ xtype: 'departmentsGrid' },
					{ xtype: 'knowledgebasegrid' },
					{ xtype: 'emailManagementGrid'},
					{ xtype: 'usersgrid'},
					{ xtype: 'usersslagrid'},
					{ xtype: 'emailSpamList'}
					
				]
			}
		];
        this.buttons = [
          	{
                text: Lan.global.Close,
				glyph: 'xf05c@FontAwesome',                
                scope: this,
                handler: this.close
            }
        ];
        this.callParent(arguments);
    }

});



/**/