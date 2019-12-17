Ext.define('HD.store.settings.SlaType', {
    extend: 'Ext.data.ArrayStore',
    fields: ['id', 'name'],
    data: [ 
		['0', 'Email'],
        ['1', 'Domain']
    ]
});