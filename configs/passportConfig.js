import User from "../models/User.js";
import bcrypt from 'bcrypt'
import LocalStrategy from 'passport-local'
import passport from "passport";

const passportAuth = () => {
    passport.use(
        new LocalStrategy((username, password, done) => {
            User.findOne({email: username}, (err, user) => {
                if (err) throw err
                if (!user) return done(null, false)
                bcrypt.compare(password, user.password, (err, res) => {
                    if (err) throw err
                    if (res) {
                        return done(null, user)
                    } else {
                        return done(null, false)
                    }
                })
                // if (user) {
                //     return done(null, user)
                // }
            })
        }
    ))
}

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})

export default passportAuth