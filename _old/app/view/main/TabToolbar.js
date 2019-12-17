Ext.define('HD.view.main.TabToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias : 'widget.TabToolbar',
    	
	region: 'center',
					
	docked: 'top',
	items : [
		{text:	Lan.main.MenuNewTicket,			glyph: 'xf196@FontAwesome',		action:'buttonNewTicket'},
		{text:	Lan.main.MenuSearch,hidden: true,			glyph: 'xf002@FontAwesome',		action:'buttonSearch'},
		{text:	'View',		hidden: true,		iconCls:'delete-icon16',	action:'buttonView'},
		{text:	'Departments:',		hidden: true,			glyph: 'xf0e8@FontAwesome',	action:'buttonDepartments'},
		{text:	'PDF',		hidden: true,		iconCls:'delete-icon16',	action:'buttonGetPDF'},
		{text:	Lan.main.Spam,					glyph: 'xf21b@FontAwesome',	action:'buttonMarkSpam' },
		{xtype:	'button', text: Lan.main.MenuMoveTo,	glyph: 'xf045@FontAwesome',  menu: [

						{text: Lan.main.TabToDo,		action: 'buttonMoveTo01' },
						{text: Lan.main.TabActive,		action: 'buttonMoveTo02' },
						{text: Lan.main.TabClosed,		action: 'buttonMoveTo03' },
						{text: Lan.main.TabWaiting,		action: 'buttonMoveTo04' },
						{text: Lan.main.TabTrash,		action: 'buttonMoveTo05' }
		
		]},
		{text: Lan.main.MenuAddToKB, glyph: 'xf02d@FontAwesome', action: 'buttonAddKB'},

		'->',
		{text: Lan.main.Layout, glyph: 'xf0db@FontAwesome', action:'buttonChangeLayout'}

	]

});




	