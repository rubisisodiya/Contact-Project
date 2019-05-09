import React from 'react'
import axios from'axios'
import StroyForm from './Formstroy'
class StoriesNew extends React.Component{
    handleSubmit = (formData) =>{
        axios.post('/stories', formData)
            .then(() => this.props.history.push('/stories'))
            .catch(err => console.log(err))
    }
    render(){
        return (
            <div className="container">
                <StroyForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}
export default  StoriesNew