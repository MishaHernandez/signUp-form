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
    const selectedInput = e.target
    if (selectedInput.value.trim().length > 0) {
        validationTable.firstname = true
        selectedInput.nextElementSibling.classList.remove('show-icon')
    }
    else {
        validationTable.firstname = false
        selectedInput.nextElementSibling.classList.add('show-icon')
    }
})

lastName.addEventListener('change', (e) => {
    const selectedInput = e.target
    if (selectedInput.value.trim().length > 0) {
        validationTable.lastname = true
        selectedInput.nextElementSibling.classList.remove('show-icon')
    }
    else {
        validationTable.lastname = false
        selectedInput.nextElementSibling.classList.add('show-icon')
    }
})

email.addEventListener('change', (e) => {
    const selectedInput = e.target
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (emailRegex.test(selectedInput.value.trim())) {
        validationTable.email = true
        selectedInput.nextElementSibling.classList.remove('show-icon')
    }
    else {
        validationTable.email = false
        selectedInput.nextElementSibling.classList.add('show-icon')
    }
})

password.addEventListener('change', (e) => {
    const selectedInput = e.target
    if (selectedInput.value.trim().length > 0) {
        validationTable.password = true
        selectedInput.nextElementSibling.classList.remove('show-icon')
    } else {
        validationTable.password = false
        selectedInput.nextElementSibling.classList.add('show-icon')
    }
})

// moderate validation In progress...
// password.addEventListener('change', (e) => {
//     const selectedInput = e.target
//     //Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
//     const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
//     if (passwordRegex.test(selectedInput.value)) {
//         validationTable.password = true
//         selectedInput.nextElementSibling.classList.remove('show-icon')
//     }
//     else {
//         validationTable.password = false
//         selectedInput.nextElementSibling.classList.add('show-icon')
//     }
// })

const validateForm = () => {
    const formValues = Object.values(validationTable)
    const valid = formValues.findIndex(value => value === false)
    if (valid == -1) form.submit()
    else {
        const formKeys = Object.keys(validationTable)
        for (let i = 0; i < formKeys.length; i++) {
            if (formValues[i] === false) document.querySelector(`.msg-${formKeys[i]}`).classList.add('show-msg')
            else document.querySelector(`.msg-${formKeys[i]}`).classList.remove('show-msg')
        }
        console.log('invalid form submission')
    }
}