import React, { Component } from 'react'
import'./Index.css'

export class Index extends Component {
    state={
        username:'',
        password:'',
    }
   
    onChangeUsername =(event)=>{
         this.setState({username:event.target.value})

    }
    onChangePassword =(event)=>{
        this.setState({password:event.target.value})
    }

    renderUserNameField =()=>{
        const {username} =this.state;
        return(
            <>
            <label className="input-label"  htmlFor="username">USERNAME</label>
            <input onChange={this.onChangeUsername} type='text' value={username} className='input-field' id='username' />
            </>
        )
    }
    renderUserPasswordField =()=>{
        const {password}=this.state;
        return(
            <>
            <label className="input-label" htmlFor='password'>PASSWORD</label>
            <input onChange={this.onChangePassword} value={password} className='input-field' id='password' type='password' />
            </>
        )
    }
    sumitForm =(event)=>{
        event.preventDefault()
        const {username, password} = this.state;
        console.log(username)
        console.log(password)

    }
  render() {
    return (
      <section className='form-section'>
        <div className='form-main-container'>
            <div className='form-container'>
                <div className='form'>
                    <div className='form-logo-container'>
                        <img src='./assests/logo.png' alt='logo' />
                        <div>Tasty Kitchens</div>
                    </div>
                    <div className='login-txt'>Login</div>
                    <form onSubmit={this.sumitForm}>
                        <div className='input-container'>{this.renderUserNameField()}</div>
                        <div className='input-container'>{this.renderUserPasswordField()}</div>
                        <button type='sumit' >Login</button>
                    </form>

                </div>
            </div>
            <img className='banner-img' src='./assests/loginForm-banner.png' alt='' />
        </div>
      </section>
    )
  }
}

export default Index