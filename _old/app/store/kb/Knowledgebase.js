Ext.define('HD.store.kb.Knowledgebase', {
    extend: 'Ext.data.Store',

    model: 'HD.model.kb.Knowledgebase',
	pageSize : 20,

	autoLoad: false,
	remoteFilter: true,
	remoteSort: true,
	proxy: {
        type: 'ajax',
        url: 'index.php?m=knowledgebase&p=showall',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
		simpleSortMode: true
    }


});