import { Router } from "express";
import bcrypt from 'bcrypt'
import User from '../models/User.js'


const router = Router()

router.post('/', async (req, res) => {
    try {
        const { firstname, lastname, email, password, isadmin } = req.body

        const user = await User.findOne({email: email})

        if (user) {
            res.status(200).send({msg: 'User already Exists'})
        } else {

            const encryptedPassword = await bcrypt.hash(password, 10)
            const isAdminUser = isadmin ? true : false

            const userData = new User ({
               firstname: firstname,
               lastname: lastname,
               email: email,
               password: encryptedPassword,
               isAdmin: isAdminUser
            })

            await userData.save()
            res.status(201).send({msg: 'User Added Suceessfully'})
        }
        
    } catch (err) {
        console.log(err)
        res.status(500).send({msg: 'Database Connection Error'})
    }
})

export default router