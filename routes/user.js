import express from 'express'
import { userAll, userDelete, userGet, userUpdate } from '../controllers/userControllers.js'


const userRoutes = express()

// Update User
userRoutes.put('/:id', userUpdate)
// Delete User
userRoutes.delete('/:id', userDelete)
// Get Single User
userRoutes.get('/find/:id', userGet)
// Get All User
userRoutes.get('/', userAll)


export default userRoutes