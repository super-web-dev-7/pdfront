Ext.define('HD.view.settings.departments.DepartmentsGrid', {
   
	extend: 'Ext.grid.Panel',

	alias: 'widget.departmentsGrid',
	border: false,
	store : 'settings.Departments',



    initComponent: function() {
        this.title=Lan.settings.departments.GridTitle;
					
		this.columns = [
						{header: Lan.settings.departments.Id,					dataIndex: 'id', width: 50 },
						{header: Lan.settings.departments.DepartmentName,		dataIndex: 'departmentName', flex: 5},
						{header: Lan.settings.departments.DepartmentType,		dataIndex: 'departmentType', flex: 5, hidden: true},	
						{header: Lan.settings.departments.DepartmentReplyEmail, dataIndex: 'resplyEmailiIdName', flex: 5},
							
					];
					
		this.dockedItems= [{
					   xtype: 'pagingtoolbar',
					   store: 'settings.Departments', 
					   dock: 'bottom',
					   displayInfo: true
					}];
					
		this.tbar= [
						{text:  Lan.settings.departments.AddDepartment,		glyph: 'xf196@FontAwesome',	action: 'buttonDepartmentsAddForm' }, '-',
						{text:  Lan.settings.departments.EditDepartment,	 id:'buttonDepartmentsEdit',	disabled: true,	glyph: 'xf044@FontAwesome',	 action: 'buttonDepartmentsEdit'   },'-',
						{text:  Lan.settings.departments.DelDepartment,		id:'buttonDepartmentsRemove',	disabled: true, glyph: 'xf014@FontAwesome',   action: 'buttonDepartmentsRemove' }
					];
  		
        this.callParent(arguments);
    }




});