function changecolor(){
    const hex ="0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i <6 ;i++){
            color+= hex[Math.floor(Math.random()*16)]
    }
    return color
}
let intervalvariable
function startit(){
    document.body.style.backgroundColor= changecolor();
}

let startbut = document.querySelector('#start')
let stopbut = document.querySelector('#stop')
startbut.addEventListener('click',function(){
    if(!intervalvariable){intervalvariable=setInterval(startit,1000)} //if becuz-> something for cleaner code by chai aur code
    
})

stopbut.addEventListener('click',function(){
    clearInterval(intervalvariable)
    intervalvariable = null; //something for cleaner code by chai aur code
})