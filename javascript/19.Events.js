//events is the state of your mouse and keyboards or any other at any instance of time and to work on that state is the moto.
//study following events
    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode



document.getElementById('tractors').addEventListener('click', function(e){ 
    // alert("WE HAVE CLICKED TRACTORS")
    // console.log(e);  // go to browser console to have a look on event methods
    // console.log(e.x); // this is one of the method (return the x-axis point where you clicked)
    
},false) //  addevent list..... takes 3 parameters the last one is false by default.

//event propogation(bubbling- bottom to top approch) & capturing(top to bottom approch)

document.querySelector('.images').addEventListener('click',function(){
    console.log("clicked under ul");
    
},false) //place false (which is bydeafult false ) at both query to use propogation And true for capturing
    
document.querySelector('#tractors').addEventListener('click',function(e){
    console.log("clicked under tractors");
    
    // e.stopPropagation() //stops the propogation and do not goes to upper bubble
    
},false)

document.querySelector('#google').addEventListener('click',function(e){
    e.preventDefault()
    
    
})

document.querySelector('.images').addEventListener('click',function(e){
    let removeimg = e.target.parentNode  //THIS is how you remove element in js
    removeimg.remove()
    
})
    
//the above code will remove whole ul if clicked to li rather than the img because the aparently the parent node of li is ul
// use tagName and if statement to fix it

// if(e.target.tagName === 'IMG')