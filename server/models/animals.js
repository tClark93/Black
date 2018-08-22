const mongoose = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');

const AnimalSchema = new mongoose.Schema({
    name: {type: String, minlength:[3, "Pet name must be at least 3 characters"], maxlength:[100, "Pet name must be under 100 characters"], required: [true, "Please provide the pet's name"]},  
    species: {type: String, required: [true, "Please tell us what kind of animal this is"],  minlength:[3, "Species must be at least 3 characters"], maxlength:[100, "Please keep it under 100 characters"]},
    description: {type: String, required: [true, "Please tell us about this animal"],  minlength:[3, "Description must be at least 3 characters"], maxlength:[250, "Descriptions must be under 250 characters"]},
    skillOne: {type: String, maxlength:[100, "Skills must be under 100 characters"]},
    skillTwo: {type: String, maxlength:[100, "Skills must be under 100 characters"]},
    skillThree: {type: String, maxlength:[100, "Skills must be under 100 characters"]},
    likes: {type: Number, min: 0}
   }, {timestamps: true})

AnimalSchema.pre("findOneAndUpdate", function(next){
    this.options.runValidators = true;
    next();
})

// AnimalSchema.plugin(uniqueValidator, {message: "A pet with that name already exists"});

mongoose.model('Animal', AnimalSchema);




