Ext.define('HD.controller.main.Main', {
	
	extend: 'Ext.app.Controller',
	
	stores: ['Languages', 'main.GetTickets', 'main.GetTicketMessages', 'settings.GetAllDepartmentsBasic', 'kb.KnowledgebaseCombo'],
	
	models: ['main.GetTickets', 'main.GetTicketMessages'],
	
	views: ['main.MainTabs', 'main.TabToolbar', 'main.TabContent', 'main.TicketsGrid', 'main.ViewMessages', 'main.RespondTabs', 'main.InternalNoteTab', 'main.ResponseTab', 'main.ForwardTab', 'main.ExternalQuestionTab'],
	
	
	
	layoutSetHorizontalOrVertical: 0,
	
	
	init: function() {
		this.control({
			'viewport': {
				beforerender: function(){
					//alert('jestm');
					
					var TiketsStore=Ext.getStore('main.GetTickets');
					
					TiketsStore.on('beforeload', function(s) {
							s.getProxy().extraParams = { id: '0'};
					});		
					
					TiketsStore.loadPage(1);
					TiketsStore.load(function(records, operation, success){
						Ext.ComponentQuery.query("#mainTabs")[0].getActiveTab().down('#ticketsGrid').getSelectionModel().select(0, true); 
					
						var tId=Ext.ComponentQuery.query("#mainTabs")[0].getActiveTab().down('#ticketsGrid').getSelectionModel().getSelection()[0].data.id;		
						var record=Ext.ComponentQuery.query("#mainTabs")[0].getActiveTab().down('#ticketsGrid').getSelectionModel().getSelection()[0];
						
						Ext.getStore('main.GetTicketMessages').load({params: {id: tId}});	
					
						var messagesPanel=Ext.ComponentQuery.query("#mainTabs")[0].getActiveTab().down('#messageTicketsPanel');			
						
						messagesPanel.update('<div style="font-family: \Open Sans\', sans-serif; font-size: 13px; color: rgb(88, 102, 110);"><div style="width: 40%; float: left; padding: 5px;"><div style="background: #fff"><b>'+Lan.main.viewmessages.TicketId+':</b> #'+ record.data.ticketID+'</div><div style="background: #fff"><b>'+Lan.main.viewmessages.Sender+':</b> '+record.data.From+'</div><div style="background: #fff">'+Lan.main.viewmessages.Email+': '+record.data.senderEmail+'</div></div><div style="width: 40%; float: right; padding: 5px;"><div style="background: #fff">'+Lan.main.viewmessages.Date+': '+record.data.lastMessageDate+'</div><div style="background: #fff">'+Lan.main.viewmessages.Priority+': '+record.data.priority+'</div><div style="background: #fff">'+Lan.main.viewmessages.SLA+': '+record.data.sla+'</div></div><div style="clear: both;"></div> </div>');
			
						messagesPanel.setTitle(record.data.ticketTitle);					
					});					
					
					//
				},
				afterrender: this.changeMainLayout
            },

		
		
			'[action=buttonAddKB]': {
				click: this.addToKB
			},

			'[action=buttonChangeLayout]':{
			
				click: this.changeMainLayout
			
			},
									
			'[action=buttonMarkSpam]':{
				click: this.markEmailAsSpam
			},


			'[action=buttonMoveTo01]':{
				click: this.moveTicketTo01
			},

			'[action=buttonMoveTo02]':{
				click: this.moveTicketTo02
			},

			'[action=buttonMoveTo03]':{
				click: this.moveTicketTo03
			},

			'[action=buttonMoveTo04]':{
				click: this.moveTicketTo04
			},

			'[action=buttonMoveTo05]':{
				click: this.moveTicketTo05
			},


			'[action=logout]':{
				click: function(){
					window.location.href = 'index.php?m=logowanie&p=logout';
				}
			},



			'#mainTabs': {
				tabchange: this.tabChanged
			},
			
			'#ticketsGrid': {
				itemclick: this.getTicketMessages
			},

			
			
			'#buttonSendForm': {

				click: function(button){
					var ticketId = Ext.ComponentQuery.query("#mainTabs")[0].getActiveTab().down('#ticketsGrid').getSelectionModel().getSelection()[0].data.id;
					var sendingDataForm=button.up('form');
					this.sendMessagesResponse(sendingDataForm, ticketId);
				}	
			}
			

		});

	},



	changeTabLayout: function(tabObject){
		
		chLay=tabObject;
		
		chLay.removeAll();


		
		
		
		chLay.add({
				xtype: 'container',
				flex: 1,
				region: 'center',
				autoScroll: true,					
				style: {backgroundColor:'#ffffff'},
				items:  [ 
					{xtype: 'panel', itemId: 'messageTicketsPanel', title: '...', html: '<div style="font-family: \Open Sans\', sans-serif; font-size: 13px; color: rgb(88, 102, 110);"><div style="width: 40%; float: left; padding: 5px;"><div style="background: #fff"><b>'+Lan.main.viewmessages.TicketId+':</b></div><div style="background: #fff"><b>'+Lan.main.viewmessages.Sender+':</b> </div><div style="background: #fff">'+Lan.main.viewmessages.Email+': </div></div><div style="width: 40%; float: right; padding: 5px;"><div style="background: #fff">'+Lan.main.viewmessages.Date+': </div><div style="background: #fff">'+Lan.main.viewmessages.Priority+': </div><div style="background: #fff">'+Lan.main.viewmessages.SLA+':</div></div><div style="clear: both;"></div> </div>'}, 
					{xtype: 'userview'}, 
					{xtype: 'respondTabs'}
				]
		});



		if(this.layoutSetHorizontalOrVertical){
			chLay.add({	
					xtype: 'container',
					region: 'west',
					split: true,
					width: 320,
					layout: {
						type: 'fit'
					},
					items: [{ xtype: 'ticketsGrid' }]
				});

			//this.layoutSetHorizontalOrVertical=0;
		}else{
			chLay.add({	
				xtype: 'container',
				region: 'north',
				split: true,
				height: 320,
				layout: {
					type: 'fit'
				},
					
				items: [{ xtype: 'ticketsGrid' }]
						
			});
			
			//this.layoutSetHorizontalOrVertical=1;
		}		
	},


	
	changeMainLayout: function(){


		var chLay=Ext.ComponentQuery.query("#mainTabs")[0].getActiveTab().down('#tabContent');
		//var chLay=Ext.ComponentQuery.query("#mainTabs")[0].down('#tabContent');
		
		if(this.layoutSetHorizontalOrVertical){
			this.layoutSetHorizontalOrVertical=0;
		}else{
			this.layoutSetHorizontalOrVertical=1;
		}
				//console.log(chLay);
		this.changeTabLayout(chLay);

		//var chLay1=Ext.ComponentQuery.query("#mainTabs")[1].down('#tabContent');
		
		//this.changeTabLayout(chLay1);
		

	
	},


	addToKB: function(){
		//alert('Add To knowledgeBase');
		var win=Ext.create('HD.view.kb.WindowForm');

		//var mainTabs=Ext.ComponentQuery.query("#mainTabs")[0].getActiveTab().itemId;			
		
		
		var gridTicket=Ext.ComponentQuery.query("#mainTabs")[0].getActiveTab().down('ticketsGrid');
		
		var ticketId = gridTicket.getSelectionModel().getSelection()[0].data.id;


		win.down('form').getForm().load({
			url: 'index.php',
			params: {
				m	: 'tickets',
				p	: 'getTicketToKB',
				id	: ticketId
			},
			method: 'GET',
			waitMsg: Lan.global.Loading,
			failure: function(form, action) {
				switch (action.failureType) {
					case Ext.form.action.Action.CONNECT_FAILURE:
						 Ext.Msg.alert(Lan.global.WinTitleConnectionFailure, Lan.global.ConnectionFailureMessage);
						 break;
					case Ext.form.action.Action.SERVER_INVALID:
						 if(action.result.error){
							Ext.Msg.alert(Lan.global.WinTitleConnectionFailure, action.result.error);
						 }
				}
			},
			success: function(form, action){
				
			}
		});

	},
	
	
	tabChanged: function(tabPanel, newCard, oldCard, eOpts){

		
		
		this.changeTabLayout(newCard.down('#tabContent'));
		
		var TiketsStore=Ext.getStore('main.GetTickets');
		
		TiketsStore.on('beforeload', function(s) {
				s.getProxy().extraParams = { id: newCard.itemId};
		});		
		
		TiketsStore.loadPage(1);
		TiketsStore.load(function(records, operation, success){
			Ext.ComponentQuery.query("#mainTabs")[0].getActiveTab().down('#ticketsGrid').getSelectionModel().select(0, true); 
		
			var tId=Ext.ComponentQuery.query("#mainTabs")[0].getActiveTab().down('#ticketsGrid').getSelectionModel().getSelection()[0].data.id;		
			var record=Ext.ComponentQuery.query("#mainTabs")[0].getActiveTab().down('#ticketsGrid').getSelectionModel().getSelection()[0];
			
			Ext.getStore('main.GetTicketMessages').load({params: {id: tId}});	
				
		
			var messagesPanel=Ext.ComponentQuery.query("#mainTabs")[0].getActiveTab().down('#messageTicketsPanel');			
			
			messagesPanel.update('<div style="font-family: \Open Sans\', sans-serif; font-size: 13px; color: rgb(88, 102, 110);"><div style="width: 40%; float: left; padding: 5px;"><div style="background: #fff"><b>'+Lan.main.viewmessages.TicketId+':</b> #'+ record.data.ticketID+'</div><div style="background: #fff"><b>'+Lan.main.viewmessages.Sender+':</b> '+record.data.From+'</div><div style="background: #fff">'+Lan.main.viewmessages.Email+': '+record.data.senderEmail+'</div></div><div style="width: 40%; float: right; padding: 5px;"><div style="background: #fff">'+Lan.main.viewmessages.Date+': '+record.data.lastMessageDate+'</div><div style="background: #fff">'+Lan.main.viewmessages.Priority+': '+record.data.priority+'</div><div style="background: #fff">'+Lan.main.viewmessages.SLA+': '+record.data.sla+'</div></div><div style="clear: both;"></div> </div>');

			messagesPanel.setTitle(record.data.ticketTitle);		
		
		});
		//Dodać zmianę strony www na 1
		//Ext.ComponentQuery.query("#mainTabs")[0].getActiveTab().down('#ticketsGrid').getSelectionModel().select(0);

	},



	getTicketMessages: function(grid,record,item,index,event,ops){
		

		Ext.getStore('main.GetTicketMessages').load({
			params: {id: record.data.id}
		});	
	
		
		//var mainTabs=Ext.ComponentQuery.query("#mainTabs")[0].getActiveTab().itemId;
		
		var messagesPanel=Ext.ComponentQuery.query("#mainTabs")[0].getActiveTab().down('#messageTicketsPanel');

		//var messagesPanel=Ext.ComponentQuery.query("#messageTicketsPanel")[mainTabs];
		
		//console.log(messagesPanel);
		//console.log(record.data);
		
		messagesPanel.update('<div style="font-family: \Open Sans\', sans-serif; font-size: 13px; color: rgb(88, 102, 110);"><div style="width: 40%; float: left; padding: 5px;"><div style="background: #fff"><b>'+Lan.main.viewmessages.TicketId+':</b> #'+ record.data.ticketID+'</div><div style="background: #fff"><b>'+Lan.main.viewmessages.Sender+':</b> '+record.data.From+'</div><div style="background: #fff">'+Lan.main.viewmessages.Email+': '+record.data.senderEmail+'</div></div><div style="width: 40%; float: right; padding: 5px;"><div style="background: #fff">'+Lan.main.viewmessages.Date+': '+record.data.lastMessageDate+'</div><div style="background: #fff">'+Lan.main.viewmessages.Priority+': '+record.data.priority+'</div><div style="background: #fff">'+Lan.main.viewmessages.SLA+': '+record.data.sla+'</div></div><div style="clear: both;"></div> </div>');

		messagesPanel.setTitle(record.data.ticketTitle);


	
	
	
	
	
	
	
	
	
	
	},
	

	sendMessagesResponse: function(messageResponseForm, ticketId){
						
										
					if ( messageResponseForm.getForm().isValid() ) {
						messageResponseForm.getForm().submit({url: 'index.php', waitMsg: Lan.global.Saving, method: 'post', params: {m: 'tickets', p: 'addMessage', ticketId: ticketId}, 
								
								success: function(form, action){
									//Ext.Msg.alert('Nowe zgłoszenie', action.result.message);
								
									Ext.getStore('main.GetTickets').load();
									
									Ext.getStore('main.GetTicketMessages').load({
										params: {id: ticketId}
									});									
									
									messageResponseForm.getForm().reset();
								
								},

								failure: function(form, action){
										
									if (action.failureType === Ext.form.action.Action.CLIENT_INVALID) {
										Ext.Msg.alert('CLIENT_INVALID', Lan.global.ConnectionFailureMessage);
									}


									if (action.failureType === Ext.form.action.Action.CONNECT_FAILURE) {
										Ext.Msg.alert('CONNECT_FAILURE',  Lan.global.ConnectionFailureMessage);
									}

									if (action.failureType === Ext.form.action.Action.SERVER_INVALID) {
										Ext.Msg.alert('Błąd!', action.result.message);
									}
								}

						
						} );							

						return true;
					}else{
						return false;					
					}
	
	
	},




	markEmailAsSpam: function(){

		
		var ticketId = Ext.ComponentQuery.query("#mainTabs")[0].getActiveTab().down('#ticketsGrid').getSelectionModel().getSelection()[0].data.id;


		Ext.widget('messagebox').show({
			 title: Lan.info,
			 msg: Lan.settings.spamlist.SureToAdd ,
			 buttons: Ext.Msg.YESNO,
			 icon: Ext.MessageBox.QUESTION,
			 fn: function(btn, text){
				 if (btn == 'yes'){
					
					Ext.Ajax.request({
						url: 'index.php',
						method: 'post',
						params: {
							m: 'tickets',
							p: 'addEmailToSpam',
							id: ticketId
						},
						failure: function(){
						},
						success: function(response){
							var text = response.responseText;
							var json=Ext.JSON.decode(text);
							if(json.success==true){
								Ext.getStore('main.GetTickets').load();
								//successFunction();
							}else{
								
							}
						}
					});				 
				 
				 }
			 }
			 
		});





	},

	moveTicketTo01: function(){
	
		this.moveTicketTo(0);
	},
	moveTicketTo02: function(){
	
		this.moveTicketTo(1);
	},
	moveTicketTo03: function(){
	
		this.moveTicketTo(2);
	},
	moveTicketTo04: function(){
	
		this.moveTicketTo(3);
	},
	moveTicketTo05: function(){
	
		this.moveTicketTo(4);
	},

	
	moveTicketTo: function(moveToId){
	
		var moveToId;
		
		
		
		var ticketId = Ext.ComponentQuery.query("#mainTabs")[0].getActiveTab().down('#ticketsGrid').getSelectionModel().getSelection()[0].data.id;


		//źle obsługuje przenoszenie PHP
	
		Ext.Ajax.request({
			url: 'index.php',
			method: 'post',
			params: {
				m: 'tickets',
				p: 'moveTicketTo',   //saveMoveToExpected',
				ticketId: ticketId,
				moveToId: moveToId
			},
			failure: function(){

			},
			success: function(response){
				var text = response.responseText;
				var json=Ext.JSON.decode(text);
				if(json.success==true){
					//successFunction(actualTicketId);
					Ext.getStore('main.GetTickets').load();
					//trzeba sprawdzic. Ext.ComponentQuery.query("#mainTabs")[0].getActiveTab().down('#ticketsGrid').getSelectionModel().selectRow(0);
				}else{
					if(json.error){
						Ext.Msg.alert( Lan.global.WinTitleConnectionFailure, json.error );		
					}	
				}
			}
		});
			
	
	}



	
	
});