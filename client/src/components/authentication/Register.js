import React from 'react' 
import axios from 'axios'

class UserRegister extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            username: '', 
            email: '', 
            password: '', 
            notice: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }  


    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            username: this.state.username, 
            email: this.state.email, 
            password: this.state.password
        }

        // todo client side validation

        axios.post('http://localhost:3005/users/register', formData)
            .then(() => {
                this.setState(() => ({
                    username: '', email: '', password: '', notice: 'successfully registered, taking you to login screen'
                }))
                setTimeout(() => {
                    this.props.history.push('/users/login')
                }, 2000)
            })
            .catch(err => console.log(err))
    }
    
    handleChange(e) {
        e.persist()
        this.setState(() => ({
            [e.target.name] : e.target.value
        })) 
    }

    render() {
        console.log(this.props)
        return (
            <div class="modal-dialog modal-sm">
                
                <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h3>Register with us</h3>
                    
                    </div>
                    
                { this.state.notice && <p>{this.state.notice}</p>}
                <form onSubmit={this.handleSubmit}>
                <div class="modal-body">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="User Name " value={this.state.username} onChange={this.handleChange} name="username"/>
                            </div>
                     <br/>

                     <div class="form-group"><input type="text"class="form-control" placeholder="User Email" value={this.state.email} onChange={this.handleChange} name="email" /></div>
                        
                    <br />

                    <div class ="form-group">
                    <input type="password"class="form-control" placeholder="User Password" value={this.state.password} onChange={this.handleChange} name="password" />
                    </div>
                        
                        
                     <br />

                    
                    <input type="submit" class="btn btn-primary" value="submit "></input>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

export default UserRegister