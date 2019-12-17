Ext.define('HD.model.settings.Users', {
    extend: 'Ext.data.Model',
    fields: [
		{ name: 'id',				type: 'int'},
		{ name: 'userName',			type: 'string'},
		{ name: 'nameSurname',		type: 'string'}	,
		{ name: 'userType',			type: 'int'},
		{ name: 'departmentName',	type: 'string'},
		{ name: 'userEmail',		type: 'string'}	
	]
});