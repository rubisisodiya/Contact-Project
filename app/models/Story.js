const express =require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storiesSchema = new Schema({
        title:{
            type:String,
            required:true,
            unique:true
        },
        body:{
            type:String,
            required:true,
            unique:true
        },
        createdAt:{
                type:Date,
                default:Date.now
            },
        
        user:{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }

})


const Story = mongoose.model('Story',storiesSchema )
module.exports = {
    Story
}
