Ext.define('HD.store.settings.Users', {
    extend: 'Ext.data.Store',

    model: 'HD.model.settings.Users',
	pageSize : 20,

	autoLoad: true,
	remoteFilter: true,
	remoteSort: true,
	proxy: {
        type: 'ajax',
        url: 'index.php?m=users&p=getAllUsers',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
		simpleSortMode: true
    }


});