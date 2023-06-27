const PlayerConfirm = require('./playerConfirm.model')

module.exports = {
  //post crear una confirmación del jugador
  async createPlayerConfirm(req, res){
    try {
      const data = req.body
      const player = await PlayerConfirm.create({...data})
      res.status(201).json({message: 'player confirm create succesfully', data: player})
      
    } catch (error) {
      res.status(422).json({message: 'confirm could not created'})
      
    }
  },

  //get all players confirm
  async getAllPlayerConfirm(req, res){
    try {
      const allplayers = await PlayerConfirm.find()
      res.status(200).json({message: 'players found', data: allplayers})
    } catch (error) {
      res.status(404).json({message: 'players not found'})
    }
  }
}