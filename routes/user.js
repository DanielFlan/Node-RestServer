const { Router } = require('express');
const router = Router();
const { userGet, userPut, userPost, userDelete, userPatch } = require('../controllers/user_controller')

router.get('/', userGet);

router.put('/:userID', userPut)

router.post('/', userPost)

router.delete('/', userDelete)

router.patch('/', userPatch)

module.exports = router;