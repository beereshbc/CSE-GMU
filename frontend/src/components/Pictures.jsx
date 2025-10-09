import React, { useState } from "react";
import PictureCard from "./PictureCard";
import PictureModal from "./PictureModal";

const Pictures = () => {
  // Sample data — you’ll replace image URLs later
  const pictureCardsData = [
    {
      id: 1,
      title: "Lecture",
      description: "Professor delivering a lecture",
      images: [
        "https://picsum.photos/400?1",
        "https://picsum.photos/400?2",
        "https://picsum.photos/400?3",
        "https://picsum.photos/400?4",
        "https://picsum.photos/400?5",
        "https://picsum.photos/400?6",
      ],
    },
    {
      id: 2,
      title: "Laboratory",
      description: "Students performing a test",
      images: [
        "https://picsum.photos/401?1",
        "https://picsum.photos/401?2",
        "https://picsum.photos/401?3",
        "https://picsum.photos/401?4",
        "https://picsum.photos/401?5",
        "https://picsum.photos/401?6",
      ],
    },
    {
      id: 3,
      title: "Hackathon / Ignitron",
      description: "Coding competition event",
      images: [
        "https://picsum.photos/402?1",
        "https://picsum.photos/402?2",
        "https://picsum.photos/402?3",
        "https://picsum.photos/402?4",
        "https://picsum.photos/402?5",
        "https://picsum.photos/402?6",
      ],
    },
    {
      id: 4,
      title: "Project Based Learning",
      description: "Student group collaboration",
      images: [
        "https://picsum.photos/403?1",
        "https://picsum.photos/403?2",
        "https://picsum.photos/403?3",
        "https://picsum.photos/403?4",
        "https://picsum.photos/403?5",
        "https://picsum.photos/403?6",
      ],
    },
  ];

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Campus Life & Activities
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore various academic and extracurricular moments that define our
            students’ journey.
          </p>
        </div>

        {/* Picture Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pictureCardsData.map((card) => (
            <PictureCard
              key={card.id}
              title={card.title}
              description={card.description}
              imageUrl={card.images[0]}
              onClick={() => setSelectedCard(card)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <PictureModal
          card={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </div>
  );
};

export default Pictures;
