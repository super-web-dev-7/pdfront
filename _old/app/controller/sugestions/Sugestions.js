Ext.define('HD.controller.sugestions.Sugestions', {
    extend: 'Ext.app.Controller',


    views: [
        'profile.WindowForm'
    ],


    init: function() {
		this.control({
			'[action=buttonSugestions]': {
				click: function(button){
					var win=Ext.create('HD.view.sugestions.WindowForm');
					
					
					/*
					win.down('form').getForm().load({
						url: 'index.php',
						params: {
							m	: 'users',
							p	: 'getUserProfile'
						},
						waitMsg: 'Loading Data...',
						method: 'GET',
						failure: function(form, action) {
							switch (action.failureType) {
								case Ext.form.action.Action.CONNECT_FAILURE:
									Ext.Msg.alert( Lan.failure, Lan.ajaxcommunicationfailed );
									break;
								case Ext.form.action.Action.SERVER_INVALID:
									if(action.result.error){
										Ext.Msg.alert( Lan.failure, action.result.error);
									}
						   }
						},
						success: function(){
									
						}
					});
					*/	

				}
            },
			'[action=buttonSugestionsSave]': {
				click: this.buttonSugestionsSave
            }
		});

    },
	




	buttonSugestionsSave: function(button){

		var form=button.up('form').getForm();
		
		
		if( form.isValid() ){
			
			form.submit({
				url: 'index.php',
				params: {
					m: 'users',
					p: 'saveSuggestion'
				},
				waitMsg: Lan.global.Saving,
				success: function(form, action) {
				    button.up('window').close();
				},
				failure: function(form, action) {
					switch (action.failureType) {
						case Ext.form.action.Action.CONNECT_FAILURE:
							Ext.Msg.alert( Lan.failure, Lan.ajaxcommunicationfailed );
							break;
						case Ext.form.action.Action.SERVER_INVALID:
							if(action.result.error){
								Ext.Msg.alert( Lan.failure, action.result.error);
							}
				   }
				}
			});
		}
		
		
	}



	

});