var Flugzeug= document.getElementsByClassName('Flugzeug');
function walk(){
	
	var value = window.scrollY;
	Flugzeug[0].style.right = ((value*2)-30) + 'vw';
	Flugzeug[0].style.top = 0.05*value**2 + 'vw';
	if(parseInt((Flugzeug[0].style.right.substr(0,Flugzeug[0].style.right.length-2))) <20){
		
		Flugzeug[0].style.transform = "rotate("+ -2.3*value + "deg)";
		Flugzeug[0].style.top = 0.05*value**2 + 'vw';
		console.log(0.05*value**2);

	}
	else if(parseInt((Flugzeug[0].style.right.substr(0,Flugzeug[0].style.right.length-2))) >= 46){
		console.log('>20');
		Flugzeug[0].style.transform = "rotate(0deg)";
		Flugzeug[0].style.top = '73' + 'vw';

	}
	
	
	
	
	
}

window.addEventListener('scroll', walk);






