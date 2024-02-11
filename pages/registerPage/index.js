let input=document.querySelector('input')
let label=document.querySelector('label')
let closeBtn=document.querySelector('.close-btn')
let openBtn=document.querySelector('.open-btn')
closeBtn.addEventListener('click',showBtn)
function showBtn(){
    input.type='text'
    openBtn.syle.display='block'
    closeBtn.style.display='none'
}
openBtn.addEventListener('click',hideBtn)
function hideBtn(){
    input.type='password'
    openBtn.syle.display='none'
    closeBtn.style.display='block'
}