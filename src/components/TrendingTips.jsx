import React, { useEffect, useState } from 'react';

const TrendingTips = () => {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/tips/trending")
        .then((res) => res.json())
        .then((data) => setTips(data));
    }, []);
    return (
        <div>
            <div className=" my-20">
      <h2 className="text-5xl font-bold text-center mb-10"> Trending Gardening Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {tips.map((tip) => (
          <div
            key={tip._id}
            className="card bg-base-100 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <figure>
              <img
                src={tip.image}
                alt={tip.title}
                className="h-[500px] w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{tip.title}</h3>
              <p>
                <span className="font-semibold">Plant Type:</span>{" "}
                {tip.plantType}
              </p>
              <p className="text-gray-600 text-sm">{tip.description}</p>
              <p className="mt-2 text-xs text-gray-500">
                 {tip.user?.name} |  {tip.user?.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default TrendingTips;