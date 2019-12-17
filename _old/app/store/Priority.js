Ext.define('HD.store.Priority', {
    extend: 'Ext.data.ArrayStore',
    fields: ['id', 'name'],
    data: [
		['0', Lan.store.Low],
		['1', Lan.store.Medium],
		['2', Lan.store.High]


    ]
});