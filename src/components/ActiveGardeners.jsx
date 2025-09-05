import React, { useEffect, useState } from 'react';

const ActiveGardeners = () => {
    const [gardeners, setGardeners] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/gardeners")
            .then(res => res.json())
            .then(data => {
                const activeOnly = data.filter(gardener => gardener.status === "Active");
                setGardeners(activeOnly);
            });
    }, []);

    return (
        <div className='max-w-7xl mx-auto mt-20'>
            <h1 className='text-6xl font-bold mb-10 text-gray-800'>Featured Gardeners : </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {gardeners.map(gardener => (
                    <div
                        key={gardener._id}
                        className="card w-80 bg-base-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300"
                    >
                        <figure>
                            <img src={gardener.image} alt={gardener.name} className="h-56 w-full object-cover rounded-t-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{gardener.name}</h2>
                            <p><span className="font-semibold">Status : </span>
                                <span>
                                     {gardener.status}
                                </span>
                            </p>
                            <p >
                                <span className="font-semibold">Experiences :</span>
                                <span className="text-sm text-gray-600">    {gardener.experiences}</span> </p> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActiveGardeners;