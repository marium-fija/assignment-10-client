import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const { createUser, setUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleGoogleRegister = () => {
    googleLogin()
        .then(result => {
            // console.log("Google User:", result.user);
            setUser(result.user);
            navigate("/");

            const userProfile = {
                email: result.user?.email,
                name: result.user?.displayName,
                photo: result.user?.photoURL,
                creationTime: result.user?.metadata?.creationTime,
                lastSignInTime: result.user?.metadata?.lastSignInTime
            };

            fetch("https://assignment-10-server-seven-wine.vercel.app/users", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(userProfile)
            })
            .then(res => res.json())
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Account Created with Google",
                });
            });
        })
        // .catch(err =>
        // //  console.error(err)
        // );
};


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const { email, password, ...restFormData } = Object.fromEntries(formData.entries());


        // Password Validation
        const passwordValide = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;
        if (password.length < 8 || !passwordValide.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Invalid Password",
                text: "Password must be at least 8 characters long and include 1 uppercase, 1 lowercase, and 1 special character."
            });
            return;
        }

        // create user
        createUser(email, password)
            .then(result => {
                // update profile
                updateProfile(result.user, {
                    displayName: restFormData.name,
                    photoURL: restFormData.photo
                }).then(() => {
                    // console.log("Profile updated:", result.user);
                    result.user.reload().then(() => {
                        setUser(result.user);
                        navigate("/");
                    })
                });


                // save to backend
                const userProfile = {
                    email,
                    ...restFormData,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }

                fetch('https://assignment-10-server-seven-wine.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your account is created.",
                                showConfirmButton: false,
                                timer: 1500
                            });

                        }
                    })
            })
            // .catch(error => {
            //     console.log(error);

            // })

    }
    return (
        <div>
            <div className="flex justify-center min-h-screen items-center">
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl py-5">
                    <h2 className="font-semibold text-2xl text-center">
                        Register your account
                    </h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            {/* Name  */}
                            <label className="label">Name</label>
                            <input
                                name="name"
                                type="text"
                                className="input w-full"
                                placeholder="Name"
                                required
                            />

                            {/* {nameError && <p className="text-xs text-error">{nameError}</p>} */}

                            {/* Photo URl  */}
                            <label className="label">Photo URl </label>
                            <input
                                name="photo"
                                type="text"
                                className="input w-full"
                                placeholder="Photo URl"
                                required
                            />

                            {/* phone */}
                            <label className="label">Phone
                            </label>
                            <input type="text" name="phone" className="input w-full" placeholder="Phone NUmber" />

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
                            <button type="submit" className="btn bg-cyan-900 text-white mt-4">
                                Register
                            </button>
                            <button
                            type="button"
                             onClick={handleGoogleRegister} 
                            className="btn bg-white text-black border-gray-800 mt-5">
                                <FcGoogle size={25}/>
                                Register with Google
                            </button>
                            <p className="font-semibold text-center pt-5">
                                Allready Have An Account ?{" "}
                                <Link className="text-secondary" to="/auth/login">
                                    Login
                                </Link>
                            </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;