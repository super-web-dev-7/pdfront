Ext.define('HD.view.settings.customersla.WindowForm', {
    extend: 'Ext.window.Window',
    autoShow: true,
	modal: true,
	layout: 'fit',
	width: 400,
	height: 240,
	border: false,

    initComponent: function() {
		

      Ext.apply(Ext.form.field.VTypes, {
          domain:  function(v) {
              return /^[a-zA-Z][-.a-zA-Z0-9]{0,254}$/.test(v);
          },
          domainText: 'Must be a domain name'
      });

		
		var me = this;
		this.title = Lan.settings.customersla.WinTitleAddNewSla;
		
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
				waitMsgTarget: true,
                items: [
					{ 
						xtype: 'hiddenfield', 
						name : 'id'
					},
					{
						xtype: 'combo',
						store: 'settings.SlaType',
						displayField: 'name',
						valueField: 'id',
						fieldLabel: Lan.settings.customersla.SlaType,
						name: 'type',
						allowBlank:false,
						queryMode: 'local',
						editable: false,
						value: '0'
					},
					{ 
						xtype: 'textfield', 
						name : 'emailDomain', 
						fieldLabel: Lan.settings.customersla.DomainName,
						allowBlank:false
					},
					{  	 	 	 
						xtype: 'numberfield', 
						name : 'userSla', 
						fieldLabel: Lan.settings.customersla.ResponseTime,
						allowBlank:false,
						min: 1,
						max: 10800
					},
					{ 
						xtype: 'datefield', 
						name : 'dateExpire', 
						fieldLabel: Lan.settings.customersla.ExpireDate,
						allowBlank: false,
						value : new Date(),
						format: 'Y-m-d'
					}
								
				]
			}
		];
        this.buttons = [
           {
                text: Lan.global.Save,
				glyph: 'xf0c7@FontAwesome',
				action: 'buttonUsersSlaSave'
            },
			{
                text: Lan.global.Close,
				glyph: 'xf00d@FontAwesome',
                scope: this,
                handler: this.close
            }
        ];

	

        this.callParent(arguments);
    }
});