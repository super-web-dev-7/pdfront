Ext.define('HD.store.kb.KnowledgebaseSections', {
    extend: 'Ext.data.Store',

    model: 'HD.model.kb.KnowledgebaseSections',
	pageSize : 20,

	autoLoad: false,
	remoteFilter: true,
	remoteSort: true,
	proxy: {
        type: 'ajax',
        url: 'index.php?m=knowledgebasesections&p=getallsections',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
		simpleSortMode: true
    }


});