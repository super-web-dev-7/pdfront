Ext.define('HD.view.settings.users.Grid', {
    extend: 'Ext.grid.Panel',
	alias: 'widget.usersgrid',

	border: false,
	store : 'settings.Users',

    initComponent: function() {
        this.title=Lan.settings.users.WinTitleUsers;
			

		this.columns = [
							{header: Lan.settings.users.Id,		dataIndex: 'id',			flex: 1},
							{header: Lan.settings.users.LoginName,		dataIndex: 'userName',		flex: 5 },
							
							{header: Lan.settings.users.UserName,	dataIndex: 'nameSurname',	flex: 5},
							{header: Lan.settings.users.UserType,	dataIndex: 'userType',		flex: 5, renderer: this.rendererUserType }	,
							
							{header: Lan.settings.users.DepartmentName, dataIndex: 'departmentName',flex: 5 },
							{header: Lan.settings.users.EmailAddress,	dataIndex: 'userEmail',		flex: 5 }	
					];
					
		this.dockedItems= [{
					   xtype: 'pagingtoolbar',
					   store: 'settings.Users', 
					   dock: 'bottom',
					   displayInfo: true
		}];
					
		this.tbar= [
						{text: Lan.settings.users.AddUser,		glyph: 'xf196@FontAwesome',			action: 'buttonUsersAddForm' }, '-',
						{text: Lan.settings.users.EditUser,		id:'buttonUsersEdit',		disabled: true,	glyph: 'xf044@FontAwesome',	 action: 'buttonUsersEdit'   },
						{text: Lan.settings.users.DelUser,		id:'buttonUsersDel',		disabled: true,	glyph: 'xf014@FontAwesome',	 action: 'buttonUsersDel'   }
		];

		this.listeners= {
						selectionchange: function(view){
										var sel= view.selected.items.length;
											if(sel){
												Ext.getCmp('buttonUsersEdit').enable();
												Ext.getCmp('buttonUsersDel').enable();
											}else{
												Ext.getCmp('buttonUsersEdit').disable();
												Ext.getCmp('buttonUsersDel').disable();
											}
										 }
		}
	
        this.callParent(arguments);
    },



	rendererUserType:  function(v){
		var store=Ext.getStore('settings.UserType');
		var pos=store.find('id', v);
		if(pos>-1)return store.getAt(pos).data.name;
	}




	
});