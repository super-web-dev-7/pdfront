Ext.define('HD.view.main.ForwardTab' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.forwardTab',
	
	title:  Lan.main.forward.WinTitle,
	layout: 'anchor',
	minHeight: 350,
	waitMsgTarget: true,
	glyph: 'xf064@FontAwesome',
	
    
	initComponent: function() {
        var me =this;

		this.items= [{
							fieldLabel:		Lan.main.forward.Department,
							labelAlign		:'top',
							name:			'departmentId',
							valueField:		'id',
							margin: 5,
							displayField:	'name',
							xtype:			'combo',
							queryMode:		'remote',
							editable:		false,
							anchor:			'100%',
							store:			'settings.GetAllDepartmentsBasic'
						},
						{
							fieldLabel:	Lan.main.forward.Message,
							labelAlign:	'top',
							name: 'messageText',
							xtype: 'textarea',
							margin: 5,
							anchor: '100% 100%'
						},
						{						
							xtype: 'hiddenfield',
							name: 'type',
							value: 'forwardTicket'
											
						}
		];

		this.bbar= [
			'->',{text: Lan.global.Save, itemId: 'buttonSendForm', glyph: 'xf0c7@FontAwesome', scale: 'medium'}
		];


        this.callParent(arguments);
    }
});