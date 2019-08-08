$(function(){
	menu=$('nav ul');
	$('#openup').on('click', function(e){
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function(){
		var w=$(this).width();
		if(w>580 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
	$('nav li').on('click', function(e){
		var w=$(window).width();
		if(w<480){
			menu.slideToggle;
		}
	});
	$('.open-menu').height($(window).height());
});

$('.cf a').on('click', function(event){
	if(this.hash != '')
	{
	event.preventDefault();
    const hash=this.hash;
$('html, body').animate(
	{
		scrollTop: $(hash).offset().top
	},
	800,
	function(){
		window.location.hash=hash;
	}
	);
}
});
const countdown = document.querySelector('.countdown');

// Set Launch Date (ms)
const launchDate = new Date('Nov 27, 2019 13:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
  const now = new Date().getTime();
const distance = launchDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
  <div>${days}<span>Days</span></div> 
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `;

  // If launch date is reached
  if (distance < 0) {
   const ctdn=document.querySelector('.countingdown');
   ctdn.style.display = 'none';
  }
}, 1000);
window.sr=ScrollReveal();

ScrollReveal().reveal('.countingdown', { 
    duration: 4000,
    distance: '100px',
    origin: 'right'
 });
ScrollReveal().reveal('.speak', { 
    duration: 4000,
    delay: 200,
    distance: '100px',
    origin: 'left'
 });
ScrollReveal().reveal('.speech',  { 
    duration: 3000,
    
    distance: '10px',
    origin: 'bottom'
 });
ScrollReveal().reveal('.speakup, .logos1, .orgs', { 
    duration: 3000,
    
    distance: '10px',
    origin: 'top'
 });
ScrollReveal().reveal('.section-main h1', { 
    duration: 3000,
    
    distance: '10px',
    origin: 'top'
 });
ScrollReveal().reveal('.section-main h2', { 
    duration: 3000,
    
    distance: '10px',
    origin: 'bottom'
 });
ScrollReveal().reveal('.logos', { 
    duration: 3000,
    
    distance: '20px',
    origin: 'bottom',
    delay: 500
 });
ScrollReveal().reveal('.sched1', { 
    duration: 3000,
    
    distance: '20px',
    origin: 'bottom',
    delay: 500
 });
ScrollReveal().reveal('#organisers h1', { 
    duration: 3000,
    
    distance: '20px',
    origin: 'top',
    delay: 500

 });
ScrollReveal().reveal('#schedule h1', { 
    duration: 3000,
    
    distance: '20px',
    origin: 'top',
    delay: 500

 });
