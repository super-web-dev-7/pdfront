Ext.define('HD.view.main.MainTabs', {
    extend: 'Ext.tab.Panel',
    alias : 'widget.mainTabs',
    itemId: 'mainTabs',
	region: 'center',
					
	items: [

		{title: Lan.main.TabToDo,		itemId: '0', layout: 'fit', dockedItems: [{xtype: 'TabToolbar'}],  items: [{xtype: 'tabContent'}] },
		{title: Lan.main.TabActive,		itemId: '1', layout: 'fit', dockedItems: [{xtype: 'TabToolbar'}],  items: [{xtype: 'tabContent'}] },
		{title: Lan.main.TabClosed,		itemId: '2', layout: 'fit', dockedItems: [{xtype: 'TabToolbar'}],  items: [{xtype: 'tabContent'}] },
		{title: Lan.main.TabWaiting,	itemId: '3', layout: 'fit', dockedItems: [{xtype: 'TabToolbar'}],  items: [{xtype: 'tabContent'}] },
		{title: Lan.main.TabTrash,		itemId: '4', layout: 'fit', dockedItems: [{xtype: 'TabToolbar'}],  items: [{xtype: 'tabContent'}] },
		{title: Lan.main.TabAll,		itemId: '5', layout: 'fit', dockedItems: [{xtype: 'TabToolbar'}],  items: [{xtype: 'tabContent'}] }

	]

});