"use client";
import { useState } from "react";

const canteens = [
  "Azad Bhawan", "Cautley Bhawan", "Ganga Bhawan", "Govind Bhawan",
  "Jawahar Bhawan", "Rajendra Bhawan", "Radhakrishnan Bhawan", "Rajiv Bhawan",
  "Ravindra Bhawan", "Malviya Bhawan", "Himalaya Bhawan", "Indira Bhawan",
  "Kasturba Bhawan", "Sarojini Bhawan", "M.R.Chopra", "Azad Wing",
  "D.S.Barrack", "A.N.Khosla House", "K.I.H.", "One Co-ed Hostel", "Vigyan Bhawan"
];

const menuCategories = [
  {
    category: "Paratha",
    items: [
      { name: "Plain Paratha with Chutney/Sauce", price: 10 },
      { name: "Aloo Paratha with Chutney/Sauce", price: 15 },
      { name: "Piyaj/Mix Aloo-Pyaj Paratha", price: 15 },
      { name: "Gobhi/Mix Gobhi-Pyaj Paratha", price: 15 },
      { name: "Mooli Paratha with Chutney/Sauce", price: 15 },
      { name: "Mixed Veg Paratha with Chutney/Sauce", price: 15 },
      { name: "Paneer Paratha with Chutney/Sauce", price: 25 },
      { name: "Paneer Pyaj Paratha with Chutney/Sauce", price: 25 },
      { name: "Plain Paratha with Achar & Chole/Rajma", price: 40 },
    ],
  },
  {
    category: "Fries & Snacks",
    items: [
      { name: "Samosa with Chutney/Sauce", price: 7 },
      { name: "Bonda with Chutney/Sauce", price: 7 },
      { name: "Mix Pakoda with Chutney/Sauce", price: 10 },
      { name: "Paneer Pakoda with Chutney/Sauce", price: 30 },
      { name: "Bread Pakoda with Chutney/Sauce", price: 40 },
      { name: "Hara Bhara Kabab", price: 10 },
      { name: "Veg Captain Kabab", price: 50 },
      { name: "Vegetable Golden Queen", price: 30 },
      { name: "Gobhi Crispy", price: 40 },
      { name: "Potato Chilly", price: 30 },
      { name: "French Fries", price: 40 },
      { name: "Potato Roll", price: 25 },
      { name: "Spring Roll", price: 20 },
      { name: "Veg Patties", price: 15 },
      { name: "Masala Patties (Veg)", price: 20 },
      { name: "Paneer Patties", price: 25 },
      { name: "Poha (Full Plate)", price: 30 },
      { name: "Poha (Half Plate)", price: 20 },
      { name: "Veg Momos", price: 30 },
      { name: "Momos 65/Momos Golden Fry", price: 30 },
    ],
  },
  {
    category: "Sandwiches & Burgers",
    items: [
      { name: "Aloo Sandwich (Grilled)", price: 30 },
      { name: "Vegetable Sandwich (Grilled)", price: 35 },
      { name: "Cheese Grilled Sandwich", price: 40 },
      { name: "Paneer Sandwich with Chutney/Sauce", price: 40 },
      { name: "Mixed Sandwich with Paneer", price: 40 },
      { name: "Veg Burger with Chutney/Sauce", price: 25 },
      { name: "Cheese Burger with Chutney/Sauce", price: 35 },
      { name: "Burger (Mac D Tikki)", price: 30 },
      { name: "Burger (Mac D Tikki + Cheese) Veg", price: 40 },
      { name: "Bun Samosa with Chutney/Sauce", price: 15 },
      { name: "Bun Bonda with Chutney/Sauce", price: 15 },
      { name: "Veg Vada Pav", price: 15 },
      { name: "Paneer Vada Pav", price: 25 },
      { name: "Pao Bhaji", price: 35 },
    ],
  },
  {
    category: "South Indian",
    items: [
      { name: "Upma (Full Plate)", price: 30 },
      { name: "Upma (Half Plate)", price: 20 },
      { name: "Uttapam with Sambhar & Coconut Chutney", price: 40 },
      { name: "Idli with Sambhar & Coconut Chutney", price: 30 },
      { name: "Chinese Idli", price: 30 },
      { name: "Masala Dosa with Sambhar & Coconut Chutney", price: 40 },
      { name: "Plain Dosa with Sambhar & Coconut Chutney", price: 25 },
      { name: "Medu Vada with Sambhar & Coconut Chutney", price: 30 },
    ],
  },
  {
    category: "Continental / Chinese",
    items: [
      { name: "Fry Noodles (Full Plate)", price: 30 },
      { name: "Fry Noodles (Half Plate)", price: 20 },
      { name: "Chowmin (Full Plate)", price: 30 },
      { name: "Chowmin (Half Plate)", price: 20 },
      { name: "Macroni (Full Plate)", price: 25 },
      { name: "Macroni (Half Plate)", price: 20 },
      { name: "Cheese Pasta (Full Plate)", price: 40 },
      { name: "Cheese Pasta (Half Plate)", price: 30 },
      { name: "Veg Pizza", price: 70 },
      { name: "Hot Dog", price: 35 },
      { name: "Fried Rice & Manchuriyan (4 piece)", price: 50 },
      { name: "Noodles & Manchuriyan (4 piece)", price: 40 },
    ],
  },
  {
    category: "Meals",
    items: [
      { name: "Plain Chapati", price: 7 },
      { name: "Butter Chapati", price: 8 },
      { name: "Aloo Jeera (Full Plate)", price: 40 },
      { name: "Aloo Jeera (Half Plate)", price: 25 },
      { name: "Shahi Paneer (Full Plate)", price: 60 },
      { name: "Shahi Paneer (Half Plate)", price: 35 },
      { name: "Paneer Butter Masala (Full Plate)", price: 60 },
      { name: "Paneer Butter Masala (Half Plate)", price: 35 },
      { name: "Paneer Bhurjee (Full Plate)", price: 60 },
      { name: "Paneer Bhurjee (Half Plate)", price: 35 },
      { name: "Manchuriyan (Veg)", price: 50 },
      { name: "Rice with Chole/Rajma/Kadhi Pakoda", price: 40 },
      { name: "Chhola Bhatura", price: 40 },
      { name: "Chhola Kulcha", price: 30 },
      { name: "Fried Rice (Full Plate)", price: 30 },
    ],
  },
  {
    category: "Beverages",
    items: [
      { name: "Tea Special", price: 10 },
      { name: "Tea (Dhoodh, Patti)", price: 10 },
      { name: "Premium Cardamom Tea", price: 15 },
      { name: "Hot Lemon Tea", price: 10 },
      { name: "Ice Tea", price: 15 },
      { name: "Sweet Milk (Full Cream)", price: 20 },
      { name: "Badam Milk (Hot)", price: 25 },
      { name: "Hot Coffee (Regular)", price: 20 },
      { name: "Cold Coffee", price: 25 },
      { name: "Banana/Mango Shake", price: 25 },
      { name: "Milk Shake", price: 25 },
      { name: "Chocolate Shake", price: 30 },
      { name: "Oreo Shake", price: 25 },
      { name: "Lassi", price: 25 },
      { name: "NimbuPani", price: 10 },
    ],
  },
  {
    category: "Soups & Pastries",
    items: [
      { name: "Tomato Soup", price: 30 },
      { name: "Sweet Corn Soup", price: 30 },
      { name: "Hot & Sour Soup", price: 30 },
      { name: "Pineapple Pastry", price: 25 },
      { name: "Pineapple Pastry (Egg Less)", price: 30 },
      { name: "Cream Roll", price: 10 },
      { name: "Swiss Roll", price: 10 },
    ],
  },
];

