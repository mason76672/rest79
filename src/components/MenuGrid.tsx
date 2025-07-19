import React from 'react';
import { ShoppingCart } from 'lucide-react';

const MenuGrid = () => {
  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Fresh mozzarella and basil on crispy crust",
      price: "$19.00",
      image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "Margherita Pizza",
      description: "Traditional Italian pizza with fresh ingredients",
      price: "$19/-",
      image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "Margherita Pizza",
      description: "Classic margherita with premium toppings",
      price: "$19/-",
      image: "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "Margherita Pizza",
      description: "Authentic Italian style pizza",
      price: "$19/-",
      image: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      name: "Margherita Pizza",
      description: "Fresh basil and mozzarella combination",
      price: "$19/-",
      image: "https://images.pexels.com/photos/845812/pexels-photo-845812.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      name: "Margherita Pizza",
      description: "Traditional recipe with modern twist",
      price: "$19/-",
      image: "https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section className="bg-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-700 rounded-lg overflow-hidden hover:bg-gray-600 transition-colors group"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-colors">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 font-bold text-lg">{item.price}</span>
                  <button className="bg-gray-600 hover:bg-gray-500 text-white p-2 rounded transition-colors">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuGrid;