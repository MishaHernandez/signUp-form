const form = document.getElementById('form')
const btnSubmit = document.getElementById('btnsubmit')

const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')

const validationTable = {
    firstname: false,
    lastname: false,
    email: false,
    password: false
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()
})

firstName.addEventListener('change', (e)=> {
    if (e.target.value.trim().length > 0) validationTable.firstname = true
    else {
        validationTable.firstname = false
        console.log('First name inválido')
    }
})

lastName.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0) validationTable.lastname = true
    else {
        validationTable.lastname = false
        console.log('Last name inválido')
    }
})

email.addEventListener('change', (e) => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (emailRegex.test(e.target.value.trim())) validationTable.email = true
    else console.log('email incorrecto')
})

password.addEventListener('change', (e) => {
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
    const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
    if (passwordRegex.test(e.target.value)) validationTable.password = true
    else console.log('password incorrecto')
})

const validateForm = () => {
    const formValues = Object.values(validationTable)
    const valid = formValues.findIndex(value => value === false)
    if (valid == -1) form.submit()
    else {
        const formKeys = Object.keys(validationTable)
        for (let i = 0; i < formKeys.length; i++) {
            if (formValues[i] === false) document.querySelector(`.msg-${formKeys[i]}`).classList.add('msg-show')
            else document.querySelector(`.msg-${formKeys[i]}`).classList.remove('msg-show')
        }
        console.log('invalid form')
    }
}