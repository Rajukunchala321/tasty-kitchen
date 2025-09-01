import React, { Component } from 'react'
import axios from 'axios'
import'./index.css'
import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'

export class Index extends Component {
    state={
        username:'',
        password:'',
        showSubmitError:false,
        errorMsg:''
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
    
       sumitForm = async (event)=>{
        event.preventDefault()
        const {username, password} = this.state;
        const userDetails = {username, password};
        try{
            const response = await axios.post('https://apis.ccbp.in/login',
            JSON.stringify(userDetails),
        )
        
            const jwtToken =response.data.jwt_token;
             // storing jwt token 
            Cookies.set('jwt_token',jwtToken,{
                expires:30,
                path:'/',
            } )
             this.props.navigate("/", { replace: true });


        }catch(error){
           
  console.log(error);

  let errMsg = "Something went wrong";
  if (error.response && error.response.data && error.response.data.error_msg) {
    errMsg = error.response.data.error_msg;  
  } else if (error.message) {
    errMsg = error.message; 
  }

  this.setState({ showSubmitError: true, errorMsg: errMsg });



        }

        

    }
   
  render() {
    const {showSubmitError, errorMsg} = this.state;
    const jwtToken = Cookies.get("jwt_token");
    if(jwtToken !== undefined){
        return <Navigate to='/' replace />
    }
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
                        <button type='submit' >Login</button>
                        {showSubmitError && <p className='errormsg'>*{errorMsg}</p>}
                    </form>

                    <div className='credits'>
                        username: rahul
                         <br/>
                        password: rahul@2021
                    </div>

                </div>
            </div>
            <img className='banner-img' src='./assests/loginForm-banner.png' alt='' />
        </div>
      </section>
    )
  }
}

export default Index