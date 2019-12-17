Ext.define('HD.view.settings.customersla.Grid', {
    
	extend: 'Ext.grid.Panel',
	alias: 'widget.usersslagrid',

	border: false,
	store : 'settings.UsersSla',

	
	initComponent: function() {
        		
		this.title=Lan.settings.customersla.WinTitle;
			
 
		this.columns = [
							{header: Lan.settings.customersla.id,			dataIndex: 'id',			flex: 1},
							{header: Lan.settings.customersla.UserEmail,	dataIndex: 'emailDomain',	flex: 5},
							{header: Lan.settings.customersla.ResponseTime,	dataIndex: 'userSla',		flex: 5},
							{header: Lan.settings.customersla.ExpireDate,	dataIndex: 'dateExpire',	flex: 5}
					];
					
		
		this.dockedItems= [{
					   xtype: 'pagingtoolbar',
					   store: 'settings.UsersSla', 
					   dock: 'bottom',
					   displayInfo: true
		}];
					
		
		this.tbar= [
						{text: Lan.settings.customersla.AddSla,		glyph: 'xf196@FontAwesome',			action: 'buttonUsersSlaAddForm' }, '-',
						{text: Lan.settings.customersla.EditSla,		id:'buttonUsersSlaEdit',	disabled: true,	glyph: 'xf044@FontAwesome',	 action: 'buttonUsersSlaEdit'   },
						{text: Lan.settings.customersla.DelSla,		id:'buttonUsersSlaDel',		disabled: true,	glyph: 'xf014@FontAwesome',	 action: 'buttonUsersSlaDel'   }
		];

		this.listeners= {
						selectionchange: function(view){
										var sel		= view.selected.items.length;
											if(sel){
												Ext.getCmp('buttonUsersSlaEdit').enable();
												Ext.getCmp('buttonUsersSlaDel').enable();
											}else{
												Ext.getCmp('buttonUsersSlaEdit').disable();	
												Ext.getCmp('buttonUsersSlaDel').disable();	
											}
										 }
		}

	

        this.callParent(arguments);
    }


});