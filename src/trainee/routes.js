const {Router} = require('express')
const controller = require('./controller')

const router = Router()

//router.get('/',(req,res) =>{
//    res.send('using api route');
//});

router.get('/', controller.getApirestnode);

router.post('/', controller.addTrainee);

router.get('/:id', controller.getTraineeById);

router.put('/:id', controller.updateTrainee);

router.delete('/:id', controller.removeTrainee);



module.exports = router;