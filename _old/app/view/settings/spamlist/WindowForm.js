Ext.define('HD.view.settings.spamlist.WindowForm', {
    extend: 'Ext.window.Window',
    autoShow: true,
	modal: true,
	layout: 'fit',
	width: 400,
	height: 120,
	border: false,


	functionSave:'',

    initComponent: function() {
		
				
		
		
		
		var me = this;
		this.title =  Lan.settings.spamlist.WinTitleAddEmailToSpam;
		
		this.items = [
			{
                xtype: 'form',
				bodyPadding: 5,
				layout: 'anchor',
				defaults: {
					anchor: '100%'
				},
				fieldDefaults: {
					msgTarget: 'side',
					labelWidth: 100
				},
                items: [
					{ 
						xtype: 'hiddenfield', 
						name : 'id'
					},
					{ 
						xtype: 'textfield', 
						name : 'email', 
						fieldLabel: Lan.settings.spamlist.EmailAddress,
						allowBlank:false,
						vtype: 'email',
						listeners: {
							afterrender: function(t, e){
								Ext.defer(function(){
									t.focus();
								}, 100);
							}
						}
						
					}								
				],
				listeners: {
					//afterRender: function(thisForm, options){
					//	this.keyNav = Ext.create('Ext.util.KeyNav', this.el, {                    
					//		enter: me.functionSave,
					//		scope: this
					//	});
					//}
				} 
			}
		];
        this.buttons = [
           {
                text: Lan.global.Save,
				glyph: 'xf0c7@FontAwesome',
				action: 'buttonEmailSpamSave'
            },
			{
                text: Lan.global.Close,
				glyph: 'xf000d@FontAwesome',
                scope: this,
                handler: this.close
            }
        ];

	

        this.callParent(arguments);
    }
});