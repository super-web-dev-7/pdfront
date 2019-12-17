Ext.define('HD.store.settings.GetAllDepartmentsBasic', {
    extend: 'Ext.data.Store',
    fields: ['id', 'name'],

	autoLoad: true,
	proxy: {
        type: 'ajax',
        url: 'index.php?m=emailmanagement&p=getDepartmentsCombo',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
		simpleSortMode: true
    }


});