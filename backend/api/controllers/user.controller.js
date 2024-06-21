const User = require('../models/user.model')

async function getUsers (req, res) {
    try {
        const users = await User.findAll()
        if(!users) return res.status(204).send([])

        res.status(200).json(users)
    } catch (error) {
        res.status(500).send(error)
    }
}


async function getMyProfileByToken (req, res){
    try {
        
        const user = await User.findByPk(res.locals.user.id)

        if(!user) return res.status(404).send('User not found!')

        res.status(200).json(user)

    } catch (error) {
        res.status(500).send(error)
    }
}

// get
// get




// delete

// 

module.exports = {
    getUsers,
    getMyProfileByToken
}