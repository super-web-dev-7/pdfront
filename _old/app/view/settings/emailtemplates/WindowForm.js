Ext.define('AM.view.emailtemplates.WindowForm', {
    extend: 'Ext.window.Window',
    autoShow: true,
	modal: true,
	layout: 'fit',
	width: 700,
	height: 500,
	border: false,

    initComponent: function() {
		this.title = Lan.newtemplate;
		
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
					labelWidth: 100
				},



                items: [
					{ 
						xtype: 'hiddenfield', 
						name : 'id'
					},
					{ 
						xtype: 'textfield', 
						name : 'templateName', 
						fieldLabel: Lan.templateName,
						allowBlank:false, 
						maxLength: 255
					},
					{ 
						xtype: 'textarea', 
						name : 'templateText', 
						fieldLabel: Lan.templateText,
						allowBlank:false
					}
					
				]
			}
		];
        this.buttons = [
           {
                text: Lan.save,
				iconCls: 'save16',
				action: 'buttonEmailTemplatesSave'
            },
			{
                text: Lan.close,
				iconCls: 'close16',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});