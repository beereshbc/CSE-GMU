import React, { useState } from "react";
import { X } from "lucide-react";

const PictureModal = ({ card, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(card.images[0]);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Main Image */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-2/3">
            <img
              src={selectedImage}
              alt={card.title}
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          {/* Description */}
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {card.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(img)}
              className={`w-16 h-16 rounded-full object-cover cursor-pointer border-4 transition-all duration-300 ${
                selectedImage === img
                  ? "border-indigo-500 scale-110"
                  : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PictureModal;
