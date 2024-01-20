const but = document.querySelector('button')
const body1 = document.querySelector('.container')
const heading = document.querySelector('h2')


function randomColor(){
         const randomNumber = Math.floor(Math.random()* 16777215);
         const randomColor2 = "#"+ randomNumber.toString(16)
         body1.style.backgroundColor = randomColor2;
         heading.innerText = randomColor2;
        //  console.log(randomColor2);
}



// setInterval(
//     ()=>{
//         randomColor();

//     },1000
// )
    


but.addEventListener("click",function(){
    randomColor()
})