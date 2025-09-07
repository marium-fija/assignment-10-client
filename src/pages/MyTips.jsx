import React, { useContext, useEffect, useState } from 'react';
import Loading from './Loading';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MdDelete } from "react-icons/md";
import { MdTipsAndUpdates } from "react-icons/md";

const MyTips = () => {
    const { user } = useContext(AuthContext);
    const [tips, setTips] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/tips?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setTips(data));
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this tip?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    })
        .then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/tips/${id}`, {
                    method: "DELETE", 
                })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        Swal.fire("Deleted!", "Your tip has been deleted.", "success");
                        setTips(tips.filter((tip) => tip._id !== id));
                    }
                });
            }
        });
    };
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
          <div className="overflow-x-auto my-20 px-5">
                <h2 className="text-5xl font-bold mb-10 text-center"> My Gardening Tips</h2>
                <table className="table max-w-7xl mx-auto rounded-md shadow-2xl p-10">
                    {/* Headings */}
                    <thead className="bg-gray-300">
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Availability</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {tips.map((tip) => (
                            <tr key={tip._id} className="hover:bg-green-50">
                                <td>
                                    <img
                                        src={tip.image}
                                        alt={tip.title}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                </td>
                                <td className="font-medium">{tip.title}</td>
                                <td>{tip.category}</td>
                                <td className={
                    tip.availability === "Public" ? "text-green-600" : "text-red-600"
                  } >
                                 {tip.availability}    
                                </td>
                                <td className="flex gap-2">
                  <button
                    onClick={() => navigate(`/update-tip/${tip._id}`)}
                    className="btn btn-sm rounded-full  bg-cyan-800 text-white"
                  >
                    <MdTipsAndUpdates /> Update
                  </button>
                  <button
                    onClick={() => handleDelete(tip._id)}
                    className="btn btn-sm rounded-full bg-rose-700 text-white"
                  >
                     <MdDelete /> Delete
                  </button>
                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MyTips;