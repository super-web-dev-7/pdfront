
Ext.define('HD.view.Viewport',{
    extend      : 'Ext.container.Viewport',    
    
	layout		: 'border',

    initComponent   : function(){
        var me = this;
        
        this.items = [ {
		region: 'north',
		xtype: 'toolbar',
		border: false,
		frame: false,
		height: 60,
		style: {backgroundColor:'#1168a7'},
		items: [
			{xtype: 'label', html: '<img src="/media/v001/logoPrimeDesk.svg" style="height: 30px;">', margin: '0px 0px 0px 5px', style: {fontWeight: 'bold' } },
			'->',
			{text: Lan.main.Suggestions,			glyph: 'xf0eb@FontAwesome', action: 'buttonSugestions', cls: 'btn',  scale: 'medium', border: false},
			{text: Lan.main.Profile,	glyph: 'xf007@FontAwesome', action: 'buttonProfile', cls: 'btn',  scale: 'medium', border: false},
			{text: Lan.main.Settings,	glyph: 'xf013@FontAwesome', action: 'buttonSettings', cls: 'btn', scale: 'medium', border: false},
			
			{ xtype: 'tbspacer', width: 50 },
			{text: Lan.main.Logout, glyph: 'xf011@FontAwesome', action: 'logout', cls: 'btn', scale: 'medium', border: false}
		]
	}	,{ xtype: 'mainTabs'} ];

        
		
		me.callParent();
    }




});