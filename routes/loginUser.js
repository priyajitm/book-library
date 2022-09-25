import {Router} from 'express'
import passport from 'passport'

const router = Router()

router.post('/', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) throw err
        if (!user) {
            res.status(401).send('Username/Password is incorrect')
            
        } 
        if (user) {
            req.logIn(user, (err) => {
                if (err) throw err
                res.status(200).json({
                    name: user.firstname,
                    email: user.email,
                    isAdmin: user.isAdmin
                })
            })
        }
    })(req, res, next)
})

export default router