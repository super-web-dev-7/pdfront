Ext.define('HD.model.kb.KnowledgebaseSections', {
    extend: 'Ext.data.Model',
    fields: [
		{ name: 'id' },
		{ name: 'sectionName',	type: 'string'},
		{ name: 'isDisabled',	type: 'int'}
	]
});