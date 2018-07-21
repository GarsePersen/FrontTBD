
$(function(){
	$('#login').click(function(){
		$(this).next('#login-content').slideToggle();
		$(this).toggleClass('active');          
	});
	var user = document.getElementById('user');
});

/*
function desplegarLogin(){
	$('#login').click(function(){
		$(this).next('#login-content').slideToggle();
		$(this).toggleClass('active');          
		});
}

function login(event){
	event.preventDefault();
	var user = document.getElementById('user');
	var pass = document.getElementById('pass');
	console.log(user);
	console.log(pass);

}*/