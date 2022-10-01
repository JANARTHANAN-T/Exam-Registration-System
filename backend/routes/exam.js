const express=require('express')
const {createExam, getAllExam, getRegisteredExam,RegisterExam} = require('../controllers/exam.js')
const router = express.Router();

router.get('/',getAllExam)
router.get('/registered/:id',getRegisteredExam)
router.post('/registered',RegisterExam)
router.post('/',createExam)

module.exports=router;