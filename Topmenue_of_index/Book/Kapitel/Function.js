var topmenu = document.getElementsByClassName('topmenu');
var pip = document.getElementsByClassName('pip');

function openCloseTopmenu(){
if(topmenu[0].classList.contains("offen")){
	topmenu[0].classList.remove("offen");	
	}
	else{
	topmenu[0].classList.add("offen");
	console.log("not active");
	}		
	}

if(pip[0]!=null || typeof pip[0]!='undefined'){

	pip[0].addEventListener('click', openCloseTopmenu);
}


