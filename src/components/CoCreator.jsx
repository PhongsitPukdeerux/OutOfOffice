import { useState } from "react";

// Sample data for the team members
const teamMembers = [
  {
    id: 1,
    name: "Chate",
    position: "Admin",
    image: "/images/Chate.png",
    bio: "Her love for art began at seven, starting with doodles of snack wrappers just for fun. In high school, she taught herself Photoshop, further fueling her passion for design. For her, design isn’t just about making things look cool, it’s a powerful tool for problem-solving in an ever-evolving world.",
    social: {
      facebook: "https://www.facebook.com/CRHEATE",
      instagram: "#",
      mail: "chate@ooocollective.net",
    },
  },
  {
    id: 2,
    name: "Haru",
    position: "Product Manager",
    image: "/images/Haru.png",
    bio: "He finds that art is an instrument to influence society and help shape culture. From making artworks that speak of social awareness to designing graphics anchored to a brand’s relevance, he says every design has a story to tell and that connects us all.",
    social: {
      facebook: "#",
      instagram: "https://www.instagram.com/gl0omi",
      mail: "mailto:haru@ooocollective.net",
    },
  },
  {
    id: 3,
    name: "Imee",
    position: "Creative Designer",
    image: "/images/Imee.png",
    bio: "With her Advertising degree Imee once thought she'd write scripts and jingles until she found joy in solving visual problems instead. 8 years and counting, across agencies and in-house teams, she’s crafted visuals for some of the country’s familiar names.Her not-so-secret weapons? Coffee, good food, and an uncanny talent for untangling brand chaos into visual clarity. Her mission? Solve visual problems and build a space that's friendly to creative minds.",
    social: {
      facebook: "#",
      instagram: "https://www.instagram.com/objects__archive/",
      mail: "mailto:imee@ooocollective.net",
    },
  },
  {
    id: 4,
    name: "Jean ",
    position: "Graphic Designer",
    image: "/images/Jane.png",
    bio: "A Graphic Designer with years of experience conceptualizing and implementing a wide variety of marketing materials, promotional campaigns, advertising, and sales collateral for medium to large corporations.",
    social: {
      facebook: "#",
      instagram: "#",
      mail: "mailto:jean@ooocollective.net",
    },
  },
];

// Main component of the application
const CoCreator = () => {
  // State to manage which member's detailed view is shown
  const [selectedMember, setSelectedMember] = useState(null);

  // Component for a single team member card
  const MemberCard = ({ member }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="relative flex flex-col items-center bg-pink rounded-2xl p-6 transform transition-transform duration-300 hover:scale-105 cursor-pointer overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setSelectedMember(member)}
      >
        {/* Person's image */}
        <img
          src={member.image}
          alt={member.name}
          className="w-48 h-48 bg-yellow rounded-3xl object-cover shadow-md"
        />
        {/* Name and position */}
        <div className="mt-6 text-center">
          <h2 className="text-xl font-bold text-blue">
            <span className="first-char">{member.name.charAt(0)}</span>
            {member.name.substring(1)}
          </h2>
          <p className="text-font-clash-display text-sm mt-1 text-blue">
            {member.position}
          </p>
        </div>
        {/* Pop-up on hover */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center p-4 bg-yellow bg-opacity-90 rounded-2xl transition-opacity duration-300">
            <p className="text-sm font-semibold text-white text-center">
              Click to see more about {member.name}!
            </p>
          </div>
        )}
      </div>
    );
  };

  // Component for the detailed member view modal
  const MemberModal = ({ member, onClose }) => {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-70 backdrop-blur-md p-4"
        onClick={onClose}
      >
        <div
          className="relative text-gray-800 bg-pink rounded-3xl shadow-2xl p-8 max-w-5xl w-full mx-auto transform transition-all duration-300 scale-100"
          onClick={(e) => e.stopPropagation()} // Prevents closing the modal when clicking inside
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left column for text content */}
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue leading-tight">
                  <span className="first-char">{member.name.charAt(0)}</span>
                  {member.name.substring(1)}
                </h1>
                <h3 className="text-xl md:text-2xl font-clash-display text-blue">
                  {member.position}
                </h3>
              </div>
              <p className="text-base font-helvetica text-gray-700 leading-relaxed">
                {member.bio}
              </p>
              {/* Social icons */}
              <div className="flex items-center space-x-4 mt-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue hover:text-white hover:bg-blue transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-pink-600 hover:text-white hover:bg-pink-600 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 "
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            {/* Right column for the image */}
            <div className="flex justify-center md:justify-end">
              <img
                src={member.image}
                alt={member.name}
                className="w-full bg-yellow max-w-sm rounded-2xl shadow-lg border-4 border-gray-100"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative items-center">
      <div className="min-h-screen bg-pink border-50 border-white text-gray-900 font-sans flex flex-col items-center p-8">
        {/* Main header */}
        <header className="text-left w-full max-w-4xl mb-12">
          <h1 className="text-5xl md:text-6xl text-blue  leading-tight">
            <span className="first-char">C</span>o - Creator
          </h1>
        </header>

        {/* Grid of team member cards */}
        <main className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </main>

        {/* Conditionally render the modal */}
        {selectedMember && (
          <MemberModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </div>
    </div>
  );
};

export default CoCreator;
