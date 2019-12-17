Ext.define('HD.view.settings.spamlist.Grid', {
    extend: 'Ext.grid.Panel',
	alias: 'widget.emailSpamList',

	border: false,
	store : 'settings.GetEmailSpamListFull',

    initComponent: function() {
        this.title=Lan.settings.spamlist.TabTitleSpamList;
			
		this.columns = [
							{header: Lan.settings.spamlist.Id,					dataIndex: 'id',		flex: 1},
							{header: Lan.settings.spamlist.GridEmailAddress,	dataIndex: 'email',		flex: 5},
							{header: Lan.settings.spamlist.AddDate,				dataIndex: 'addDate',	flex: 5},
							{header: Lan.settings.spamlist.AddedBy,				dataIndex: 'userId',	flex: 5}
					];
					
		this.dockedItems= [{
					   xtype: 'pagingtoolbar',
					   store: 'settings.GetEmailSpamListFull', 
					   dock: 'bottom',
					   displayInfo: true
		}];
					
		this.tbar= [
						{text: Lan.settings.spamlist.AddEmail,		glyph: 'xf196@FontAwesome',			action: 'buttonEmailSpamAddForm' }, '-',
						{text: Lan.settings.spamlist.DelEmail,		id:'buttonEmailSpamDel',	disabled: true,	glyph: 'xf014@FontAwesome',	 action: 'buttonEmailSpamDel'   }
		];

		this.listeners= {
						selectionchange: function(view){
							var sel		= view.selected.items.length;
								if(sel){
									Ext.getCmp('buttonEmailSpamDel').enable();
								}else{
									Ext.getCmp('buttonEmailSpamDel').disable();	
								}
						}
		}

	

        this.callParent(arguments);
    }

});