const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');

module.exports = {
    getAll: (req, res) => {
        Animal.find({},function(err, itemsFromDB){
            if(err) {
                // console.log(err);
                console.log('error grabbing all items: controller getAll notification')
                res.json({message:'Error', data: err});
            } else {
                // console.log(itemsFromDB);
                console.log('successfully grabbed all items: controller getAll notification')
                res.json({message:'Success', data: itemsFromDB});
            }
        })
    },

    getOne: (req, res) => {
        Animal.find({_id:req.params.id},function(err,itemsFromDB){
            if(err) {
                // console.log(err);
                console.log('error grabbing single item: controller getOne notification')
                res.json({message:'Error', data: err});
            } else {
                // console.log(itemsFromDB);
                console.log(`successfully retrieved item with id ${req.params.id}: controller getOne notification`)
                res.json({message:'Success', data: itemsFromDB});
            }
        }) 
    },

    create: (req, res) => {  
        console.log("in create inside product controller")    
        animal = new Animal(req.body)
        animal.save({},function(err,itemsFromDB){
            if(err) {
                // console.log(err);
                console.log('error creating item: controller create notification')
                res.json({message:"Error", data:err});
            } else {
                // console.log(itemsFromDB);
                console.log('successfully created item: controller getOne notification')
                res.json({message:'Success', data:itemsFromDB});
            }
        })
    },

    update: (req, res) => {    
        console.log(req.body)
        console.log("made it to update in controller")  
        Animal.findOneAndUpdate({_id:req.params.id},{$set:req.body},function(err,itemsFromDB){
            if(err) {
                // console.log(err);
                console.log(`error editing item with id ${req.params.id}: controller update notification`)
                res.json({message:"Error", data:err});
            } else {
                console.log(itemsFromDB);
                console.log(`successfully updated item with id ${req.params.id}: controller Update notification`)
                res.json({message:"Success", data:itemsFromDB});
            }
        })   
    },

    like: (req, res) => {    
        console.log(req.body)
        console.log("made it to like in controller")  
        Animal.findByIdAndUpdate({_id:req.params.id},{$set:req.body},function(err,itemsFromDB){
            if(err) {
                // console.log(err);
                console.log(`error editing item with id ${req.params.id}: controller update notification`)
                res.json({message:"Error", data:err});
            } else {
                console.log(itemsFromDB);
                console.log(`successfully updated item with id ${req.params.id}: controller Update notification`)
                res.json({message:"Success", data:itemsFromDB});
            }
        })   
    },

    // review: (req, res) => {
    //     const review = new Review(req.body);
    //     review.save((err)=>{
    //         if(err){
    //             console.log(`Error rating item with id ${req.params.id}: controller rate notification - inside save statement`);                        
    //             // console.log(err); 
    //             res.json({message: 'Error', error: err})
    //         }
    //         else{
    //             Restaurant.find({_id:req.params.id},function(err,itemsFromDB){
    //                 if(err) {
    //                     // console.log(err);
    //                     console.log('error grabbing single item: controller getOne notification')
    //                     res.json({message: 'Error', error: err})
    //                 } 
    //                 else {
    //                     itemsFromDB[0]['reviews'].push(review)
    //                     itemsFromDB[0].save();
    //                     console.log(`Success reviewing item with id ${req.params.id}: controller review notification`)
    //                     res.json({message:'Success', data:itemsFromDB});
    //                 }
    //             })
    //         }
    //     });
    // },

    delete: (req, res) => {
        Animal.remove({_id:req.params.id},function(err,itemsFromDB){
            if(err) {
                // console.log(err);
                console.log(`error deleting item with id ${req.params.id}: controller delete notification`)
                res.send(err)
            } else {
                console.log(`successfully deleted item with id ${req.params.id}: controller delete notification`)
                res.json({message:"Successfully removed", data:itemsFromDB});
            }
        })
    },

}













