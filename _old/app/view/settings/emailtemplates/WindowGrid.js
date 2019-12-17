Ext.define('AM.view.emailtemplates.WindowGrid', {
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
        this.title= Lan.emailtemplates ;
		this.items = [
			    {
					xtype: 'grid',
					border: false,
					store : 'EmailTemplates',
					columns : [
						{header: Lan.id,						dataIndex: 'id',					width: 50 },
						{header: Lan.templateName,				dataIndex: 'templateName',			flex: 5}
					],
					
					dockedItems: [{
					   xtype: 'pagingtoolbar',
					   store: 'EmailTemplates', 
					   dock: 'bottom',
					   displayInfo: true
					}],
					
					tbar: [
						{text: Lan.add,		iconCls: 'add16',	action: 'buttonEmailTemplatesAddForm' }, '-',
						{text: Lan.edit,   id:'buttonEmailTemplatesEdit',	disabled: true,	iconCls: 'edit16',	 action: 'buttonEmailTemplatesEdit'   },'-',
						{text: Lan.remove, id:'buttonEmailTemplatesRemove',	disabled: true, iconCls: 'remove16', action: 'buttonEmailTemplatesRemove' }
					],

					listeners: {
						selectionchange: function(view){
										var sel		= view.selected.items.length;
											if(sel){
												Ext.getCmp('buttonEmailTemplatesEdit').enable();
												Ext.getCmp('buttonEmailTemplatesRemove').enable();
											}else{
												Ext.getCmp('buttonEmailTemplatesEdit').disable();	
												Ext.getCmp('buttonEmailTemplatesRemove').disable();	
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