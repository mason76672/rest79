import React from 'react';

const PromotionalOffer = () => {
  return (
    <section className="bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-gray-800 text-2xl font-bold mb-2">
                Great food and lots of discounted prices
              </h3>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  <span className="text-2xl">⭐</span>
                  <span className="text-2xl">⭐</span>
                  <span className="text-2xl">⭐</span>
                  <span className="text-2xl">⭐</span>
                  <span className="text-2xl">⭐</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Rating based on the offer
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <div className="relative inline-block">
                <div className="text-6xl font-bold text-orange-500 mb-2">50%</div>
                <div className="text-gray-800 font-semibold">offer on New</div>
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Special offer dish"
                  className="w-32 h-32 object-cover rounded-full border-4 border-orange-500 mt-4 mx-auto md:mx-0"
                />
              </div>
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-orange-400 rounded-full opacity-20"></div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-orange-400 rounded-full opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalOffer;