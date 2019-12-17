Ext.define('AM.view.knowledgebasesections.WindowForm', {
    extend: 'Ext.window.Window',
    autoShow: true,
	modal: true,
	layout: 'fit',
	width: 400,
	height: 200,
	border: false,

    initComponent: function() {
		this.title = Lan.newknowledgebasesection;
		
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
						name : 'sectionName', 
						fieldLabel: Lan.sectionname,
						allowBlank:false
					},
					{
						xtype: 'combo',
						store: 'YesNo',
						displayField: 'name',
						valueField: 'id',
						fieldLabel: Lan.disabled,
						name: 'isDisabled',
						allowBlank:false,
						queryMode: 'remote',
						editable: false,
						value: '0'
					}					
				]
			}
		];
        this.buttons = [
           {
                text: Lan.global.Save,
				iconCls: 'save16',
				action: 'buttonKnowledgebaseSectionsSave'
            },
			{
                text: Lan.global.Close,
				iconCls: 'close16',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});