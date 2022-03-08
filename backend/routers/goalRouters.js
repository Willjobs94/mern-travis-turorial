const express = require('express')
const router = express.Router()

const {getGoals, updateGoal, deleteGoal, setGoal} = require('../controllers/goalController')


router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

// router.post('/', setGoal)
// router.get('/', getGoals)

// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)



module.exports = router