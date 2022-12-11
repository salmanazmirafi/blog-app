import express from 'express'
import { createAuth, loginAuth } from '../controllers/authControllers.js'

const authRoutes = express()

// SignUp
authRoutes.post('/signup', createAuth)
// Login
authRoutes.post('/login', loginAuth)

export default authRoutes