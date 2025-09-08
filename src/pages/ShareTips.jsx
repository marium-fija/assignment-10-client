import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ShareTips = () => {
    const {user} = useContext(AuthContext);
    const {
        register,
    handleSubmit,
    reset,
    formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
    // form data + user info combine
    const tipData = {
      ...data,
      user: {
        name: user?.displayName,
        email: user?.email,
       },
     };


     fetch ("https://assignment-10-server-seven-wine.vercel.app/tips", {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(tipData),
     })
     .then((res) => res.json())
     .then((result) => {
        if (result.insertedId) {
             Swal.fire({
            title: "Success!",
            text: "Tip shared successfully 🌱",
            icon: "success",
            confirmButtonText: "Okay",
          });
          reset();
        }
     });

 };
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="max-w-3xl mx-auto my-20 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-5xl font-bold text-center mb-6">
         Share Your Gardening Tip
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="font-medium">Title</label>
          <input
            {...register("title", { required: true })}
            placeholder="How I Grow Tomatoes Indoors"
            className="input input-bordered w-full"
          />
          {errors.title && <p className="text-red-500">Title is required</p>}
        </div>

        {/* Plant Type */}
        <div>
          <label className="font-medium">Plant Type / Topic</label>
          <input
            {...register("plantType", { required: true })}
            placeholder="Tomatoes, Herbs, etc."
            className="input input-bordered w-full"
          />
        </div>

        {/* Difficulty Level */}
        <div>
          <label className="font-medium">Difficulty Level</label>
          <select {...register("difficulty")} className="select select-bordered w-full">
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="font-medium">Description</label>
          <textarea
            {...register("description", { required: true })}
            placeholder="Write your gardening experience..."
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="font-medium">Image URL</label>
          <input
            {...register("image", { required: true })}
            placeholder="https://example.com/myimage.jpg"
            className="input input-bordered w-full"
          />
        </div>

        {/* Category */}
        <div>
          <label className="font-medium">Category</label>
          <select {...register("category")} className="select select-bordered w-full">
            <option value="Composting">Composting</option>
            <option value="Plant Care">Plant Care</option>
            <option value="Vertical Gardening">Vertical Gardening</option>
            <option value="Hydroponics">Hydroponics</option>
          </select>
        </div>

        {/* Availability */}
        <div>
          <label className="font-medium">Availability</label>
          <select {...register("availability")} className="select select-bordered w-full">
            <option value="Public">Public</option>
            <option value="Hidden">Hidden</option>
          </select>
        </div>

        {/* User Info */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-medium">User Name</label>
            <input
              value={user?.displayName || ""}
              readOnly
              className="input input-bordered w-full bg-gray-100"
            />
          </div>
          <div>
            <label className="font-medium">User Email</label>
            <input
              value={user?.email || ""}
              readOnly
              className="input input-bordered w-full bg-gray-100"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn bg-green-600 text-white hover:bg-green-700">
             Share Tip
          </button>
        </div>
      </form>
    </div>

    <footer>
        <Footer></Footer>
    </footer>
        </div>
    );
};

export default ShareTips;