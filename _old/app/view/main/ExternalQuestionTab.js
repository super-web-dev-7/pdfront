Ext.define('HD.view.main.ExternalQuestionTab' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.externalQuestionTab',
	
	title: Lan.main.externalquestion.WinTitle,
	layout: 'anchor',
	height: 350,
	waitMsgTarget: true,
	glyph: 'xf08e@FontAwesome',



    initComponent: function() {
		
		this.items= [
				{
					name: 'sendQuestionEmail',
					fieldLabel: Lan.main.externalquestion.Email,
					labelAlign: 'top',
					vtype: 'email',
					xtype: 'textfield',
					margin: 5,
					anchor: '100%',
					allowBlank: false
				},
				{
					fieldLabel:		Lan.main.externalquestion.Message,
					labelAlign		:'top',
					name: 'messageText',
					xtype: 'textarea',
					margin: 5,
					anchor: '100% 80%'
				},{				
					xtype: 'hiddenfield',
					name: 'type',
					value: 'externalQuestion'						
				}
		];
		
		this.bbar= [
				'->',{text: Lan.global.Save, itemId: 'buttonSendForm', glyph: 'xf0c7@FontAwesome', scale: 'medium'}
		];
        

        this.callParent(arguments);
    }
});