import React from 'react'
import axios from 'axios'
import NotesForm from './Formnote'

class NotesEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            note: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        const { id } = this.props.match.params
        axios.get(`http://localhost:3005/notes/${id}`)
            .then(response => {
                this.setState(() => ({ note: response.data}))
            })
    }

    handleSubmit(formData) {
        axios.put(`http://localhost:3005/notes/${this.state.note._id}`, formData)
            .then(() => this.props.history.push(`/notes/${this.state.note._id}`))
            .catch(err => console.log(err))
    }
    render() {
        console.log('render - edit', this.state)
        return(
            <div>
                <h2>Edit Note</h2>
                <NotesForm
                note={this.state.note}
                handleSubmit={this.handleSubmit} />
            </div>
        )
    }
    
}

export default NotesEdit