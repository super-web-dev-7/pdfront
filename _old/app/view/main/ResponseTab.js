Ext.define('HD.view.main.ResponseTab' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.responseTab',
	
	title: Lan.main.response.WinTitle, 
	layout: 'vbox',
	//height: 'auto',
	autoScroll: true,
	waitMsgTarget: true,
	glyph: 'xf075@FontAwesome',
	
	initComponent: function() {
        var me =this;




		this.fileField= function(){
			var ret={
					xtype: 'container',
					layout: 'hbox',
				
					items: [{
							xtype: 'filefield',
							name: 'attach[]',
							margin: 5,
							allowBlank: true,
							anchor: '100%',
							buttonText: Lan.global.SelectFile ,
							listeners:{
								dirtychange: function( field, value, eOpts ){
									me.items.items[4].add(me.fileField());
								}
							},
							flex: 10
						},
						{
							xtype: 'button',
							text: Lan.global.RemoveFile,
							margin: 5,
							listeners:{
								click: function( field, value, eOpts ){
									var filefield=field.up('container').down('filefield');
									if( filefield.getValue() ){
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




		this.items= [
			{
				fieldLabel:	Lan.main.response.Message,
				labelAlign:	'top',
				name: 'messageText',
				xtype: 'textarea',
				margin: 5,
//				anchor: '100% 100%',
				width: '100%',
				height: 200
			},{
				xtype: 'hiddenfield',
				name: 'type',
				value: 'addResponse'

			},
									{
										fieldLabel:		Lan.main.response.Knowledgebase,
										labelAlign		:'top',
										name:			'combo',
width: '100%',
										store:			'kb.KnowledgebaseCombo',
										valueField:		'id',
										displayField:	'name',
										margin: 5,
										xtype:			'combo',
										queryMode:		'remote',
										editable:		false,
										anchor:			'100%',
										listeners:{
											change: function(t, newValue, oldValue, eOpts ){
												var ext=Ext.create('HD.model.KnowledgebaseGetOne');
												ext.setId(newValue);
												ext.setCallback(function(data){ 
													me.down('[name=messageText]').setValue(data.description);
	  											    me.items.items[4].removeAll();
													var aAttachs= data.attachs;
													for(var i=0; i<aAttachs.length; i++){
														me.addAttachment(aAttachs[i]);
													}


												});
												ext.execute();
											}
										}
									},
									{
										xtype: 'label',
										margin: 5,
										text: Lan.main.response.Attachments
									},
									{
										xtype: 'container',
											width: '100%'

									},
									{
										xtype: 'container',
										items: [me.fileField()],
											width: '100%'

									}
		];


		this.containerAttachmentsRespondFromHardDisc  = this.items['5'];

		this.bbar= [
			{text: Lan.global.Save, itemId: 'buttonSendForm', glyph: 'xf0c7@FontAwesome', scale: 'medium'}
		];



		this.addAttachment= function(aData){
			var attach=me.attachField(aData.id, aData.fileName, aData.fileSize);
			var container=me.items.items[4];
			container.add(attach);
		}


		this.attachField= function(id, fileName, fileSize){
			var ret={
						xtype: 'container',
						layout: 'hbox',
						items: [
						{
							xtype: 'displayfield',
							//fieldLabel: 'Attachment',
							margin: 5,
							value: fileName+" ("+fileSize+")",
							flex: 10
						},
						{
							xtype: 'hiddenfield',
							name: 'existAttach[]',
							value: id
						},
						
						{
							xtype: 'button',
							text: Lan.global.RemoveFile,
							margin: 5,
							listeners:{
								click: function( field, value, eOpts ){
									field.up('container').removeAll();	
								}
								
							},
							flex: 1
						}
					]
			};
			return ret;
		}

		this.clearForm= function(){
			// zalaczniki z dysku
			var cont=me.items.items[5];
			cont.removeAll();
			cont.add(me.fileField());
			
			// zalaczniki z knowledgebase
			me.items.items[4].removeAll();
			
			me.down('[name=messageText]').setValue('');
			me.down('[name=combo]').clearValue();
		}


        this.callParent(arguments);
    }	
	
	



});