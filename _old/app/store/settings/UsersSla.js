Ext.define('HD.store.settings.UsersSla', {
    extend: 'Ext.data.Store',

	fields : ['id', 'emailDomain', 'userSla', 'dateExpire', 'type' ],
	pageSize : 20,

	autoLoad: true,
	remoteFilter: true,
	remoteSort: true,
	proxy: {
        type: 'ajax',
        url: 'index.php?m=userssla&p=getAllUsers',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
		simpleSortMode: true
    }


});