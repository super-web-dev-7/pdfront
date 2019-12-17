Ext.define('HD.view.kb.section.WindowForm', {
    extend: 'Ext.window.Window',
    autoShow: true,
	modal: true,
	layout: 'fit',
	width: 400,
	height: 200,
	border: false,

    initComponent: function() {
		this.title = Lan.kb.AddSectionWinTitle;
		
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
						fieldLabel: Lan.kb.SectionName,
						allowBlank:false
					},
					{
						xtype: 'combo',
						store: 'YesNo',
						displayField: 'name',
						valueField: 'id',
						fieldLabel: Lan.kb.SectionIsDisabled,
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
				glyph: 'xf0c7@FontAwesome',
				action: 'buttonKnowledgebaseSectionsSave'
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