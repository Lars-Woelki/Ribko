var parallax_1= document.getElementsByClassName('parallax 1');
var parallax_2= document.getElementsByClassName('parallax 2');
var parallax_3= document.getElementsByClassName('parallax 3');
var parallax_Train_Track= document.getElementsByClassName('parallax Train_Track');
var parallax_Train= document.getElementsByClassName('parallax Train');
var parallax_4= document.getElementsByClassName('parallax 4');
var parallax_5= document.getElementsByClassName('parallax 5');
var parallax_6= document.getElementsByClassName('parallax 6');
var parallax_7= document.getElementsByClassName('parallax 7');
var frontcolor= document.getElementsByClassName('frontcolor');
var initial_top = 150;
var speed_of_parallax=30;

function walk(){
	
	var value = window.scrollY;
	
	parallax_1[0].style.top = initial_top-0.01*value*speed_of_parallax + 'vh';
	parallax_2[0].style.top = initial_top-0.008*value*speed_of_parallax + 'vh';
	parallax_3[0].style.top = initial_top-0.006*value*speed_of_parallax + 'vh';
	parallax_Train_Track[0].style.top = (initial_top-8)-0.0055*value*speed_of_parallax + 'vh';
	parallax_Train[0].style.top = (initial_top-8)-0.0055*value*speed_of_parallax + 'vh';
	parallax_4[0].style.top = initial_top-0.004*value*speed_of_parallax + 'vh';
	parallax_5[0].style.top = initial_top-0.002*value*speed_of_parallax + 'vh';
	parallax_6[0].style.top = initial_top-0.0008*value*speed_of_parallax + 'vh';
	parallax_7[0].style.top = initial_top-0.0006*value*speed_of_parallax + 'vh';
	frontcolor[0].style.top = initial_top-1-0.01*value*speed_of_parallax + 'vh';

	}


window.addEventListener('scroll', walk);






