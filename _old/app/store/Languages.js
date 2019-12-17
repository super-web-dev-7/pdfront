Ext.define('HD.store.Languages', {
    extend: 'Ext.data.ArrayStore',
    fields: ['id', 'name'],
    data: [
		['eng', 'English'],
		['pol', 'Polish'],
		['ger', 'German']
    ]
});