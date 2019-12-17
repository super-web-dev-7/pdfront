Ext.define('HD.store.kb.KnowledgebaseSectionsCombo', {
    extend: 'Ext.data.Store',
    fields: ['id', 'sectionName'],
	autoLoad: false,
	pageSize : 900,
	proxy: {
        type: 'ajax',
        url: 'index.php?m=knowledgebase&p=getallsections',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
		simpleSortMode: true
    }


});