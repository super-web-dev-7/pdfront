Ext.define('HD.view.main.TicketsGrid' ,{
	extend: 'Ext.grid.Panel',

    alias : 'widget.ticketsGrid',
	itemId: 'ticketsGrid',
	collapsible: true,
    
	requires: ['Ext.ux.PreviewPlugin'],

    cls: 'feed-grid',
	
	hideHeaders: true,
	
	emptyText: 'No records found',

	store: 'main.GetTickets',
	
	viewConfig: {
		plugins: [{
			pluginId: 'preview',
			ptype: 'preview',
			bodyField: 'ticketMessageShort',
			previewExpanded: true
		}]
	},
						
	columns: [
		{
			xtype: 'templatecolumn',
			dataIndex: 'ticketID',
			cls: 'feed-grid',
			tpl: '<tpl if="sla==1"><div style="background: red; color: #fff; padding: 0px 3px 0px 3px; width: auto; float: left; -moz-border-radius: 3px; border-radius: 3px; font-family: Arial; font-size: 11px; font-weight: bold; text-align: center; margin-right: 4px;">SLA<br/>15</div></tpl><span style="font-size: 14px;"><b>{ticketTitle}</b></span><br/><i>#{ticketID}</i> {lastMessageDate}',
			text: 'String',
			flex: 1
		}
	],

	dockedItems:  [{
		xtype: 'pagingtoolbar',
		dock: 'bottom',
		store: 'main.GetTickets',
		displayInfo: false
        }]



});



