
import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../../config/axios'

class StoriesList extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            stories:[]
        }
    }
    componentDidMount () {
        console.log('will')
        axios.get('/stories')
        .then(response => {
            console.log(response.data)
            this.setState(() => ({stories :response.data}))
            })
        .catch(err => console.log(err))
    }

render(){
    return(
        <div>
            <h1>stories</h1>
            <h2>listing stories-{this.state.stories.length}</h2>
            {
                this.state.stories.map(story => {
                    return (
                        <div key={story._id}>
                          <p>title: {story.title} </p> 
                        </div>
                    )
                })
            }
        <center><Link className="link_button" to="/stories/new">Add story</Link></center> 

        </div>
    )
}
}
export default StoriesList
	
	
	
