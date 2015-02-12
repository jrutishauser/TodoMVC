(function (window) {
	'use strict';
	$(document).ready(function () {
	$('#new-todo').on('keypress', function(e) {
		if(e.keyCode == 13) {
			var newTask = $('#new-todo').val();	
			$('#todo-list').append('<li><div class="view"><input class="toggle" type="checkbox">' +
				'<label>' + newTask + '</label><button class="destroy"></button></div>' +
				'<input class="edit" value="' + newTask + '"></li>');	
			$('#new-todo').val('');	
		}
	});		
	
	$('#todo-list').on('click', '.toggle', function(e){
		$(this).closest('li').toggleClass('completed');		               
     });	
	
//	$('#toggle-all').on('click', function(e){
	//	$('#todo-list > li').removeClass('completed');
	//	$('#todo-list > li').toggleClass('completed');
	//	$('.toggle').toggleattr('checked', true);	
//	});	
	$('#todo-list li').on('dblclick', function(e){
		$(this).closest('.edit').removeClass('edit');
		$(this).closest('label').hide();
	});	
	
	
	
	
	
	});

})(window);
