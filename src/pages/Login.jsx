import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [error, setError] = useState("");
    const { login, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);


    const handleGoogleLogin = () => {
    googleLogin()
        .then(result => {
            // console.log(result.user);
            navigate(location?.state ? location.state : "/");

            const loginInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                photo: result.user?.photoURL,
                lastSignInTime: result.user?.metadata?.lastSignInTime
            };

            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(() => {
                Swal.fire({
                    title: "Google Login Successful!",
                    icon: "success"
                });
            });
        })
        .catch(error => {
            // console.error(error);
            setError(error.code);
        });
};

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then((result) => {
                // console.log(result.user);
                navigate(`${location.state ? location.state : "/"}`);

                const loginInfo = {
                    email,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }

                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                    .then(res => res.json())
                    .then((data) => {
                        if (data){
                            Swal.fire({
                            title: "You are Logged In Successfully!",
                            icon: "success",
                            draggable: true
                        });
                        }   
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                // alert(errorCode, errorMessage);
                setError(errorCode);
            });
    };
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl py-5">
                <h2 className="font-semibold text-2xl text-center">
                    Login your account
                </h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* email  */}
                        <label className="label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input w-full"
                            placeholder="Email"
                            required
                        />
                        {/* password  */}
                        <label className="label">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input w-full"
                            placeholder="Password"
                            required
                        />
                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>

                        {error && <p className="text-red-400 text-xs">{error}</p>}

                        <button type="submit" className="btn bg-cyan-900 text-white mt-4">
                            Login
                        </button>

                        <button
                        type="button"
                        onClick={handleGoogleLogin} 
                         className="btn bg-white text-black mt-5 border-gray-800">
                        <FcGoogle size={25}/>
                         Login with Google
                        </button>

                        <p className="font-semibold text-center pt-5">
                            Dont’t Have An Account ?{" "}
                            <Link className="text-secondary" to="/auth/register">
                                Register
                            </Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;