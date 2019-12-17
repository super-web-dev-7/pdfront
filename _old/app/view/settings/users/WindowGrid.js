Ext.define('AM.view.users.WindowGrid', {
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
        this.title=Lan.users;
		this.items = [
			    {
					xtype: 'grid',
					border: false,
					store : 'Users',
					columns : [
							{header: Lan.id,		dataIndex: 'id',			flex: 1},
							{header: Lan.login,		dataIndex: 'userName',		flex: 5 },
							{header: Lan.surname,	dataIndex: 'nameSurname',	flex: 5}													 	 	 	 	 
					],
					
					dockedItems: [{
					   xtype: 'pagingtoolbar',
					   store: 'Users', 
					   dock: 'bottom',
					   displayInfo: true
					}],
					
					tbar: [
						{text: Lan.adduser,		iconCls: 'add16',			action: 'buttonUsersAddForm' }, '-',
						{text: Lan.edituser,	id:'buttonUsersEdit',		disabled: true,	iconCls: 'edit16',	 action: 'buttonUsersEdit'   }
					],

					listeners: {
						selectionchange: function(view){
										var sel		= view.selected.items.length;
											if(sel){
												Ext.getCmp('buttonUsersEdit').enable();
												}else{
												Ext.getCmp('buttonUsersEdit').disable();	
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