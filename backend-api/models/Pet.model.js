const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const petSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    age: Number,
    isFixed: {
      type: Boolean,
    },
    typeOfAnimal: {
      type: String,
      enum: ["cat", "dog"],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Pet = model("Pet", petSchema);

module.exports = Pet;
