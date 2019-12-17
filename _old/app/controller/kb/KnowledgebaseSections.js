Ext.define('HD.controller.kb.KnowledgebaseSections', {
    extend: 'Ext.app.Controller',

    views: [
		'kb.section.WindowGrid',
		'kb.section.WindowForm'
    ],

    stores: [
		'kb.KnowledgebaseSections'
    ],

	models: [
		'kb.KnowledgebaseSections'
    ],
	
	

    init: function() {
		var me = this;
		this.control({
			'[action=buttonKnowledgebaseSections]': {
				click: function(button){
					var win=Ext.create('HD.view.kb.section.WindowGrid');
					win.down('gridpanel').getStore().load();
				}
            },
			'[action=buttonKnowledgebaseSectionsRemove]': {
				click: this.buttonKnowledgebaseSectionsRemove
            },
			'[action=buttonKnowledgebaseSectionsAddForm]': {
				click: this.buttonKnowledgebaseSectionsAddForm
            },
			'[action=buttonKnowledgebaseSectionsSave]': {
				click: this.buttonKnowledgebaseSectionsSave
            },
			'[action=buttonKnowledgebaseSectionsEdit]': {
				click: this.buttonKnowledgebaseSectionsEdit
            }	


					
		});
    },


	buttonKnowledgebaseSectionsRemove: function(button){
		var id = button.up('gridpanel').getSelectionModel().getSelection()[0].get('id');

		Ext.widget('messagebox').show({
			 title: Lan.info ,
			 msg: Lan.removeConfirmMessage,
			 buttons: Ext.Msg.YESNO,
			 icon: Ext.MessageBox.QUESTION,
			 fn: function(btn, text){
				 if (btn == 'yes'){
					Ext.Ajax.request({
						url: 'index.php',
						method: 'post',
						params: {
							id: id,
							m: 'knowledgebasesections',
							p: 'delknowledgesection'
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



	buttonKnowledgebaseSectionsAddForm: function(button){
		var win=Ext.create('HD.view.kb.section.WindowForm');
	},



	buttonKnowledgebaseSectionsSave: function(button){
		var form=button.up('window').down('form');
		this.doKnowledgebaseSectionsSave(form);
		
	},

	doKnowledgebaseSectionsSave: function(fform){
		var form=fform.getForm();
				
		if( form.isValid() ){
			
			var isId=form.getValues().id;
			if(isId){
				var p = 'editsection';
			}else{
				var p = 'addsection';
			}
			

			form.submit({
				url: 'index.php',
				params: {
					m: 'knowledgebasesections',
					p: p
				},
				success: function(form, action) {
					Ext.getStore('kb.KnowledgebaseSections').load();
				    fform.up('window').close();
				},
				failure: function(form, action) {
					switch (action.failureType) {
						case Ext.form.action.Action.CONNECT_FAILURE:
							Ext.Msg.alert( Lan.failure, Lan.ajaxcommunicationfailed );
							break;
						case Ext.form.action.Action.SERVER_INVALID:
							if(action.result.error){
								Ext.Msg.alert( Lan.failure, action.result.error);
							}
				   }
				}
			});
		}
		
	},


	loadKnowledgebaseSectionsEdit: function(form, id){
		form.getForm().load({
			url: 'index.php',
			params: {
				m	: 'knowledgebasesections',
				p	: 'getsection',
				id	: id
			},
			method: 'GET',
			failure: function(form, action) {
				Ext.Msg.alert( Lan.error, Lan.error );
			},
			success: function(){
						
			}
		});
	},






	buttonKnowledgebaseSectionsEdit: function(button){
		var id = button.up('gridpanel').getSelectionModel().getSelection()[0].get('id');
		var win=Ext.create('HD.view.kb.section.WindowForm');
		win.setTitle( Lan.kb.EditSectionWinTitle );
		this.loadKnowledgebaseSectionsEdit( win.down('form'), id );
	}




});