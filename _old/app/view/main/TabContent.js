Ext.define('HD.view.main.TabContent', {
    extend: 'Ext.container.Container',
    alias: 'widget.tabContent',
	itemId: 'tabContent',
	layout: 'border',

		
	initComponent: function() {
		
		Ext.apply(this, {
            
			items:	 [ {
							xtype: 'container',
							flex: 1,
							region: 'center',
							autoScroll: true,					
							style: {backgroundColor:'#efefef'},
							items:  [ 
								{xtype: 'panel', itemId: 'messageTicketsPanel', title: 'Where Is My printer', html: '<div style="background: #efefef">Ticket ID: #LJT-XP87788571</div><div style="background: #efefef">Client: Gabriel Janosik</div>'}, 
								{xtype: 'userview'}, 
								{xtype: 'respondTabs'}
							]
						},{		
			
							xtype: 'container',
							region: 'north',
							//region: 'west',
							
							split: true,
							height: 320,
							layout: {
								type: 'fit'
							},
							
							items: [{ xtype: 'ticketsGrid' }]
								
						}]

		});


        this.callParent(arguments);
    },

		
});
 