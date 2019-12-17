Ext.define('HD.model.KnowledgebaseGetOne', {
	
	setCallback: function(fun){
		this.callback=fun;	
	},

	setId: function(id){
		this.id=id;	
	},
		
	execute: function(){
		var me=this;
		Ext.Ajax.request({
			url: 'index.php',
			method: 'get',
			params: {
				m: 'knowledgebase',
				p: 'getknowledge',
				id	: me.id
			},
			failure: function(){
			},
			success: function(response){
				var text = response.responseText;
				var json=Ext.JSON.decode(text);
				if(json.success==true){
					me.callback(json.data);						
				}else{
				
				}
			}
		});
	}

});