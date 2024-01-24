const question = [{
    'que': 'which is the following markup langusge',
    'a':  ' html',
    'b':  'javascript',
    'c': ' cpp',
    'd': 'php',
},

{
    'que': 'which year java is launched?',
    'a':  ' 1938',
    'b':  '5785',
    'c': '3849',
    'd': '4564',
},

{
    'que': 'what does css stand for',
    'a':  'hyper text markup language',
    'b':  'cardisent style sheet',
    'c': '3849',
    'd': '4564',
},
]
const option = document.querySelectorAll('.opt')
let index = 0;
let loadque = () => {
   let data =  question[index]
   document.querySelector('h2').innerText = `  ${index+1})  ${data.que}`
  option[0].nextElementSibling.innerText = data.a;
  option[1].nextElementSibling.innerText = data.b;
  option[2].nextElementSibling.innerText = data.c;
  option[3].nextElementSibling.innerText = data.d;
  index++;
   console.log(data);
}

const getans = ()=>{
    option.forEach((input) => {
           if(input.checked){
            return input.ariaValueMax;
           }
    })
}

getans()

