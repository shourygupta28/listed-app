import {React, useEffect, useState} from "react";
import { Navigate } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { useNavigate } from "react-router-dom";
import { useSession, signIn, signOut } from "next-auth/react"




function SignIn() {
    // let user = JSON.parse(localStorage.getItem('user-info'))
    // console.log(user)
    const navigate = useNavigate();
    const[user, setUser] = useState('hello');
    useEffect(() => {
        if(user!='hello'){
            navigate('/dashboard', {state:{user: user}})
        }
    })
  return (
    <div className="signin">
      <div className="container1">
          <div className="heading">Board.</div>
      </div>
      <div className='container2'>
          <div>
            <div className="cont2heading">Sign In</div>
            <div className="cont2text">Sign in to your account</div>
            <div>
              <div style={{display:"flex", justifyContent:"space-between", margin:"1.3rem 0 1.3rem 0"}}>
              <div className='signInBox'>
              <LoginSocialGoogle
                client_id={"349489146757-7cai696q35bnfo2lg0g1tqfvrb9qrsqg.apps.googleusercontent.com"}
                scope="openid profile email"
                discoveryDocs="claims_supported"
                access_type="offline"
                onResolve={({ provider, data }) => {
                    console.log(data);
                    setUser(data);
                    console.log(user);
                    // navigate('/dashboard', {state:{user: user}})
                
                }}
                onReject={(err) => {
                    console.log(err);
                 }}
              >
                <div className='signInBox'>
                    <img src='./images/google.png' style={{width:"14px", height:"14px"}}></img> 
                    <div className='signInText'>Sign in with Google</div>
                </div>
              </LoginSocialGoogle>
                </div>
                <div className='signInBox'>
                  <img src='./images/apple.png' style={{width:"14px", height:"14px"}}></img> 
                  <div className='signInText'>Sign in with Apple</div>
                </div>
              </div>
              <div>
                <div className="box">
                  <form>
                    <div style={{marginBottom:"1.5rem"}}>
                      <label>
                        <div className='labelltext'>Email Address</div>
                        <input type="text" name="email" className="inputField"/>
                      </label>
                    </div>

                    <div style={{marginBottom:"1.5rem"}}>
                    <label>
                        <div className='labelltext'>Password</div>
                        <input type="password" name="password" className="inputField"/>
                      </label>
                    </div>
                    <a className='pass'>Forgot Password?</a>
                    <div>
                        <input type="submit" value="Sign In" className='btn'/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='normaltext'>Don't have an account? <span style={{color:"#346BD4", cursor:"pointer"}}>Register Here</span></div>
          </div>
      </div>
    </div>
  );
}

export default SignIn;