Ext.define('HD.view.main.RespondTabs', {
    extend: 'Ext.container.Container',
    alias: 'widget.respondTabs',

		
	items: [
		{
			xtype : 'tabpanel', 
			minHeight: 300, 
			padding: 15, 
			items: [{xtype: 'responseTab'},
					{xtype: 'internalNoteTab'},
					{xtype: 'forwardTab'},
					{xtype: 'externalQuestionTab'}
			] 
		}] 
});
