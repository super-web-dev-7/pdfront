Ext.define('HD.store.settings.EmailTemplatesCombo', {
    extend: 'Ext.data.Store',
    fields: ['id', 'name'],
	autoLoad: false,
	pageSize : 900,
	proxy: {
        type: 'ajax',
        url: 'index.php?m=emailtemplates&p=getAllTemplatesCombo',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
		simpleSortMode: true
    }


});