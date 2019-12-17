$( document ).ready(function() {


	
	$('#logHelpDeskName').focusin(function(){
			
			$('#rfHDName').css('color', '#ffffff');
		
	});	
	
		
	$('#logHelpDeskName').focusout(function(){
	
		if($.trim($(this).val())==''){
				
			$(this).val('');
			$('#rfHDName').css('color', '#979cb2');
	
		}
	});	
	
	
	
	
	
	$('#logPass').focusin(function(){
			
			$('#rfRegPass').css('color', '#ffffff');
		
	});	
	
		
	$('#logPass').focusout(function(){
			
		if($.trim($(this).val())==''){
				
			$(this).val('');
			$('#rfRegPass').css('color', '#979cb2');
	
		}
	});	
	

    console.log( "ready!" );
});
