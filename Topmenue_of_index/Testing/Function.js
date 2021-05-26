var parallax_1= document.getElementsByClassName('parallax 1');
var parallax_2= document.getElementsByClassName('parallax 2');
var parallax_3= document.getElementsByClassName('parallax 3');
var parallax_4= document.getElementsByClassName('parallax 4');
var parallax_5= document.getElementsByClassName('parallax 5');
var parallax_6= document.getElementsByClassName('parallax 6');
var parallax_7= document.getElementsByClassName('parallax 7');
var frontcolor= document.getElementsByClassName('frontcolor');
var initial_top = 120;

function walk(){
	
	var value = window.scrollY;
	
	parallax_1[0].style.top = initial_top-0.07966*value*2 + 'vh';
	parallax_2[0].style.top = initial_top-0.040342*value*2 + 'vh';
	parallax_3[0].style.top = initial_top-0.014841*value*2 + 'vh';
	parallax_4[0].style.top = initial_top-0.005460*value*2 + 'vh';
	parallax_5[0].style.top = initial_top-0.002008*value*2 + 'vh';
	parallax_6[0].style.top = initial_top-0.000738*value*2 + 'vh';
	parallax_7[0].style.top = initial_top-0.000271*value*2 + 'vh';
	frontcolor[0].style.top = initial_top-1-0.08*value*2 + 'vh';

	}


window.addEventListener('scroll', walk);






