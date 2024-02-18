let openBtn=document.querySelector('.open-btn')
let closeBtn=document.querySelector('.close-btn')
let input =document.querySelector('.password')

openBtn.addEventListener('click',hidePassword)
closeBtn.addEventListener('click',showPassword)

function showPassword(){
    input.type='text'
    openBtn.style.display='block'
    closeBtn.style.display='none'
}
function hidePassword(){
input.type='password'
closeBtn.style.display='block'
openBtn.style.display='none'
}