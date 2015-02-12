(function (window) {
	'use strict';
	$(document).ready(function () {
	$('#new-todo').on('keypress', function(e) {
		if(e.keyCode == 13) {
			var newTask = $('#new-todo').val();	
			console.log(newTask);
			$('#todo-list').append('Banana');	
		}
	});		
	
	
	
	
	
	
	
	
	
	
	});

})(window);
