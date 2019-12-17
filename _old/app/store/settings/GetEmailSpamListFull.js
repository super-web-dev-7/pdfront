Ext.define('HD.store.settings.GetEmailSpamListFull', {
    extend: 'Ext.data.Store',

	fields : ['id', 'email', 'addDate', 'userId'],
	pageSize : 20,

	autoLoad: true,
	remoteFilter: true,
	remoteSort: true,
	proxy: {
        type: 'ajax',
        url: 'index.php?m=emailspam&p=getAllEmails',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
		simpleSortMode: true
    }


});