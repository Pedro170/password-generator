const sliderElement = document.querySelector('#slider')
const buttonElement = document.querySelector('#button')
const sizePassword = document.querySelector('#value')
const password = document.querySelector('#password')
const containerPassord = document.querySelector('#container-password')
const tooltip = document.querySelector('.tooltip')


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
  sizePassword.innerHTML = this.value;
}

const generatePassword = () => {
  let pass = "";
  for(let i = 0, n = charset.length; i < sliderElement.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  
  containerPassord.classList.remove('hide')
  password.innerHTML = pass;
  novaSenha = pass;
}

buttonElement.addEventListener('click', generatePassword)

const copyPassword = () => {
  tooltip.innerHTML = "Senha copiada com sucesso! 😃"
  navigator.clipboard.writeText( novaSenha )
}

containerPassord.addEventListener('click', copyPassword )

