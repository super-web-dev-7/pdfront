Ext.define('HD.view.kb.WindowForm', {
    extend: 'Ext.window.Window',
    autoShow: true,
	modal: true,
	layout: 'fit',
	width: 600,
	height: 700,
	border: false,
	buttonAction: 'buttonKnowledgebaseSave',


    initComponent: function() {
		this.title = Lan.kb.WinTitle;
		
		this.items = [
			{
                xtype: 'form',
				bodyPadding: 15,
				layout: 'anchor',
				defaults: {
					anchor: '100%'
				},
				autoScroll: true,
				fieldDefaults: {
					msgTarget: 'side',
					labelWidth: 100
				},
				waitMsgTarget: true,
                items: [
					{ 
						xtype: 'hiddenfield', 
						name : 'id'
					},
					{ 
						xtype: 'textfield', 
						name : 'title', 
						fieldLabel: Lan.kb.KBFormTitle,
						allowBlank: false, 
						minLength: 4,
						maxLength: 255
					},
					{
						xtype: 'combo',
						store: 'kb.KnowledgebaseSectionsCombo',
						displayField: 'sectionName',
						valueField: 'id',
						fieldLabel: Lan.kb.KBFormSection,
						name: 'sectionId',
						allowBlank:false,
						queryMode: 'remote',
						editable: false
					},							
					{
						xtype: 'combo',
						store: 'YesNo',
						displayField: 'name',
						valueField: 'id',
						fieldLabel: 'otwarte?',//Lan.kb.FormIsDisabled,
						name: 'isDisabled',
						allowBlank: false,
						queryMode: 'local',
						editable: false,
						value: '0'
					},
								
					{ 
						xtype: 'textarea', 
						name : 'description', 
						fieldLabel: Lan.kb.FormDescription,
						allowBlank:false,
						height: 300
					},
					{
						xtype: 'container',
						layout: 'anchor',
						id: 'containerAttachments'
					},
					this.fileField()

										
					
				]
			}
		];
        this.buttons = [
           {
                text: Lan.global.Save,
				glyph: 'xf0c7@FontAwesome',
				action: this.buttonAction
            },
			{
                text: Lan.global.Close,
				glyph: 'xf00d@FontAwesome',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    },



	addAttachment: function(aData){
		var attach=this.attachField(aData.id, aData.fileName, aData.fileSize);
		Ext.getCmp('containerAttachments').add(attach);
	},





	fileField: function(){
		var me=this;
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
								var form=field.up('form');
								form.add( me.fileField() );
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
	},


	attachField: function(id, fileName, fileSize){
		var me=this;
		var ret={
					xtype: 'container',
					layout: 'hbox',
			
					items: [
					{
						xtype: 'displayfield',
						fieldLabel: Lan.global.Attachment,
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











});