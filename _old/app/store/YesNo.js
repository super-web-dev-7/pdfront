Ext.define('HD.store.YesNo', {
    extend: 'Ext.data.ArrayStore',
    fields: ['id', 'name'],
    data: [
		['0', Lan.store.No],
		['1', Lan.store.Yes]
    ]
});