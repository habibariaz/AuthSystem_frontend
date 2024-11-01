import React from 'react'
import Sidebar from '../Components/Sidebar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const User = () => {

    const navigate = useNavigate();
    //get user email from session storage
    const stored_email = sessionStorage.getItem("Email");

    //function to update user password
    const submit = (e) => {
        e.preventDefault();

        let email = "";
        let password = "";
        let c_password = "";

        email = document.getElementById("email").value;
        password = document.getElementById("password").value;
        c_password = document.getElementById("c_password").value;

        if (email === "" || password === "" || c_password === "") {
            alert("Empty Fields...!!!")
        } else if (email !== stored_email) { //check user entered email with session storage email
            alert("Email does not match the logged-in user's email...!!!");
        } else if (password !== c_password) {
            alert("Invalid Details...!!!");
        } else {
            axios.post("http://localhost:8000/updatepassword", {
                email: email,
                password: password,
                c_password: c_password
            }).then((res) => {
                alert(res.data.message)
                window.location.reload();
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    const delete_acc = (e) => {
        e.preventDefault();

        const confirm = window.confirm("Are you sure?");

        if (confirm) {
            axios.post('http://localhost:8000/deleteuser', {
                email: sessionStorage.getItem("Email")
            }).then((res) => {
                alert(res.data.message)
                navigate('/')
            }).catch((err) => {
                console.log(err)
            })
        }

    }

    return (
        <>
            <div className="container">
                <Sidebar />
                <div className="container-fluid" style={{ marginTop: "100px" }}>
                    <div className="text-center">
                        <h1>Profile Settings</h1>
                    </div><br />
                    <div>
                        <form>
                            <div className=' '>
                                <label className='profileSettingsLabelMargin'>Email:</label>
                                <input type="text" className='form-control' id="email" />
                            </div><br />

                            <div className=' '>
                                <label className='profileSettingsLabelMargin'>Password:</label>
                                <input type="password" className='form-control' id="password" />
                            </div><br />

                            <div className=' '>
                                <label className='profileSettingsLabelMargin' style={{ whiteSpace: "nowrap" }}>Confirm Password:</label>
                                <input type="password" className='form-control' id="c_password" />
                            </div><br />

                            <div className='d-flex'>
                                <div>
                                    <button className='btn btn-dark profile_settingBtn' onClick={submit}>Submit</button>
                                </div>

                                <div>
                                    <button className='btn btn-dark deleteaccBtn' onClick={delete_acc}>Delete Account</button>
                                </div>
                            </div>


                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default User