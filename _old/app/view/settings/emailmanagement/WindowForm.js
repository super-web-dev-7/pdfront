Ext.define('HD.view.settings.emailmanagement.WindowForm', {
    
	extend: 'Ext.window.Window',
    autoShow: true,
	modal: true,
	layout: 'fit',
	width: 700,
	height: 570,
	border: false,

    initComponent: function() {
		this.title = Lan.settings.emailmanagement.WinTitleAddEmail;
		
		this.items = [
			{
                xtype: 'form',
				bodyPadding: 5,
				layout: 'anchor',
				defaults: {
					anchor: '100%'
				},
				fieldDefaults: {
					msgTarget: 'side',
					labelWidth: 150
				},
				waitMsgTarget: true,
				html: '<div style="background: red; color: white; padding: 5px;">'+Lan.settings.emailmanagement.AddingWarning+'</div>',
                items: [
					{ 
						xtype: 'hiddenfield', 
						name : 'id'
					},
					
					{ xtype: 'textfield', name: 'email',		fieldLabel: Lan.settings.emailmanagement.PopEmail,	allowBlank:false, vtype: 'email'},
					{ xtype: 'textfield', name: 'emailName',	fieldLabel: Lan.settings.emailmanagement.PopName,	allowBlank:false},
					{ xtype: 'textfield', name: 'popHost',		fieldLabel: Lan.settings.emailmanagement.PopHost,	allowBlank:false},
					{ xtype: 'textfield', name: 'popPort',		fieldLabel: Lan.settings.emailmanagement.PopPort,   allowBlank:false, value: '995'},
					{ xtype: 'textfield', name: 'popUser',		fieldLabel: Lan.settings.emailmanagement.PopUser,   allowBlank:false},
					{ xtype: 'textfield', name: 'popPass',		fieldLabel: Lan.settings.emailmanagement.PopPass,   allowBlank:true, inputType: 'password'},
					{
						xtype: 'combo',
						store: 'YesNo',
						displayField: 'name',
						valueField: 'id',
						fieldLabel: Lan.settings.emailmanagement.PopUseSsl,
						name: 'popSsl',
						allowBlank:false,
						queryMode: 'local',
						editable: false,
						value: '1'
					},
					{ xtype: 'textfield', name: 'smtpHost',	fieldLabel: Lan.settings.emailmanagement.SmtpHost,  allowBlank:false},
					{ xtype: 'textfield', name: 'smtpPort',	fieldLabel: Lan.settings.emailmanagement.SmtpPort,  allowBlank:false, value: '465'},
					{ xtype: 'textfield', name: 'smtpUser',	fieldLabel: Lan.settings.emailmanagement.SmtpUser,  allowBlank:false},
					{ xtype: 'textfield', name: 'smtpPass',	fieldLabel: Lan.settings.emailmanagement.SmtpPass,  allowBlank:true, inputType: 'password'},
					{
						xtype: 'combo',
						store: 'YesNo',
						displayField: 'name',
						valueField: 'id',
						fieldLabel: Lan.settings.emailmanagement.SmtpUseSsl,
						name: 'smtpSsl',
						allowBlank:false,
						queryMode: 'local',
						editable: false,
						value: '1'
					},
					{
						xtype: 'combo',
						store: 'YesNo',
						displayField: 'name',
						valueField: 'id',
						fieldLabel: Lan.settings.emailmanagement.SmtpAuthorisation,
						name: 'authorisationSmtp',
						allowBlank:false,
						queryMode: 'local',
						editable: false,
						value: '1'
					},
					{
						xtype: 'combo',
						store: 'settings.GetAllDepartmentsBasic',
						displayField: 'name',
						valueField: 'id',
						fieldLabel: Lan.settings.emailmanagement.DeliverToDepartment,
						name: 'deliverToDepartment',
						allowBlank:false,
						queryMode: 'local',
						editable: false
					},
					{ xtype: 'textfield',  name: 'mailDescription',	fieldLabel: Lan.settings.emailmanagement.AddEmailDescription,		allowBlank:true}
					
				]
			}
		];


					














        this.buttons = [
           {
                text: Lan.global.Save,
				glyph: 'xf0c7@FontAwesome',
				action: 'buttonEmailmanagementSave'
            },
			{
                text: Lan.global.Close,
				glyph: 'xf00d@FontAwesome',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});