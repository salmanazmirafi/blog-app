import express from 'express'
import { categoryAll, categoryCreate } from '../controllers/categoryControllers.js'


const categoryRoutes = express()

// Create Category
categoryRoutes.post('/', categoryCreate )
// Update Category
categoryRoutes.put('/:id' )
// Delete Category
categoryRoutes.delete('/:id' )
// Get Single Category
categoryRoutes.get('/find/:' )
// Get All Category
categoryRoutes.get('/', categoryAll )


export default categoryRoutes