let openBtn=document.querySelector('.open-btn')
let closeBtn=document.querySelector('.close-btn')
let passwordInput =document.querySelector('.password-input')
let form=document.querySelector('form')
let emailInput=document.querySelector('.emailInput')
let errorMsg=document.querySelector('.Error-msg')
let existError=document.querySelector('.exist-error')
let userExist=false


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


// Database yaradilmasi

function createDatabase(){
    let=array=[]
    localStorage.setItem('users',JSON.stringify(array))
}

// createDatabase()


// submit action
form.addEventListener('submit',handleRegister)
function handleRegister(e){
    e.preventDefault()
if(emailInput.value && passwordInput.value){
checkUser()
errorMsg.style.display='none'
}
else{
errorMsg.style.display='block'
}
  
}

// istifadecinin yoxlanmasi
function checkUser(){
let users=localStorage.getItem('users')
let usersData=JSON.parse(users)
for (let index = 0; index < usersData.length; index++) {
if(usersData[index].email==emailInput.value){
    userExist=true
    break
}
else{
    userExist=false
}

}
if(userExist){
    existError.style.display='block'
}
else{
    existError.style.display='none'
    createUser()
}

}


// istifadecinin yaradilmasi
function createUser(){
    let user={
        email:emailInput.value,
        password:passwordInput.value
    
    }
let usersData=localStorage.getItem('users')
let user5=JSON.parse(usersData)
user5.push(user)
localStorage.setItem('users',JSON.stringify(user5))
form.reset()
}

