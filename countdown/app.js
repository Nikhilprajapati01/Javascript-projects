const dateend = " 23 january 2024 1:22 PM"
document.querySelector('#date').innerText = dateend;
const datenow = document.querySelectorAll('input')

// console.log(dateend);


function clock (){
    const end =  new Date(dateend);
    const now =  new Date();
    const diff = ( end - now) / 1000;
    // console.log(diff);
    if(diff < 0 ) return; 

    datenow[0].value = Math.floor(diff / 3600 / 24); 
    datenow[1].value = Math.floor(diff / 3600) % 24; 
    datenow[2].value = Math.floor(diff / 60) % 60; 
    datenow[3].value = Math.floor(diff) % 60; 
}

clock();

setInterval(
    () => {
        clock()
    },1000
)