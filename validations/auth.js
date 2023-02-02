const {check}= require('express-validator')
const db= require('../db')

const password = check('Пароль')
.isLength({min: 3})


const email =check('email').isEmail()




if (rows.length) {
    console.log('email существует')
}





module.exports={
    registerValidation: [email, password]
}
