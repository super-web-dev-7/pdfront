Ext.define('HD.view.sugestions.WindowForm', {
    extend: 'Ext.window.Window',
    autoShow: true,
	modal: true,
	layout: 'fit',
	width: 500,
	height: 330,
	border: false,



    initComponent: function(){
        this.title=Lan.sugestions.WinTitleSugestion;
		var me = this;
		this.items = [ this.editForm];

		this.callParent(arguments);
    },







	editForm: {
                xtype: 'form',

				layout: 'anchor',
				defaults: {
					anchor: '100%'
				},
				bodyStyle:'padding: 15px 15px 15px 15px',
				waitMsgTarget: true,
				fieldDefaults: {
					msgTarget: 'side',
					labelWidth: 130
				},
                items: [
				
								{
									xtype: 'displayfield',
									value: Lan.sugestions.InfoText,
								
    							},
 	 	 	 
			
								{ 
									xtype: 'textareafield', 
									name : 'sugText', 
									fieldLabel: Lan.sugestions.FormText,
									labelAlign:	'top',
									allowBlank: false
								},
								{ 
									xtype: 'textfield', 
									name : 'sugEmail', 
									fieldLabel: Lan.sugestions.FormEmail,
									allowBlank: true,
									vtype: 'email',
									labelAlign:	'top'
								}
				],

				bbar: [
					'->',
					{
						text: Lan.global.Save,
						glyph: 'xf0c7@FontAwesome',
						action: 'buttonSugestionsSave'
					}//,
					//{
					//	text: Lan.global.Close,
					//	glyph: 'xf00d@FontAwesome',
						//scope: this,
					//	handler: this.close
					//}
				]

	}

	

});