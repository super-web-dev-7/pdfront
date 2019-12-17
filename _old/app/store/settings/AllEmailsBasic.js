Ext.define('HD.store.settings.AllEmailsBasic', {
    extend: 'Ext.data.Store',

    fields: ['id', {name: 'emailName', mapping: 'email'} ],

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