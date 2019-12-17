Ext.define('HD.view.main.ViewMessages',{
	
	extend: 'Ext.view.View',
	

	xtype: 'userview',
	
	store: 'main.GetTicketMessages',
	
	emptyText: Lan.main.viewmessages.NoMessages,
	
	autoScroll: true,
	padding: 5,
		
	itemSelector: '#corMess',	
	tpl: [

	'<tpl for=".">',
			'<div style="width: 100%; margin: 0px; padding: 0px;"><div class="avTyp{messageType}" style=" border:3px solid #efefef; height:80px; width: 80px; -webkit-border-radius: 40px; -moz-border-radius: 40px; border-radius: 40px; background: #efefef url(http://steezo.com/wp-content/uploads/2012/12/man-in-suit2.jpg) center center;   background-size: 280% 200%;"></div><div   class="messagesTyp{messageType}">',
				
	
				'<div class="messagesTypeHeader{messageType}">',
					'<tpl if="messageType!=1 && messageType!=7"><span style=" font-size: 15px">{userSurname}</span> <span style="font-size: 10px">{messageDate}</span></tpl>',
					'<tpl if="messageType==7">{sendQuestionEmail}</tpl>',
					'<tpl if="messageType==2 || messageType==5">',
						'<tpl if="messageWasSent==1"> SENT</tpl>',
						'<tpl if="messageWasSent==0"> WAITING TO SEND</tpl>',
					'</tpl>',
				'</div>',
				'<div>{messageText}',
						'<div>',
							'<tpl if="messageType==6">'+'ticketHasBeenClosed'+'</tpl>',
						    '<tpl if="messageType==9">'+'Lan.ticketHasBeenOpened'+'</tpl>',
						    '<tpl if="messageType==10">Przeniesiono do kosza</tpl>',
						    '<tpl if="messageType==11">Przeniesiono do "Wiadomości w toku"</tpl>',
						    '<tpl if="messageType==5">'+'Lan.sendQuestionEmailTo'+': {sendQuestionEmail}<br /></tpl>',
							'<tpl if="departmentName">'+'Lan.forwardToDepartment'+': {departmentName}<br /></tpl> ',
					   '</div>',
				   '<div style="margin-top: 20px;"><tpl if="attachments"><div style="padding: 10px 10px 3px 0px; border-bottom: 1px solid #ffffff; font-weight: bold;">' + Lan.main.viewmessages.Attachements + ': </div><tpl for="attachments"><div style="border-radius: 20px; border: 1px dashed #ffffff; width: 200px; float: left; margin-top: 20px; margin-right: 5px; padding: 20px;">{fileName} ({fileSize} MB)<br/><i class="fa fa-file-text-o fa-1x"></i> <a href="/index.php?m=tickets&p=getAttachment&id={id}" style="text-decoration: none;">' + Lan.main.viewmessages.Download + ' </a></div> </tpl><div style="clear: both;"></div></tpl></div>',
				'</div>',  
			'</div></div>',  
		'</tpl>' 	
	
	
	]


});