let inputs = document.querySelectorAll('input')
let btn = document.querySelector('button')
let data = document.querySelector('.data')

function handle() {
  alert('Форма отправлена')

  for(let i = 0; i < inputs.length; i++) {
    data.innerHTML += inputs[i].value + '<br>'
    data.innerHTML += '<br>'
  }
}

btn.addEventListener('click', handle)
