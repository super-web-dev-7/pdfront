Ext.define('HD.store.main.GetTickets', {
    extend: 'Ext.data.Store',

    model: 'HD.model.main.GetTickets',
	pageSize : 20,

	autoLoad: true,
	remoteFilter: true,
	remoteSort: true,
	proxy: {
        type: 'ajax',
        url: 'index.php?m=tickets&p=getAllTickets',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
		simpleSortMode: true
    },



	//sortOnLoad: true
	sorters: { property: 'sla', direction : 'DESC' }


});