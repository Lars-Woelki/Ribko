var okbir = document.getElementsByClassName('ribko');
function walk(){
	
	var value = window.scrollY;
	console.log(value);
	
	okbir[0].style.right = value*2 + 'vw';
	okbir[0].style.top = 0.05*value**2 + 'vw';
	okbir[0].style.transform = "rotate("+ -2.3*value + "deg)";
	
	
	
	
	
}

window.addEventListener('scroll', walk);






