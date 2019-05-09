import React from 'react' 

class StoryForm extends React.Component {
    constructor(props) {

        super(props) 
        this.state = {
            title: ''
        }
        // bind methods, sets the context of the this keyword
       
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

    componentWillReceiveProps(nextProps){
            console.log(`component will receive `,nextProps )
            const {title} = nextProps.note
            this.setState( () => ({
                title
            }))
    }
    // es6 arrow function
    handleNameChange = (e) => {
        const title = e.target.value 
        // console.log(this) 
        this.setState(() => ({ title }))
    }


    handleSubmit(e) {
        e.preventDefault() 
        const formData = {
            title: this.state.title 
        }
        this.props.handleSubmit(formData)

        // clear form 

        this.setState(() => ({ 
           title: ''
        }))
      
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name 
                        <input type="text" value={this.state.title} onChange={this.handleNameChange} /> 
                    </label> <br/> 

                   
                    <input type="submit" /> 
                </form> 
            </div>
        )
    }
}

export default StoryForm