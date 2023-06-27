const { Schema, model } = require("mongoose");

const playerConfirmSchema = new Schema(
  {
    player: String,
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const PlayerConfirm = model('playerConfirm', playerConfirmSchema)

module.exports = PlayerConfirm