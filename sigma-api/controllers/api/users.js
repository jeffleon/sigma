const db = require('../../models');
/*
 controllers to API
*/
exports.getUsers = async (req, res) =>{
    // get the all users
    try{
        var users = await db.Users.findAll();
        res.status(200).send(users)
    }catch(err){
        res.status(500).send({"error": err})
    }
   
}
exports.getUser = async (req, res) =>{
    // look for a id and then get for the user
    try{
        var id = parseInt(req.params.id) 
        var user = await db.Users.findByPk(id)
        res.status(200).send(user)
    }catch(err){
        res.status(500).send({"error": err})
    }
}
exports.createUser = async (req, res) =>{
    // create a user with post method
    try{
        const { nombre, departamento, ciudad, correo} = req.body
        var user = await db.Users.create({ nombre, departamento, ciudad, correo})
        res.status(200).send(user)
    }catch(err){
        return res.status(500).send({"error":err})
    } 
}

exports.updateUser = async (req, res) => {
    // update a user with a specific id
    try{
        var id = parseInt(req.params.id)
        var user = await db.Users.findByPk(id)
        const { nombre, departamento, ciudad, correo} = req.body
        user.update({ nombre, departamento, ciudad, correo})
        res.status(200).send(user)
    }catch(err){
        return res.status(500).send({"error":err})
    } 
}

exports.deleteUser = async (req, res) =>{
    // delete a user with a specfic id
    try{
        var id = parseInt(req.params.id)
        var user = await db.Users.findByPk(id)
        await user.destroy({ force: true })
        res.status(200).send(user)
    }catch(err){
        return res.status(500).send({"error":err})
    } 
}