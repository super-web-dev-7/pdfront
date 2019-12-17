Ext.define('HD.view.kb.section.WindowGrid', {
    extend: 'Ext.window.Window',
	layout : 'fit',
    autoShow: true,
	modal: true,
	
	width: 800,
	height:500,

	headerPosition: 'top',
	constrainHeader: true,
	draggable: true,
	maximizable: true,



    initComponent: function() {
        this.title= Lan.kb.KBWinSectionTitle;
		this.items = [
			    {
					xtype: 'grid',
					border: false,
					store : 'kb.KnowledgebaseSections',
					columns : [
							{header: Lan.kb.SectionId,					dataIndex: 'id',			flex: 1},
							{header: Lan.kb.SectionGridSection,		dataIndex: 'sectionName',	flex: 2},
							{header: Lan.kb.SectionGridDisabled,		dataIndex: 'isDisabled',	flex: 1, renderer: function(v){
								var store=Ext.getStore('YesNo');
								var pos=store.find('id', v);
								if(pos>-1)return store.getAt(pos).data.name;
							}}	
							
							 	 	 	 	 
					],
					
					dockedItems: [{
					   xtype: 'pagingtoolbar',
					   store: 'kb.KnowledgebaseSections', 
					   dock: 'bottom',
					   displayInfo: true
					}],
					
					
					
					
					tbar: [
						{text: Lan.kb.SectionButtonAdd,		glyph: 'xf196@FontAwesome',			action: 'buttonKnowledgebaseSectionsAddForm' }, '-',
						{text: Lan.kb.SectionButtonEdit,   id:'buttonKnowledgebaseSectionsEdit',      disabled: true,	glyph: 'xf044@FontAwesome',	 action: 'buttonKnowledgebaseSectionsEdit'   }
					],

					listeners: {
						selectionchange: function(view){
							
											var sel		= view.selected.items.length;
											if(sel){
												Ext.getCmp('buttonKnowledgebaseSectionsEdit').enable();
											}else{
												Ext.getCmp('buttonKnowledgebaseSectionsEdit').disable();	
											}
										 }
					}

				} 
        ];


		
        this.buttons = [
           {
                text: Lan.global.Close,
				iconCls: 'cross',
                scope: this,
                handler: this.close
            }
        ];

		

        this.callParent(arguments);
    }
});