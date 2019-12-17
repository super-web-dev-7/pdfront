Ext.define('HD.store.settings.GetAllEmailsFull', {
    
	extend: 'Ext.data.Store',

    model: 'HD.model.settings.GetAllEmailsFull',
	pageSize : 20,

	autoLoad: true,
	remoteFilter: true,
	remoteSort: true,
	proxy: {
        type: 'ajax',
        url: 'index.php?m=emailmanagement&p=getAllEmails',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
		simpleSortMode: true
    }


});