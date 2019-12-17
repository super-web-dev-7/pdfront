Ext.define('HD.view.settings.users.WindowForm', {
    extend: 'Ext.window.Window',
    autoShow: true,
	modal: true,
	layout: 'fit',
	width: 400,
	height: 300,
	border: false,

    initComponent: function() {
		var me = this;
		this.title = Lan.settings.users.WinTitleAddUser;
		
		this.items = [
			{
                xtype: 'form',
				bodyPadding: 5,
				layout: 'anchor',
				defaults: {
					anchor: '100%'
				},
				fieldDefaults: {
					msgTarget: 'side',
					labelWidth: 100
				},
                items: [
					{ 
						xtype: 'hiddenfield', 
						name : 'id'
					},
					{ 
						xtype: 'textfield', 
						name : 'userName', 
						fieldLabel: Lan.settings.users.LoginName,
						allowBlank:false
					},
					{
						xtype: 'combo',
						store: 'settings.UserType',
						displayField: 'name',
						valueField: 'id',
						fieldLabel: Lan.settings.users.UserType,
						name: 'userType',
						allowBlank:false,
						queryMode: 'local',
						editable: false
					},
					{ 
						xtype: 'textfield', 
						name : 'nameSurname', 
						fieldLabel: Lan.settings.users.UserName,
						allowBlank:false
					},
					{ 
						xtype: 'textfield', 
						name : 'userEmail', 
						fieldLabel:  Lan.settings.users.EmailAddress,
						allowBlank:false
					},
					{
						xtype: 'combo',
						store: 'settings.GetAllDepartmentsBasic',
						displayField: 'name',
						valueField: 'id',
						fieldLabel: Lan.settings.users.DepartmentName,
						name: 'departmentId',
						allowBlank:false,
						queryMode: 'local',
						editable: false
					},
					{ 
						xtype: 'textfield', 
						name : 'userPass', 
						fieldLabel:  Lan.settings.users.UserPassword,
						inputType: 'password' ,
						allowBlank: true
					},
					{ 
						xtype: 'combobox', 
						name :  'lanCode', 
						fieldLabel: Lan.settings.users.Language,
						allowBlank: true,
						store: 'Languages',
						displayField: 'name',
						valueField: 'id',
						allowBlank: false
					}
								
				]
			}
		];
        this.buttons = [
           {
                text: Lan.global.Save,
				glyph: 'xf0c7@FontAwesome',
				action: 'buttonUsersSave'
            },
			{
                text: Lan.global.Close,
				glyph: 'xf00d@FontAwesome',
                scope: this,
                handler: this.close
            }
        ];

		this.addValidationPass= function(){
			Ext.apply( me.down('[name=userPass]'), {
				allowBlank: false,
				maxLength: 255,
				minLength: 5
			});
		};

		

        this.callParent(arguments);
    }
});