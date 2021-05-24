var okbir = document.getElementsByClassName('ribko');
function walk(){
	
	var value = window.scrollY;
	console.log(value);
	
	okbir[0].style.right = value*2 + 'px';
	okbir[0].style.top = 0.005*value**2 + 'px';
	okbir[0].style.transform = "rotate("+ -0.1*value + "deg)";
	
	
	
	
	
}

window.addEventListener('scroll', walk);






