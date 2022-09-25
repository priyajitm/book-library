import { Router } from "express";

const router = Router()

router.post('/', async (req, res) => {
    req.logOut(err => {
        if (err) throw err
    })
    res.status(200).send('User Logged Out')
})

export default router;