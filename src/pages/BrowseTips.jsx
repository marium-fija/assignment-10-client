import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaEye } from "react-icons/fa";
import Loading from './Loading';

const BrowseTips = () => {
    const [tips, setTips] = useState([]);
    const [loading, setLoading] = useState(true);
   

    useEffect(() => {
        fetch("https://assignment-10-server-seven-wine.vercel.app/tips")
            .then((res) => res.json())
            .then((data) => {
                setTips(data);
                setLoading(false);
            });
    }, []);
    return (
        <div>
        <header>
            <Navbar></Navbar>
        </header>
        {
            loading ? <Loading></Loading> : (
                
                <div className="overflow-x-auto my-20 px-5">
                <h2 className="text-5xl font-bold mb-10 text-center"> All Gardening Tips</h2>
                <p class="text-gray-700 text-base mb-10 text-center">
                    Here you’ll find useful gardening tips . Explore helpful gardening tips shared by our community.
                    Learn, grow, and make your garden greener every day!
                </p>
                <table className="table max-w-7xl mx-auto rounded-md shadow-2xl p-10">
                    {/* Headings */}
                    <thead className="bg-green-100">
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {tips
                        .filter(tip => tip.availability !== "Hidden")
                        .map((tip) => (
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
                                <td>


                                    <Link to={`/browse-tips/${tip._id}`} className="btn btn-sm rounded-full bg-green-600 text-white hover:bg-green-700" ><FaEye /> see more</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            )}
            

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default BrowseTips;