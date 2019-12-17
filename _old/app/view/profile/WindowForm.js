Ext.define('HD.view.profile.WindowForm', {
    extend: 'Ext.window.Window',
    autoShow: true,
	modal: true,
	layout: 'fit',
	width: 500,
	height: 230,
	border: false,



    initComponent: function(){
        this.title=Lan.profile.WinTitleProfile;
		var me = this;
		this.items = [
			{
				xtype: 'tabpanel',
				items: [ 
					this.editForm,
					this.editFormPass
				]				
			}
			
		];

		this.callParent(arguments);
    },







	editForm: {
                xtype: 'form',

				layout: 'anchor',
				title: Lan.profile.WinTab01,
				defaults: {
					anchor: '100%'
				},
				bodyStyle:'padding: 15px 15px 15px 15px',
				waitMsgTarget: true,
				fieldDefaults: {
					msgTarget: 'side',
					labelWidth: 130
				},
                items: [
				
								{ 
									xtype: 'hiddenfield', 
									name : 'version'
								},
 	 	 	 
			
								{ 
									xtype: 'textfield', 
									name : 'nameSurname', 
									fieldLabel: Lan.profile.FormName,
									allowBlank: true
								},
								{ 
									xtype: 'textfield', 
									name : 'userEmail', 
									fieldLabel: Lan.profile.FormEmail,
									allowBlank: true,
									vtype: 'email'
								},
								{ 
									xtype: 'combobox', 
									name : 'lanCode', 
									fieldLabel: Lan.profile.FormLanguage,
									allowBlank: true,
									store: 'Languages',
									displayField: 'name',
									valueField: 'id'
								}
				],

				bbar: [
					'->',
					{
						text: Lan.global.Save,
						glyph: 'xf0c7@FontAwesome',
						action: 'buttonProfileSave'
					},
					{
						text: Lan.global.Close,
						glyph: 'xf00d@FontAwesome',
						scope: this,
						handler: this.close
					}
				]

	},

	editFormPass: {
                xtype: 'form',

				layout: 'anchor',
				title: Lan.profile.WinTab02,
				defaults: {
					anchor: '100%'
				},
				bodyStyle:'padding: 15px 15px 15px 15px',
				waitMsgTarget: true,
				fieldDefaults: {
					msgTarget: 'side',
					labelWidth: 130
				},
                items: [
								{ 
									xtype: 'hiddenfield', 
									name : 'version'
								},	
								{ 
									xtype: 'textfield', 
									name : 'userPass', 
									fieldLabel: Lan.profile.FormCurrentPass,
									inputType: 'password' ,
									allowBlank:true
								},
								{ 
									xtype: 'textfield', 
									name : 'userNewPass', 
									fieldLabel: Lan.profile.FormNewPass,
									inputType: 'password',
									allowBlank:true
								},
								{ 
									xtype: 'textfield', 
									name : 'userReNewPass', 
									fieldLabel: Lan.profile.FormRepeatNewPass,
									inputType: 'password' ,
									allowBlank:true
								}
				],
				bbar : [
				    '->',
					{
						text: Lan.global.Save,
						glyph: 'xf0c7@FontAwesome',
						action: 'buttonProfileSavePassword'
					},
					{
						text: Lan.global.Close,
						glyph: 'xf00d@FontAwesome',
						scope: this,
						handler: this.close
					}
				]

				
	}


});