export default function CafeteriaWidget() {
  const [selectedCanteen, setSelectedCanteen] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Paratha");
  const [search, setSearch] = useState("");

  const currentItems = menuCategories
    .find((c) => c.category === selectedCategory)
    ?.items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
    <div className="bg-white rounded-xl border border-pink-200 p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🍽️</span>
        <div>
          <h2 className="text-gray-900 font-semibold">Canteen Menu</h2>
          <p className="text-xs text-gray-500">IIT Roorkee · All Veg · Official Rates</p>
        </div>
      </div>

      {/* Canteen selector */}
      <select
        className="w-full bg-white text-gray-900 text-sm rounded-lg px-3 py-2 border border-pink-200 outline-none focus:border-pink-400 mb-3"
        value={selectedCanteen}
        onChange={(e) => setSelectedCanteen(e.target.value)}
      >
        <option value="">Select Canteen / Bhawan</option>
        {canteens.map((c) => (
          <option key={c} value={c}>{c} Canteen</option>
        ))}
      </select>

      {!selectedCanteen && (
        <p className="text-gray-400 text-sm text-center py-6">Select a canteen to view menu</p>
      )}

      {selectedCanteen && (
        <>
          {/* Search */}
          <input
            className="w-full bg-pink-50 text-gray-900 text-sm rounded-lg px-3 py-2 border border-pink-200 outline-none mb-3 placeholder:text-gray-400"
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Category tabs */}
          <div className="flex gap-1.5 flex-wrap mb-3">
            {menuCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => { setSelectedCategory(cat.category); setSearch(""); }}
                className={`px-2.5 py-1 rounded-full text-xs transition-all ${
                  selectedCategory === cat.category
                    ? "bg-amber-500 text-white"
                    : "bg-pink-50 text-gray-500 hover:text-gray-900 border border-pink-200"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Menu items */}
          <div className="space-y-1.5 max-h-64 overflow-y-auto">
            {currentItems.map((item, i) => (
              <div key={i} className="flex items-center justify-between bg-pink-50 rounded-lg px-3 py-2">
                <p className="text-sm text-gray-900">{item.name}</p>
                <span className="text-amber-600 text-sm font-medium flex-shrink-0 ml-2">₹{item.price}/-</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}