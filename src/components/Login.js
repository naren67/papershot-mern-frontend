import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../firebase'
import './Login.css'

function Login() {

          const signIn = ()=>{
                  auth.signInWithPopup(provider)
                  .catch(error =>{
                            alert(error.message)
                  })
          }

          return (
                    <div className='login'>
                            <div className="login__top">
                            <img src="https://paper-logo.s3.us-east-2.amazonaws.com/paper.png" alt=""/>
                              <p>PAPER SHOT</p>
                              <Button onClick={signIn} className='login__button'>SIGN IN</Button>
                            </div>

                            <div className="login__bottom">
                                      <p>All copyrights reserved by @ Naren N</p>
                            </div>
                    </div>
          )
}

export default Login
