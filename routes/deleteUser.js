import { Router } from "express";
import User from '../models/User.js'


const router = Router()

router.post('/:userid', async (req, res) => {
    try {
            const id = req.params.userid
            const user = await User.findByIdAndRemove(id)

            if (user) {
                res.status(200).send({msg: 'User Deleted'})
            } else {
                res.status(404).send({msg: 'User Not Found'})
            }
            
    } catch (err) {
        console.log(err)
        res.status(500).send({msg: 'Database Connection Error'})
    }
})

export default router