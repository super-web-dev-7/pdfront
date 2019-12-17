Ext.define('AM.view.knowledgebase.Grid', {
    extend: 'Ext.grid.Panel',
    alias : 'widget.knowledgebasegrid',


	border: false,
	store : 'Knowledgebase',


    initComponent: function() {
        this.title= Lan.knowledgebase;

		this.columns = [
							{header: Lan.id,					dataIndex: 'id',			flex: 1},
							{header: Lan.knowledgebasetitle,	dataIndex: 'title',			flex: 5 },
							{header: Lan.knowledgebasesection,	dataIndex: 'sectionName',	flex: 3},
							{header: Lan.addedById,				dataIndex: 'addedById',		flex: 1},
							{header: Lan.addDate,				dataIndex: 'addDate',		flex: 1},
							{header: Lan.isDisabled,			dataIndex: 'isDisabled',	flex: 1, renderer: function(v){
								var store=Ext.getStore('YesNo');
								var pos=store.find('id', v);
								if(pos>-1)return store.getAt(pos).data.name;
							}}	
							 	 	 	 	 
		];
					
		this.dockedItems= [{
					   xtype: 'pagingtoolbar',
					   store: 'Knowledgebase', 
					   dock: 'bottom',
					   displayInfo: true
		}];
					
		this.tbar= [
						{text: Lan.addknowledgebase + 'aa',	glyph: 'xf196@FontAwesome',		action: 'buttonKnowledgebaseAddForm' }, '-',
						{text: Lan.editknowledgebase,   id:'buttonKnowledgebaseEdit',		disabled: true,	iconCls: 'edit16',	 action: 'buttonKnowledgebaseEdit'   },'-',
						{text: Lan.removeknowledgebase, id:'buttonKnowledgebaseRemove',		disabled: true, iconCls: 'remove16', action: 'buttonKnowledgebaseRemove' },
						'->',	
						{text: Lan.knowledgebasesections, iconCls: 'sections16', action: 'buttonKnowledgebaseSections' }
		];

		this.listeners= {
						selectionchange: function(view){
							
											var sel		= view.selected.items.length;
											if(sel){
												Ext.getCmp('buttonKnowledgebaseEdit').enable();
												Ext.getCmp('buttonKnowledgebaseRemove').enable();
											}else{
												Ext.getCmp('buttonKnowledgebaseEdit').disable();	
												Ext.getCmp('buttonKnowledgebaseRemove').disable();	
											}
										 }
		}
	

        this.callParent(arguments);
    }
});