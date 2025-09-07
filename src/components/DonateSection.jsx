import React, { useState } from 'react';

const DonateSection = () => {
    const [donationType, setDonationType] = useState("one-time");
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [customAmount, setCustomAmount] = useState("");

  const amounts = [10, 25, 50, 100, 500, 1000];

  const totalAmount = customAmount? parseFloat(customAmount) || 0 : selectedAmount;

    return (
        <section className="py-16 bg-gray-50 text-center">
      {/* Heading */}
      <h2 className="text-5xl font-bold text-gray-800 mb-10">Support Our Mission</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Your donation helps us cultivate vibrant community gardens, educate
        future gardeners, and promote sustainable practices. Every gift makes a
        difference in growing greener spaces, healthier people, and stronger
        communities.
      </p>

      <div className=" bg-white rounded-xl shadow-lg p-8">
        {/* Donation Type */}
        <div className="mb-6">
          <p className="font-semibold text-2xl  text-gray-700 mb-2">Select Donation Type</p>
          <div className="flex justify-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="one-time"
                checked={donationType === "one-time"}
                onChange={(e) => setDonationType(e.target.value)}
              />
              One-Time
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="monthly"
                checked={donationType === "monthly"}
                onChange={(e) => setDonationType(e.target.value)}
              />
              Monthly
            </label>
          </div>
        </div>

        {/* Amount Selection */}
        <div className="mb-6">
          <p className="font-medium text-xl text-gray-700 mb-3">Amount</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
            {amounts.map((amt) => (
              <button
                key={amt}
                onClick={() => {
                  setSelectedAmount(amt);
                  setCustomAmount("");
                }}
                className={`py-3 w-60 lg:w-96  rounded-lg shadow-md transition-all ${
                  selectedAmount === amt
                    ? "bg-green-600 text-white"
                    : "bg-green-100 text-gray-800 hover:bg-green-200"
                }`}
              >
                ${amt}
              </button>
            ))}
          </div>
        </div>

        {/* Other Amount */}
        <div className="mb-6">
          <p className="font-medium text-xl text-gray-700 mb-5">Other Amount : </p>
          <input
            type="number"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount(0);
            }}
            placeholder="Enter custom amount"
            className="lg:w-3xl  border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        {/* Total Amount */}
        <div className="text-lg font-semibold text-gray-800">
          Total Amount : <span className="text-green-600">${totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </section>
    );
};

export default DonateSection;