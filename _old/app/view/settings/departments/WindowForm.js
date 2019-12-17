Ext.define('HD.view.settings.departments.WindowForm', {
    extend: 'Ext.window.Window',
    autoShow: true,
	modal: true,
	layout: 'fit',
	width: 600,
	height: 500,
	border: false,

    initComponent: function() {
		this.title = Lan.settings.departments.WinTitleAddNew;
		
		this.items = [
			{
                xtype: 'form',
				border: false,
				padding: 10,
				//layout: 'fit',
				defaults: {
					anchor: '100%'
				},
				fieldDefaults: {
					msgTarget: 'side',
					labelWidth: 100
				},
				waitMsgTarget: true,

                items: [
									{ 
										xtype: 'hiddenfield', 
										name : 'id'
									},
									{ 
										xtype: 'textfield', 
										name : 'departmentName', 
										fieldLabel: Lan.settings.departments.FormDepartmentName,
										allowBlank:false, 
										minLength: 4,
										labelAlign: 'top',
										maxLength: 255
									},
									{
										xtype: 'combo',
										store: 'settings.DepartmentType',
										displayField: 'departmentName',
										valueField: 'id',
										fieldLabel: Lan.settings.departments.FormDepartmentType,
										name: 'departmentType',
										allowBlank:false,
										queryMode: 'local',
										editable: false,
										labelAlign: 'top',
										value: '1',
										hidden: true
									},
									{
										xtype: 'combo',
										store: 'settings.AllEmailsBasic',
										displayField: 'emailName',
										valueField: 'id',
										fieldLabel: Lan.settings.departments.FormReplyEmail,
										name: 'replyEmailId',
										allowBlank:false,
										queryMode: 'local',
										labelAlign: 'top',
										editable: false
									},									
									{ 
										xtype: 'textarea', 
										name : 'departmentSignature', 
										fieldLabel: Lan.settings.departments.FormDepartmentSignature,
										allowBlank: true,
										labelAlign: 'top',
										height: 100
									},
									
									{									
										xtype: 'textarea', 
										labelAlign: 'top',
										anchor: '100%',
										name : 'confirmMessageTxt', 
										fieldLabel: Lan.settings.departments.FormDeliveryConfirmation,
										allowBlank: true,
										height: 100
									},
									{
										xtype: 'displayfield',
										value: '{ticketID} - '+Lan.settings.departments.ExtraInfoTNumber+', {clientEMAIL} - '+Lan.settings.departments.ExtraInfoSEmail+' '
									}
								] 
					
				
			
			
			
			}// form
		];
        this.buttons = [
           {
                text: Lan.global.Save,
				glyph: 'xf0c7@FontAwesome',
				action: 'buttonDepartmentsSave'
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