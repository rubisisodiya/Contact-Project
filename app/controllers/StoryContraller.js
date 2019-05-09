const express=require('express')
const router =express.Router()
const { authenticateUser }=require('../middlewares/authentication')
const { Story }=require('../models/Story')

router.get('/',authenticateUser,(req,res) => {
    Story.find({ user:req.user._id })
    .then( (story) => { res.send(story) })
    .catch((err) => { res.send(err) })
})

router.post('/',authenticateUser, (req,res) => {
    //console.log('story')
    const body=req.body
    const story=new Story(body)
    story.user=req.user._id
        story.save()
    .then( (story) => { res.send(story) })
    .catch((err) => { console.log(err) })
})

router.get('/:id', authenticateUser, (req,res) => {
    const id=req.params.id
    Story.findOne({
        user:req.user._id,
        _id:id
    })
    .then((story) => {
        if(story) {
            res.send(story)
        }
        else{
            res.send({})
         }
    })
    .catch((err) => { res.send(err) })
})
router.delete('/:id', authenticateUser, (req,res) => {
    const id=req.params.id
    Story.findOneAndDelete({
        user:req.user._id,
        _id:id 
    })
    .then((story)=> res.send(story))
    .catch((err) => { res.send(err) })   
})
router.put('/:id',authenticateUser, (req,res) => {
    const id=req.params.id
    const body=req.body
    Story.findOneAndUpdate({
        user:req.user._id,
        _id:id
    }, {$set:body}, {new:true,runValidators:true} )
    .then((story)=> res.send(story))
    .catch((err) => { res.send(err) })
    
})
module.exports={
    storyRouter:router
}