Ext.define('HD.view.main.InternalNoteTab' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.internalNoteTab',
	
	title:  Lan.main.internalnote.WinTitle,
	layout: 'anchor',
	height: 350,
	waitMsgTarget: true,
	glyph: 'xf24a@FontAwesome',
	
	
    
	initComponent: function() {
        var me =this;

		this.items= [
									{
											
											fieldLabel:	Lan.main.internalnote.Message,
											labelAlign:	'top',
											name: 'messageText',
											xtype: 'textarea',
											margin: 5,
											anchor: '100% 100%'
										},{
										
											xtype: 'hiddenfield',
											name: 'type',
											value: 'internalNote'
											
										}
		];

		this.bbar= [
			'->',{text: Lan.global.Save, itemId: 'buttonSendForm', glyph: 'xf0c7@FontAwesome', scale: 'medium'}
		];


        this.callParent(arguments);
    }
});