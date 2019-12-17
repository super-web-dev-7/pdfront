Ext.define('HD.model.kb.Knowledgebase', {
    extend: 'Ext.data.Model',
    fields: [
		{ name: 'id',			type: 'int'},
		{ name: 'sectionId',	type: 'int'},
		{ name: 'title',		type: 'string'},
		{ name: 'description',	type: 'string' },
		{ name: 'addedById',	type: 'int'},
		{ name: 'addDate',		type: 'string' },
		{ name: 'isDisabled',	type: 'int'},
		{ name: 'sectionName',	type: 'string'}
		
	]
});