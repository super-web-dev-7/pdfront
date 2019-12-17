Ext.define('HD.store.settings.Departments', {
    extend: 'Ext.data.Store',

    model: 'HD.model.settings.Departments',
	pageSize : 20,

	autoLoad: true,
	remoteFilter: true,
	remoteSort: true,
	proxy: {
        type: 'ajax',
        url: 'index.php?m=departments&p=showall',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
		simpleSortMode: true
    }


});