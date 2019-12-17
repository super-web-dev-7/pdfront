Ext.define('HD.store.settings.UserType', {
    extend: 'Ext.data.ArrayStore',
    fields: ['id', 'name'],
    data: [
		['1','Admin'],
		['2','User']
    ]
});