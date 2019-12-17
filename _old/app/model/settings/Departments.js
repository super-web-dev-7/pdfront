Ext.define('HD.model.settings.Departments', {
    extend: 'Ext.data.Model',
    fields: [
		{ name: 'id',						type: 'int'},
		{ name: 'departmentName',			type: 'string'},
		{ name: 'managerId',				type: 'int'},
		{ name: 'departmentTemplateEmailId',type: 'string'},
		{ name: 'departmentType',			type: 'string'},
		{ name: 'departmentSignature',		type: 'string'},
		{ name: 'emailTemplateId',			type: 'string'},
		{ name: 'resplyEmailiId',			type: 'int'},
		{ name: 'resplyEmailiIdName',		type: 'string'}

		
	]
});