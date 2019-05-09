import React from 'react'
import axios from '../../config/axios'
import { Redirect } from 'react-router-dom'

class UserLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '', 
            notice: '',
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('/users/login', formData)
            .then(response => {
                axios.defaults.headers['x-auth'] = response.data.token
                localStorage.setItem('token', response.data.token)
                this.props.handleIsAuthenticated(true)
                this.setState(() => ({ redirect: true }))
                // this.props.history.push('/contacts')
            })
            .catch(err => {
                console.log('error',err)
                this.setState(() => ({
                    notice: err.response.data.notice 
                }))
            })

    }

    handleChange(e) {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    render() {
        console.log(this.props)
        if(this.state.redirect) {
            return <Redirect to="/contacts" />
        }
        return (
            <div class="modal-dialog modal-sm">
                
            <div class="modal-content">
            <div class="modal-header bg-info text-white">
                <h3>Login</h3>
                
               </div>
                { this.state.notice && <p> { this.state.notice } </p> }
                <form onSubmit={this.handleSubmit}>
                <div class="modal-body">
                    <div class="form-group">
                            <input type="email" class="form-control" placeholder=" Email" value={this.state.email} onChange={this.handleChange} name="email" />
                        </div>
                    
                        <div class="form-group">
                      <input type="password"class="form-control"placeholder=
                      "password" value={this.state.password} onChange={this.handleChange} name="password" />
                       </div>
                     <br />

                    {/*<input type="submit" />*/}
                    <input type="submit" class="btn btn-info" value="submit "></input>
                    </div>
                </form>
            </div>
            </div>
            
            
            
        )
    }
}

export default UserLogin