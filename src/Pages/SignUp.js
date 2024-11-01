import React from 'react'
import '../Style/style.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SignUp = () => {

    //function for registration of user
    const signup = (e) => {

        e.preventDefault();

        let name = "";
        let email = "";
        let password = "";
        let phone = "";

        name = document.getElementById("name").value;
        email = document.getElementById("email").value;
        password = document.getElementById("password").value;
        phone = document.getElementById("phone").value;

        if (name === "" || email === "" || password === "" || phone === "") {
            alert("Empty Fields...!!!")
        } else {
            axios.post('https://auth-sytem-backend.vercel.app/signup', {
                name: name,
                email: email,
                password: password,
                phone: phone
            }).then((res) => {
                if (res.data.msg1 === false) {
                    alert("Email Already Exists...!!!")
                }
                if (res.data.msg2 === true) {
                    alert("Registered Successfully...!!!")
                    window.location.reload()
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    return (

        <>
            <section >
                <div className="signUpTopMargin">
                    <div className="container-fluid signUpMediaTag" >
                        <div className="row g-0 justify-content-center align-item-center">
                            <div className="col-sm-4" >
                                <div className="card signUpCardHeight" id='signUpImage'>
                                    <div className="card-body signupText border-none">
                                        <div className="text-center">
                                            <h3>Welcome</h3>
                                            <p>To keep connected with us please sign in with your personal info</p>
                                            <Link to='/SignIn'>
                                                <button className='btn btn-light signInBtn'>Sign In</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card signUpLabelMargin border-none">
                                    <div className="card-body border-none" style={{ height: "490px" }}>
                                        <div className="text-center mt-2 mb-2">
                                            <h3>Create An Account</h3><br />
                                        </div>

                                        <form>
                                            <div className='d-flex mb-2'>
                                                <label className='signUpLabelMargin'>Name&nbsp;</label>
                                                <input className='form-control signUpInputMargin' type="text" name="name" id="name" placeholder='Full Name' />
                                            </div><br />

                                            <div className='d-flex mb-2'>
                                                <label className='signUpLabelMargin'>Email&nbsp;&nbsp;</label>
                                                <input className='form-control signUpInputMargin' type="text" name="email" id="email" placeholder='abc@email.com' />
                                            </div><br />

                                            <div className='d-flex mb-2'>
                                                <label className='signUpLabelMargin'>Password&nbsp;&nbsp;</label>
                                                <input className='form-control' type="password" name="password" id="password" placeholder='Password' />
                                            </div><br />

                                            <div className='d-flex mb-2'>
                                                <label className='signUpLabelMargin'>Phone&nbsp;</label>
                                                <input className='form-control signUpInputMargin' type="text" name="phone" id="phone" placeholder='Phone Number' />
                                            </div><br />

                                            <div className='text-center mb-2'>
                                                <button className='btn btn-dark signUpBtn' onClick={signup}>Sign Up</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default SignUp
