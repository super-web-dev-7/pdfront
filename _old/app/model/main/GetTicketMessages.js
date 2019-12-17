Ext.define('HD.model.main.GetTicketMessages', {
    extend: 'Ext.data.Model',
    
	fields: [
		{ name: 'id', type: 'int'},
		{ name: 'messageText', type: 'string'},
		 {name: 'ticketId'},
		 {name: 'messageType'},
		 {name: 'ipAddress'},
		 {name: 'userSurname'},
		 {name: 'messageDate'},
		 {name: 'attachments'},
		 {name: 'departmentName'},
		 {name: 'sendQuestionEmail'},
		 {name: 'messageWasSent', type: 'int' }
	],
	
	proxy: {
        type: 'ajax',
        url: '/index.php?id=2&m=tickets&p=getOneTicket',
        reader: {
            type: 'json',
            root: 'messages',
            successProperty: 'success'
        }
	}
	
});	