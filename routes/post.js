import express from 'express'
import { postAll, postCreate, postDelete, postGet, postUpdate } from '../controllers/postControllers.js'


const postRoutes = express()

// Create Post
postRoutes.post('/', postCreate )
// Update Post
postRoutes.put('/:id', postUpdate )
// Delete Post
postRoutes.delete('/:id', postDelete )
// Get Single Post
postRoutes.get('/find/:id', postGet )
// Get All Post
postRoutes.get('/', postAll )


export default postRoutes