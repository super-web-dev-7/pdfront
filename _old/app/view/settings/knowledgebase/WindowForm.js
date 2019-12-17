Ext.define('AM.view.knowledgebase.WindowForm', {
    extend: 'Ext.window.Window',
    autoShow: true,
	modal: true,
	layout: 'fit',
	width: 700,
	height: 750,
	border: false,
	buttonAction: 'buttonKnowledgebaseSave',


    initComponent: function() {
		this.title = Lan.newknowledgebase;
		
		this.items = [
			{
                xtype: 'form',
				bodyPadding: 5,
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
						fieldLabel: Lan.knowledgetitle,
						allowBlank:false, 
						minLength: 4,
						maxLength: 255
					},
					{
						xtype: 'combo',
						store: 'KnowledgebaseSectionsCombo',
						displayField: 'sectionName',
						valueField: 'id',
						fieldLabel: Lan.knowledgebasesection,
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
						fieldLabel: Lan.disabled,
						name: 'isDisabled',
						allowBlank:false,
						queryMode: 'local',
						editable: false,
						value: '0'
					},
					{ 
						xtype: 'textarea', 
						name : 'description', 
						fieldLabel: Lan.knowledgebasedescription,
						allowBlank:false,
						height: 330
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
                text: Lan.save,
				glyph: 'xf0c7@FontAwesome',
				action: this.buttonAction
            },
			{
                text: Lan.close,
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
						fieldLabel: 'Attachment',
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