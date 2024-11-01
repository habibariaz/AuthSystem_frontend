import React from 'react'
import '../Style/style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

    const navigate = useNavigate();

    const signin = (e) => {

        e.preventDefault();

        let email = "";
        let password = "";

        email = document.getElementById("email").value;
        password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Empty Fields...!!!")
        } else {
            axios.post("http://localhost:8000/signin", {
                email: email,
                password: password
            }).then((res) => {
                sessionStorage.setItem("Email", email);
                sessionStorage.setItem("Password", password);
                alert(res.data.message)
                navigate('/User')
            }).catch((err) => {
                alert(err.response?.data.message);
                console.log(err)
            })
        }
    }

    return (
        <section >
            <div className="signInTopMargin">
                <div className="container-fluid" >
                    <div  className="row g-0 justify-content-center align-item-center">
                        <div  className="col-sm-4" >
                            <div  className="card signinText border-none" id='signInImage'>
                                <div  className="card-body">
                                    <div className="text-center">
                                        <h3>Welcome</h3>
                                        <p>To keep connected with us please sign in with your personal info</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className="col-sm-6">
                            <div  className="card signUpLabelMargin border-none" style={{ height: "400px" }}>
                                <div  className="card-body">
                                    <div className="text-center mt-3 mb-3">
                                        <h3>Sign In</h3><br />
                                    </div>
                                    <form>

                                        <div className='d-flex mb-3'>
                                            <label className='signUpLabelMargin'>Email&nbsp;&nbsp;</label>
                                            <input className='form-control signUpInputMargin' type="text" name="email" id="email" placeholder='abc@email.com' />
                                        </div><br />

                                        <div className='d-flex mb-3'>
                                            <label className='signUpLabelMargin'>Password&nbsp;&nbsp;</label>
                                            <input className='form-control' type="password" name="password" id="password" placeholder='Password' />
                                        </div><br />

                                        <div className='text-center mb-3'>
                                            <button className='btn btn-dark signUpBtn' onClick={signin}>Sign In</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignIn