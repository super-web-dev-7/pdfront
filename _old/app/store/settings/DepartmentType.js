Ext.define('HD.store.settings.DepartmentType', {
    extend: 'Ext.data.ArrayStore',
    fields: ['id', 'departmentName'],
    data: [
		['1', 'Public'],
		['2', 'Private']
    ]
});