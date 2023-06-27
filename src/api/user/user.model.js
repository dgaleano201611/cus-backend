const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    personalData: {
      name: { type: String, required: true },
      age: { type: Number, required: true },
      gender: { type: String, required: true },
      dateOfBirth: { type: Date, required: true },
      address: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
    },

    bodyInfo: {
      weight: { type: Number, required: true },
      height: { type: Number, required: true },
      bodyMassIndex: { type: Number, required: false },
      bodyFatPercentage: { type: Number, required: false },
      waterPercentage: { type: Number, required: false },
      boneWeight: { type: Number, required: false },
      bloodType: { type: String, required: true },
    },

    position: { type: String, required: true },
    eps: { type: String, required: true },
    numberEmergencyContact: { type: String, required: true },
    image: String,
    password: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = model("user", userSchema);

module.exports = User;
