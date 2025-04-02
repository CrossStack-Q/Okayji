import React, { useState } from "react";
import SearchInput from "./comman/SearchInput";
import Card from "./comman/Card";
import EditProfile from "./comman/EditProfile";

const teamMembers = [
  {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    department: "Engineering",
    employee: "Engineer",
    email: "john.doe@example.com",
    phone: "1234567890",
    manager: "Alice Manager",
  },
  {
    id: 2,
    firstname: "Jane",
    lastname: "Smith",
    department: "Marketing",
    employee: "Marketing Lead",
    email: "jane.smith@example.com",
    phone: "9876543210",
    manager: "Bob Manager",
  },
  {
    id: 3,
    firstname: "Michael",
    lastname: "Brown",
    department: "HR",
    employee: "HR Specialist",
    email: "michael.brown@example.com",
    phone: "5551234567",
    manager: "Charlie Manager",
  },
];

function Team() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleEdit = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  return (
    <div className="p-8 flex flex-col gap-4 h-full">
      <div className="flex justify-between items-end p-4">
        <span className="text-3xl">Team</span>
        <span className="text-gray-500">{teamMembers.length} members</span>
      </div>

      <div className="flex justify-between">
        <SearchInput />
        <button
          className="px-4 py-2 font-semibold bg-zinc-800 text-white text-lg rounded-md"
          onClick={() => {
            setSelectedMember(null);
            setIsModalOpen(true);
          }}
        >
          <span>Add New</span>
        </button>
      </div>

      <div className="flex flex-col gap-2 overflow-scroll h-full hide-scroll scroll-smooth">
        {teamMembers.map((member) => (
          <Card key={member.id} member={member} onEdit={handleEdit} />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center backdrop-blur-xs"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-[40vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <EditProfile onClose={() => setIsModalOpen(false)} existingData={selectedMember} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Team;
