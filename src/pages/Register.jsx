import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
             <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form  className="card-body">
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            {/* {nameError && <p className="text-xs text-error">{nameError}</p>} */}

            {/* Photo URl  */}
            <label className="label">Photo URl </label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URl"
              required
            />

            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
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