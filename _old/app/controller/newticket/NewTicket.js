Ext.define('HD.controller.newticket.NewTicket', {
    extend: 'Ext.app.Controller',

    views: [
		'newticket.WindowForm'
    ],

	
	stores: [
		'Priority'
	],

	

    init: function() {
		var me = this;
		this.control({
			'[action=buttonNewTicket]': {
				click: function(button){
					Ext.create('HD.view.newticket.WindowForm');
				}
            },
			'[action=buttonNewTicketSave]': {
				click: this.buttonNewTicketSave
            }
					
		});
    },








	buttonNewTicketSave: function(button){
		var form=button.up('window').down('form').getForm();
				
		if( form.isValid() ){
								
			form.submit({
				url: 'index.php',
				params: {
					m: 'newticket',
					p: 'saveTicket'
				},
				success: function(form, action) {
				    button.up('window').close();
					Ext.getStore('Tickets').load();
				},
				failure: function(form, action) {
					switch (action.failureType) {
						case Ext.form.action.Action.CONNECT_FAILURE:
							Ext.Msg.alert( Lan.failure, Lan.ajaxcommunicationfailed );
							break;
						case Ext.form.action.Action.SERVER_INVALID:
						   Ext.Msg.alert( Lan.failure, action.result.error);
				   }
				}
			});
		}
		
	}





});