(function (window) {
	'use strict';
	$(document).ready(function () {
	$('#new-todo').on('keypress', function(e) {
		if(e.keyCode == 13) {
			var newTask = $('#new-todo').val();	
			console.log(newTask);
			$('#todo-list').append('<li><div class="view"><input class="toggle" type="checkbox">' +
				'<label>Buy a unicorn</label><button class="destroy"></button></div>' +
				'<input class="edit" value="Rule the web"></li>');	
		}
	});		
	
	
	
	
	
	
	
	
	
	
	});

})(window);
