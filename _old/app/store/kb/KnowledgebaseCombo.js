Ext.define('HD.store.kb.KnowledgebaseCombo', {
    extend: 'Ext.data.Store',
    fields: ['id', 'name'],
	autoLoad: true,
	pageSize : 900,
	proxy: {
        type: 'ajax',
        url: 'index.php?m=knowledgebase&p=getKnowledgebaseCombo',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
		simpleSortMode: true
    }

});