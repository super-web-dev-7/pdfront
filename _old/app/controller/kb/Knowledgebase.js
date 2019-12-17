Ext.define('HD.controller.kb.Knowledgebase', {
    extend: 'Ext.app.Controller',

    views: [
		'kb.Grid',
		'kb.WindowForm'
		
		//,'tickets.ContainerWithAttachments'
    ],

    stores: [
        'kb.Knowledgebase',
		'YesNo',
		'kb.KnowledgebaseSections',
		'kb.KnowledgebaseSectionsCombo'
    ],

	models: [
        'kb.Knowledgebase',
		'kb.KnowledgebaseSections'
    ],
	
	

    init: function() {
		this.control({
			
			'knowledgebasegrid' :{
				beforerender: function(t){ t.getStore().load(); }
            },	
			'[action=buttonKnowledgebaseRemove]': {
				click: this.buttonKnowledgebaseRemove
            },
			'[action=buttonKnowledgebaseAddForm]': {
				click: this.buttonKnowledgebaseAddForm
            },
			'[action=buttonKnowledgebaseSave]': {
				click: this.buttonKnowledgebaseSave
            },
			'[action=buttonKnowledgebaseEdit]': {
				click: this.buttonKnowledgebaseEdit
            },
			'[action=buttonTicketSaveNewKnowledgebase]': {
				click: this.buttonTicketSaveNewKnowledgebase
            }



					
		});
    },



	buttonKnowledgebaseRemove: function(button){
		var id = button.up('gridpanel').getSelectionModel().getSelection()[0].get('id');

		Ext.widget('messagebox').show({
			 title: Lan.kb.RemoveInfoTitle,
			 msg: Lan.kb.RemoveInfo,
			 buttons: Ext.Msg.YESNO,
			 icon: Ext.MessageBox.QUESTION,
			 fn: function(btn, text){
				 if (btn == 'yes'){
					Ext.Ajax.request({
						url: 'index.php',
						method: 'post',
						params: {
							id: id,
							m: 'knowledgebase',
							p: 'delknowledge'
						},
						failure: function(){

						},
						success: function(response){
							var text = response.responseText;
							var json=Ext.JSON.decode(text);
							if(json.success==true){
								button.up('gridpanel').getStore().load();
							}else{
								
							}
						}
					});
				 }
			 }
			 
		});
		
	},



	buttonKnowledgebaseAddForm: function(button){
		var win=Ext.create('HD.view.kb.WindowForm');
	},

	buttonKnowledgebaseSave: function(button){
		this.doKnowledgebaseSave( button.up('window').down('form') );
	},

	windowForm:'',

	buttonKnowledgebaseEdit: function(button){
		var id = button.up('gridpanel').getSelectionModel().getSelection()[0].get('id');
		var win=Ext.create('HD.view.kb.WindowForm');
		this.windowForm= win;
		win.setTitle(Lan.kb.EditWinTitle);
		this.loadKnowledgebaseEdit( win.down('form'), id);
	},





	doKnowledgebaseSave: function(fform){
		var form=fform.getForm();
				
		if( form.isValid() ){
			var isId=form.getValues().id;
			if(isId){
				var p = 'editknowledge';
			}else{
				var p = 'addknowledge';
			}

			form.submit({
				url: 'index.php',
				params: {
					m: 'knowledgebase',
					p: p
				},
				waitMsg: Lan.global.Saving,
				success: function(form, action) {
					Ext.getStore('Knowledgebase').load();
				    fform.up('window').close();
				},
				failure: function(form, action) {
					switch (action.failureType) {
						case Ext.form.action.Action.CONNECT_FAILURE:
							Ext.Msg.alert('Failure', 'Ajax communication failed');
							break;
						case Ext.form.action.Action.SERVER_INVALID:
							if(action.result.error){
								Ext.Msg.alert('Failure', action.result.error);
							}
				   }
				}
			});
		}
	},



	loadKnowledgebaseEdit: function(form, id){
		var me=this;
		form.getForm().load({
			url: 'index.php',
			params: {
				m	: 'knowledgebase',
				p	: 'getknowledge',
				id	: id
			},
			method: 'GET',
			waitMsg: Lan.global.Loading,
			failure: function(form, action) {
				switch (action.failureType) {
					case Ext.form.action.Action.CONNECT_FAILURE:
						 Ext.Msg.alert('Failure', 'Ajax communication failed');
						 break;
					case Ext.form.action.Action.SERVER_INVALID:
						 if(action.result.error){
							Ext.Msg.alert('Failure', action.result.error);
						 }
				}
			},
			success: function(form, action){
				var aAttachs= action.result.data.attachs;
				for(var i=0; i<aAttachs.length; i++){
					me.windowForm.addAttachment(aAttachs[i]);
				}
			}
		});
	},







	buttonTicketSaveNewKnowledgebase: function(button){
		var form=button.up('window').down('form').getForm();
				
		if( form.isValid() ){

			form.submit({
				url: 'index.php',
				params: {
					m: 'knowledgebase',
					p: 'addknowledge'
				},
				success: function(form, action) {
					Ext.getStore('KnowledgebaseCombo').load();
				    button.up('window').close();
				},
				failure: function(form, action) {
					switch (action.failureType) {
						case Ext.form.action.Action.CONNECT_FAILURE:
							Ext.Msg.alert('Failure', 'Ajax communication failed');
							break;
						case Ext.form.action.Action.SERVER_INVALID:
							if(action.result.error){
								Ext.Msg.alert('Failure', action.result.error);
							}
				   }
				}
			});
		}
	}








});