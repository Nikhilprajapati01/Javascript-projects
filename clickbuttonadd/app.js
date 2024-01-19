const add = document.querySelector('.add');
const heading = document.querySelector('h3')
// const remove = document.querySelector('.remove')

// add.addEventListener('click',function(){
//    heading.innerText = "friends";
//    heading.style.color = "green";
// })

// remove.addEventListener('click',function(){
//     console.log(heading.innerText = "stranger");
// })

let check = 0;

add.addEventListener("click", function(){
    if(check == 0){
        heading.innerText = "friends";
        heading.style.color = "green";
        add.innerText = "remove"
        check = 1;
    }else{
        heading.innerText = "stranger";
        heading.style.color = "red";
        add.innerText = "friends"
        check = 0;
    }
})