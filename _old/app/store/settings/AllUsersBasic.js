Ext.define('HD.store.settings.AllUsersBasic', {

    extend: 'Ext.data.Store',
	
	fields: ['id', 'userName'],
	autoLoad: true,
	pageSize : 900,
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