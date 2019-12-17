Ext.define('HD.view.kb.Grid', {
    extend: 'Ext.grid.Panel',
    alias : 'widget.knowledgebasegrid',


	border: false,
	store : 'kb.Knowledgebase',


    initComponent: function() {
        this.title= Lan.kb.TabGridTitle;

		this.columns = [
							{header: Lan.kb.id,					dataIndex: 'id',			flex: 1},
							{header: Lan.kb.GridTitle,	dataIndex: 'title',			flex: 5 },
							{header: Lan.kb.GridSection,	dataIndex: 'sectionName',	flex: 3},
							{header: Lan.kb.GridAddedBy,				dataIndex: 'addedById',		flex: 1},
							{header: Lan.kb.GridAddDate,				dataIndex: 'addDate',		flex: 1},
							{header: Lan.kb.GridisDisabled,			dataIndex: 'isDisabled',	flex: 1, renderer: function(v){
								var store=Ext.getStore('YesNo');
								var pos=store.find('id', v);
								if(pos>-1)return store.getAt(pos).data.name;
							}}	
							 	 	 	 	 
		];
					
		this.dockedItems= [{
					   xtype: 'pagingtoolbar',
					   store: 'kb.Knowledgebase', 
					   dock: 'bottom',
					   displayInfo: true
		}];
					
		this.tbar= [
						{text: Lan.kb.GridButtonAdd,	glyph: 'xf196@FontAwesome',		action: 'buttonKnowledgebaseAddForm' }, '-',
						{text: Lan.kb.GridButtonEdit,   id:'buttonKnowledgebaseEdit',		disabled: true,	glyph: 'xf044@FontAwesome',		 action: 'buttonKnowledgebaseEdit'   },'-',
						{text: Lan.kb.GridButtonDel, id:'buttonKnowledgebaseRemove',		disabled: true, glyph: 'xf014@FontAwesome', action: 'buttonKnowledgebaseRemove' },
						'->',	
						{text: Lan.kb.GridButtonSections, glyph: 'xf02c@FontAwesome', action: 'buttonKnowledgebaseSections' }
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