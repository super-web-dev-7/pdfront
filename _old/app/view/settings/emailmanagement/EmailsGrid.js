Ext.define('HD.view.settings.emailmanagement.EmailsGrid', {
    
	extend: 'Ext.grid.Panel',
	
	alias: 'widget.emailManagementGrid',
	
	border: false,
	store : 'settings.GetAllEmailsFull',


    initComponent: function() {
        
		this.title=Lan.settings.emailmanagement.GridTitle;
			   
					
		this.columns = [
						{header: Lan.settings.emailmanagement.Id,				dataIndex: 'id',				width: 50},
						{header: Lan.settings.emailmanagement.EmailAddress,		dataIndex: 'email',				flex: 5},
						{header: Lan.settings.emailmanagement.EmailSenderName,	dataIndex: 'emailName',			flex: 5},	
						{header: Lan.settings.emailmanagement.EmailDescription,	dataIndex: 'mailDescription',	flex: 10}
		];
					

		this.dockedItems= [{
					   xtype: 'pagingtoolbar',
					   store: 'settings.GetAllEmailsFull', 
					   dock: 'bottom',
					   displayInfo: true
		}];
					
		this.tbar= [
						{text: Lan.settings.emailmanagement.AddEmail,		glyph: 'xf196@FontAwesome',	action: 'buttonEmailmanagementAddForm' }, '-',
						{text: Lan.settings.emailmanagement.EditEmail,		id:'buttonEmailmanagementEdit',	disabled: true,	glyph: 'xf044@FontAwesome',	 action: 'buttonEmailmanagementEdit'   },'-',
						{text: Lan.settings.emailmanagement.DelEmail,	id:'buttonEmailmanagementRemove',	disabled: true, glyph: 'xf014@FontAwesome', action: 'buttonEmailmanagementRemove' }
		];

		this.listeners= {
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

        this.callParent(arguments);
    }
});