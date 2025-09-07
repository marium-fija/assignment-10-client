import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loading from './Loading';

const ExploreGardeners = () => {
  const [gardeners, setGardeners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/gardeners")
      .then(res => res.json())
      .then(data => {
        setGardeners(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      {
        loading ? <Loading></Loading> : (
          <div className='max-w-7xl mx-auto'>
            <h1 className='text-6xl font-bold text-gray-800 my-20 text-center'>Our All Gardeners</h1>
            <p className='text-gray-700 text-center mb-10 '>Every garden has a story — meet the gardeners who nurture them. Learn from their experience, celebrate their successes, and get ideas to grow something beautiful at home</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {gardeners.map(gardener => (
                <div
                  key={gardener._id}
                  className="card bg-base-100 drop-shadow-2xl  hover:shadow-2xl transform hover:scale-105 transition duration-300"
                >
                  <figure>
                    <img src={gardener.image} alt={gardener.name} className="h-[500px] w-full object-cover" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{gardener.name}</h2>
                    <p><span className="font-semibold">Age : </span> {gardener.age}</p>
                    <p><span className="font-semibold">Gender : </span> {gardener.gender}</p>
                    <p><span className="font-semibold">Status : </span> <span className={gardener.status === "Active"
                      ? "text-green-600 font-bold"
                      : "text-red-600 font-bold"}> {gardener.status}</span></p>
                    <p><span className="font-semibold">Experience : </span> {gardener.experiences}</p>
                    <p><span className="font-semibold">Tips Shared : </span> {gardener.totalSharedTips}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      <Footer></Footer>
    </div>
  );
};

export default ExploreGardeners;