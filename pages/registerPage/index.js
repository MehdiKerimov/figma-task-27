let openBtn=document.querySelector('.open-btn')
let closeBtn=document.querySelector('.close-btn')
let input =document.querySelector('input')
openBtn.addEventListener('click',hidePassword)
function showPassword(){
    console.log('dkjddf')
    input.type='text'
    openBtn.style.display='block'
    closeBtn.style.display='none'
}
closeBtn.addEventListener('click',showPassword)
function hidePassword(){
input.type='password'
closeBtn.style.display='none'
openBtn.style.display='block'
}