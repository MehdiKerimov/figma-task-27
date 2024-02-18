let openBtn=document.querySelector('.open-btn')
let closeBtn=document.querySelector('.close-btn')
let passwordInput =document.querySelector('.password-input')
let form=document.querySelector('form')

openBtn.addEventListener('click',hidePassword)
closeBtn.addEventListener('click',showPassword)

function showPassword(){
    console.log('dkjddf')
    passwordInput.type='text'
    openBtn.style.display='block'
    closeBtn.style.display='none'
}
function hidePassword(){
passwordInput.type='password'
closeBtn.style.display='block'
openBtn.style.display='none'
}
// let array=[1,2,3,4]
// let json=JSON.stringify(array)
// localStorage.setItem('numbers',json)

// let user=localStorage.getItem('user')
// let json2=JSON.parse(user)
// console.log(json2.name)

// submit action
form.addEventListener('click',handleRegister)
function handleRegister(e){
    e.preventDefault()
    console.log(passwordInput.value)
    
}
