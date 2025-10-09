import { useState } from "react";

const PictureCard = ({ imageUrl, title, description = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
          {title}
        </h3>

        {/* Image Container */}
        <div className="relative h-48 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
          {!isHovered ? (
            <div className="text-gray-500 text-center p-4">
              <div className="w-16 h-16 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-sm">Hover to view image</p>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center p-2">
              {/* Popup Image */}
              <div className="relative bg-white rounded-lg shadow-2xl border-4 border-blue-500 p-2 z-20">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-40 object-cover rounded-md"
                />

                {/* Decorative corner accents */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>

              {/* Background overlay effect */}
              <div className="absolute inset-0 bg-blue-50 opacity-30 rounded-lg"></div>
            </div>
          )}
        </div>

        {description && (
          <p className="text-gray-600 text-center mt-4 text-sm">
            {description}
          </p>
        )}
      </div>

      {/* Hover border effect */}
      <div
        className={`absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-300 ${
          isHovered ? "border-blue-400" : ""
        }`}
      ></div>
    </div>
  );
};

export default PictureCard;
