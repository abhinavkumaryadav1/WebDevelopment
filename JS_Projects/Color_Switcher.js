let button = document.querySelectorAll('.button')
let body = document.querySelector("body")
let exception = document.querySelector('.exception')
let exception2 = document.querySelector('.exception2')



button.forEach(function (clicky) {
   clicky.addEventListener('click', function(touch)   //this function has property and another call back function to act on it
                                                   {

if (touch.target.id === 'pink') {
    body.style.backgroundColor =touch.target.id;  // you can  give the color of your choice ranther than "touch.target.id"
    exception.style.color  = 'black'
    exception2.style.color  = 'black'

}
if (touch.target.id === 'white') {
    body.style.backgroundColor =touch.target.id;
    exception.style.color  = 'black'
    exception2.style.color  = 'black'


}
if (touch.target.id === 'orange') {
    body.style.backgroundColor =touch.target.id;
    exception.style.color  = 'black'
    exception2.style.color  = 'black'


}
if (touch.target.id === 'black') {
    body.style.backgroundColor =touch.target.id;
    exception.style.color  = 'white'
    exception2.style.color  = 'white'

}                                                 });


});
