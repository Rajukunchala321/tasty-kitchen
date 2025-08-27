import React, { Component } from 'react'
import'./Index.css'

export class Index extends Component {

    renderUserNameField =()=>{
        return(
            <>
            <label className="input-label"  htmlFor="username">USERNAME</label>
            <input type='text' className='input-field' id='username' />
            </>
        )
    }
    renderUserPasswordField =()=>{
        return(
            <>
            <label className="input-label" htmlFor='password'>PASSWORD</label>
            <input className='input-field' id='password' type='password' />
            </>
        )
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
                    <form>
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