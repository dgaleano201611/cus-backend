const User = require('./user.model')
module.exports = {
  //post
  async createUser(req, res){
    try {
      const data = req.body

      const user = await User.create({...data})

      res.status(201).json({message: 'user created succesfuly', data: user})

    } catch (error) {
      res.status(400).json({message: 'user could not created'})

    }
  },

  async getAllUser(req, res){
    try {
      const users = await User.find()
      res.status(200).json({message: "Users found", data: users})
    } catch (error) {
      res.status(400).json({message: 'Users not found', data: error})
      
    }
  },

  async getUserById(req, res){
    try {
      const {idUser} = req.params
      const user = await User.findById(idUser)
      res.status(200).json({message: 'user found', data: user})
    } catch (error) {
      res.status(404).json({message: 'user not found', data: error})
      
    }
  },

  async updateUser(req, res){
    try {
      const {idUser} = req.params
      const data = req.body
      const user = await User.findByIdAndUpdate(idUser, data, {new:true})
      res.status(200).json({message: 'user updated succesfuly', data: user})
    } catch (error) {
      res.status(400).json({message: 'User not updated', data: error})
      
    }
  },

  async deleteUser(req, res){
    try {
      const {idUser} = req.params
      const user = await User.findByIdAndDelete(idUser)
      res.status(200).json({message: "user deleted", data: user})
    } catch (error) {
      res.status(404).json({message: 'user not deleted', data: error})
      
    }
  }

}
