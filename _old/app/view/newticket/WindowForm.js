Ext.define('HD.view.newticket.WindowForm', {
    extend: 'Ext.window.Window',
    autoShow: true,
	modal: true,
	layout: 'fit',
	width: 700,
	height: 520,
	border: false,
    
    
    initComponent: function() {
		this.title = Lan.newticket.WinTitle;
		
		this.items = [
			
		
		
{
                xtype: 'form',
				bodyPadding: 15,
				layout: 'anchor',
				defaults: {
					anchor: '100%'
				},
				fieldDefaults: {
					msgTarget: 'side',
					labelWidth: 150
				},
				
				autoScroll: true,



                items: [
					
					{ xtype: 'textfield', name: 'senderEmail',		fieldLabel: Lan.newticket.FormSenderEmail,	vtype: 'email', allowBlank: false},
					{ xtype: 'textfield', name: 'senderName',		fieldLabel: Lan.newticket.FormSenderName,	allowBlank: false},
					{ xtype: 'textfield', name: 'senderPhone',		fieldLabel: Lan.newticket.FormSenderPhone,	allowBlank: true},
					{ xtype: 'textfield', name: 'ticketTitle',		fieldLabel: Lan.newticket.FormTicketTitle,	allowBlank: false},
					{
						xtype: 'combo',
						store: 'settings.Departments',
						displayField: 'departmentName',
						valueField: 'id',
						fieldLabel: Lan.newticket.FormTicketDepartment,
						name: 'departmentId',
						allowBlank:false,
						queryMode: 'local',
						editable: false
					},
					{
						xtype: 'combo',
						store: 'Priority',
						displayField: 'name',
						valueField: 'id',
						fieldLabel: Lan.newticket.FormPriority,
						name: 'priority',
						allowBlank:false,
						queryMode: 'local',
						editable: false,
						value: '0'
					},
					{ xtype: 'textarea',  name : 'messageText',	height: 180, fieldLabel: Lan.newticket.FormMessageText,		allowBlank:true},
					{ xtype: 'label', text: Lan.newticket.FormTicketAttachments},
					
					this.fileField()
					
				]
			}		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		];

		

        this.buttons = [
           {
                text: Lan.global.Save ,
				iconCls: 'save16',
				action: 'buttonNewTicketSave'
            },
			{
                text: Lan.global.Close,
				iconCls: 'close16',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    },



	fileField: function(){
		var me=this;
		var ret={
					xtype: 'container',
					layout: 'hbox',
					items: [{
						xtype: 'filefield',
						name: 'attach[]',
						margin: '5 0 5 0',

						allowBlank: true,
						anchor: '100%',
						buttonText: Lan.newticket.FormSelectFile,
						listeners:{
							dirtychange: function( field, value, eOpts ){
								var win=field.up('window');
								var form=field.up('form');

								win.setHeight( win.getHeight()+35 );
								//form.setHeight( form.getHeight()+35 );
								form.add( me.fileField() );
							}
						},
						flex: 10
					},
					{
						xtype: 'button',
						text: Lan.newticket.FormRemoveFile,
						margin: '5 0 5 5',
						listeners:{
							click: function( field, value, eOpts ){
								var filefield=field.up('container').down('filefield');
								if( filefield.getValue() ){
									var win=field.up('window');
								    var form=field.up('form');

									win.setHeight( win.getHeight()-35 );
									//form.setHeight( form.getHeight()-35 );
									field.up('container').removeAll();	
								}
							}
						},
						flex: 1
					}
				]
			};
		return ret;
	}







});