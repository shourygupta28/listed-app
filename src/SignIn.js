import React from "react";

function SignIn() {
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
                  <img src='./images/google.png' style={{width:"14px", height:"14px"}}></img> 
                  <div className='signInText'>Sign in with Google</div>
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