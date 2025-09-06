import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Loading from './Loading';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TipDetails = () => {
    const {id} = useParams();
    const [tip, setTip] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/tips/${id}`)
        .then((res) => res.json())
        .then((data) => setTip(data));
    }, [id]);

    if (!tip)
         return <Loading></Loading>
    return (
        <div >
            <header>
                <Navbar></Navbar>
            </header>
        <div className='max-w-7xl mx-auto my-20 px-5'> 
            <h2 className="text-5xl font-bold mb-10 text-center">Tip Detail Of <span className='text-pink-800'>{tip.plantType}</span></h2>     
  <div className="card lg:card-side bg-base-100 shadow-lg mb-20">
  <figure>
    <img
      src={tip.image}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="text-3xl font-bold mt-5">{tip.title}</h2>
      <p className="mt-2 text-gray-600"> Category : {tip.category}</p>
      <p className="mt-2"> Plant Type : {tip.plantType}</p>
      <p className="mt-2"> Difficulty : {tip.difficulty}</p>
      <p className="mt-5 text-gray-800">{tip.description}</p>
      <p className="mt-5 text-sm text-gray-500">
        Shared by : {tip.user?.name} ({tip.user?.email})
      </p>
      <Link to="/browse-tips" className='btn bg-teal-800 text-white rounded-full my-8'>Back to Browse tips</Link>
    </div>
  </div>
</div>

<footer>
    <Footer></Footer>
</footer>
</div>


        
    );
};

export default TipDetails;