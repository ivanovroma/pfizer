import express from 'express'

import * as CardController from './controller'
import * as Form from './blocks/Form/controller'
import * as Item from './blocks/Item/controller'


// Middlewares init
import SetCurrentUser from '../../middlewares/SetCurrentUser'
import CheckAdmin from '../../middlewares/CheckAdmin'
// Middlewares init


const router = express.Router()

router.post('/index', SetCurrentUser, CardController.GetList)
router.post('/create', SetCurrentUser, CardController.Create)
router.post('/update', SetCurrentUser, CardController.Update)
router.post('/remove', SetCurrentUser, CardController.Remove)

// router.post('/seed', SetCurrentUser, CardController.Seed)
// router.post('/seed-remove', SetCurrentUser, CardController.SeedRemove)

router.post('/read-form', SetCurrentUser, Form.Read)
router.post('/write-form', SetCurrentUser, Form.Write)

router.post('/create-item', SetCurrentUser, Item.Create)
router.post('/get-item-list', SetCurrentUser, Item.GetList)
router.post('/update-item', SetCurrentUser, Item.Update)
router.post('/remove-item', SetCurrentUser, Item.Remove)

export default router