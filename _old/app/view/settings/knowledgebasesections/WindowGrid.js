Ext.define('AM.view.knowledgebasesections.WindowGrid', {
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
        this.title= Lan.knowledgebasesections;
		this.items = [
			    {
					xtype: 'grid',
					border: false,
					store : 'KnowledgebaseSections',
					columns : [
							{header: Lan.id,				dataIndex: 'id',			flex: 1},
							{header: Lan.sectionname,		dataIndex: 'sectionName',	flex: 10},
							{header: Lan.disabled,			dataIndex: 'isDisabled',	flex: 1, renderer: function(v){
								var store=Ext.getStore('YesNo');
								var pos=store.find('id', v);
								if(pos>-1)return store.getAt(pos).data.name;
							}}	
							
							 	 	 	 	 
					],
					
					dockedItems: [{
					   xtype: 'pagingtoolbar',
					   store: 'KnowledgebaseSections', 
					   dock: 'bottom',
					   displayInfo: true
					}],
					
					tbar: [
						{text: Lan.addsection,		iconCls: 'add16',		action: 'buttonKnowledgebaseSectionsAddForm' }, '-',
						{text: Lan.editsection,   id:'buttonKnowledgebaseSectionsEdit',      disabled: true,	iconCls: 'edit16',	 action: 'buttonKnowledgebaseSectionsEdit'   }
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
                text: Lan.close,
				iconCls: 'cross',
                scope: this,
                handler: this.close
            }
        ];

		

        this.callParent(arguments);
    }
});