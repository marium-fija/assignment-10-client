import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import Navbar from './Navbar';
import Footer from './Footer';


const UpdateTip = () => {
    const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [tip, setTip] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://assignment-10-server-seven-wine.vercel.app/tips/${id}`)
    .then((res) => res.json())
    .then((data) => setTip(data));
  }, [id]);

const handleUpdate = (e) => {
    e.preventDefault();
     const form = e.target;

     const updatedTip = {
      title: form.title.value,
      plantType: form.plantType.value,
      difficulty: form.difficulty.value,
      description: form.description.value,
      image: form.image.value,
      category: form.category.value,
      availability: form.availability.value,
      user: {
        name: user.displayName,
        email: user.email,
      },
};

fetch(`https://assignment-10-server-seven-wine.vercel.app/tips/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTip),
})
.then((res) => res.json())
.then((data) => {
    if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your tip has been updated.", "success");
          navigate("/my-tips");
        }
});
}

    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="max-w-3xl mx-auto mt-10 p-5">
      <h2 className="text-5xl font-bold text-center my-10 text-gray-900"> Update Tip</h2>

      <form onSubmit={handleUpdate} className="space-y-4 p-6 bg-white shadow-lg rounded-xl ">

        <label className="font-medium">Title</label>
        <input defaultValue={tip.title} name="title" className="input input-bordered w-full" />

        <label className="font-medium">Plant Type / Topic</label>
        <input defaultValue={tip.plantType} name="plantType" className="input input-bordered w-full" />
        
        {/* Difficulty Level */}
        <label className="font-medium">Difficulty Level</label>
        <select name="difficulty" defaultValue={tip.difficulty} className="select select-bordered w-full">
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        {/* Description */}
        <label className="font-medium">Description</label>
        <textarea defaultValue={tip.description} name="description" className="textarea textarea-bordered w-full"></textarea>

        {/* img */}
        <label className="font-medium">Image URL</label>
        <input defaultValue={tip.image} name="image" className="input input-bordered w-full" />

        {/* Category */}
        <label className="font-medium">Category</label>
        <select name="category" defaultValue={tip.category} className="select select-bordered w-full">
          <option>Composting</option>
          <option>Plant Care</option>
          <option>Vertical Gardening</option>
          <option>Hydroponics</option>
        </select>

        {/* Availability */}
        <label className="font-medium">Availability</label>
        <select name="availability" defaultValue={tip.availability} className="select select-bordered w-full">
          <option>Public</option>
          <option>Hidden</option>
        </select>

        {/* users name */}
        <label className="font-medium">User Name</label>
        <input value={user.displayName} readOnly className="input input-bordered w-full bg-gray-100" />

        {/* users email */}
        <label className="font-medium">User Email</label>
        <input value={user.email} readOnly className="input input-bordered w-full bg-gray-100" />

        <div className='w-full text-center'>
            <button type="submit" className="btn bg-green-600 btn-wide rounded-full text-white">Update Tip</button>
        </div>
      </form>
    </div> 

    <footer>
        <Footer></Footer>
    </footer>
        </div>
    );
};

export default UpdateTip;