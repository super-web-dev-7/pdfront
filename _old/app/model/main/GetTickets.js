Ext.define('HD.model.main.GetTickets', {
    extend: 'Ext.data.Model',
    
	fields: [
		{ name: 'id',					type: 'int'},
		{ name: 'ticketID',				type: 'string'},
		{ name: 'ticketTitle',			type: 'string'},
		{ name: 'ticketMessageShort',	type: 'string'},
		{ name: 'ticketDate',			type: 'string'},
		{ name: 'lastMessageDate',		type: 'string'},
		{ name: 'priority',				type: 'int'},
		{ name: 'sla',					type: 'int'},
		{ name: 'senderEmail',			type: 'string'}		
	]
});	