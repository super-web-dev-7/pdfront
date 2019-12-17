Ext.define('AM.view.emailmanagement.WindowGrid', {
    extend: 'Ext.window.Window',
	layout : 'fit',
    autoShow: true,
	modal: true,
	
	width: 800,
	height:500,

	headerPosition: 'top',
	constrainHeader: true,
	draggable: true,
	maximizable: true,



    initComponent: function() {
        this.title=Lan.emailmanagement;
		this.items = [
			    {
					xtype: 'grid',
					border: false,
					store : 'Emailmanagement',
					columns : [
						{header: Lan.id,				dataIndex: 'id',			width: 50 },
						{header: Lan.email,				dataIndex: 'email',			flex: 5},
						{header: Lan.emailName,			dataIndex: 'emailName',		flex: 5},	
						{header: Lan.mailDescription,	dataIndex: 'mailDescription',flex: 10}
					],
					

					dockedItems: [{
					   xtype: 'pagingtoolbar',
					   store: 'Emailmanagement', 
					   dock: 'bottom',
					   displayInfo: true
					}],
					
					tbar: [
						{text: Lan.addemailmanagement,		iconCls: 'add16',	action: 'buttonEmailmanagementAddForm' }, '-',
						{text: Lan.editemailmanagement,		id:'buttonEmailmanagementEdit',	disabled: true,	iconCls: 'edit16',	 action: 'buttonEmailmanagementEdit'   },'-',
						{text: Lan.removeemailmanagement,	id:'buttonEmailmanagementRemove',	disabled: true, iconCls: 'remove16', action: 'buttonEmailmanagementRemove' }
					],

					listeners: {
						selectionchange: function(view){
										var sel		= view.selected.items.length;
											if(sel){
												Ext.getCmp('buttonEmailmanagementEdit').enable();
												Ext.getCmp('buttonEmailmanagementRemove').enable();
											}else{
												Ext.getCmp('buttonEmailmanagementEdit').disable();	
												Ext.getCmp('buttonEmailmanagementRemove').disable();	
											}
										 }
					}
				} 
        ];

		
        this.buttons = [
           {
                text: Lan.close,
				iconCls: 'cross',
                scope: this,
                handler: this.close
            }
        ];

		

        this.callParent(arguments);
    }
});