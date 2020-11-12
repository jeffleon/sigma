const db = require('../models');
/*
    controllers for aplication viewer
*/

exports.getUsers = async (req, res) =>{
    // show all users
    try{
        var users = await db.Users.findAll();
        res.render('users/index', {users: users})
    }catch(err){
        res.render('error')
    }
   
}
exports.getUser = async (req, res) =>{
    // get a user in specific 
    try{
        var id = parseInt(req.params.id) 
        var user = await db.Users.findByPk(id)
        res.status(200).send(user)
    }catch(err){
        res.render('error')
    }
}

exports.createUser_get = async (req, res) =>{
    // render a form to do the user creation
    try{
       res.render('users/create')
    }catch(err){
        res.render('error')
    } 
}
exports.createUser_post = async (req, res) =>{
    // create the user and then redirect to the index
    try{
        const { nombre, departamento, ciudad, correo} = req.body
        var user = await db.Users.create({ nombre, departamento, ciudad, correo})
        res.redirect('/users')
    }catch(err){
        return res.status(500).send(err)
    } 
}
exports.updateUser_get = async (req, res) => {
    // render a uer form to change 
    try{
        var id = parseInt(req.params.id)
        var user = await db.Users.findByPk(id)
        res.render('users/update', {user})
    }catch(err){
        return res.status(500).send(err)

    } 
}
exports.updateUser = async (req, res) => {
    try{
        // update the user
        var id = parseInt(req.params.id)
        var user = await db.Users.findByPk(id)
        const { nombre, departamento, ciudad, correo} = req.body
        user.update({ nombre, departamento, ciudad, correo})
        res.redirect('/users')
    }catch(err){
        return res.status(500).send(err)
    } 
}

exports.deleteUser = async (req, res) =>{
    try{
        // delete the user with a specific id
        var id = parseInt(req.body.id)
        var user = await db.Users.findByPk(id)
        await user.destroy({ force: true })
        res.redirect('/users')
    }catch(err){
        return res.status(500).send(err)
    } 
}