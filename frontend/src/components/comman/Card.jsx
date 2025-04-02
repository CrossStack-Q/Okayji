import React from "react";

function Card({ member, onEdit }) {
  return (
    <div className="grid grid-cols-4 items-center p-4 border-b border-gray-300 gap-4">
      {/* Profile Section */}
      <div className="col-span-1 flex gap-4 items-center">
        <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
        <div className="flex flex-col">
          <span className="font-semibold">{member.firstname} {member.lastname}</span>
          <span className="text-sm text-gray-500">{member.department}</span>
        </div>
      </div>

      {/* Centered "Other" Text */}
      <div className="text-center col-span-1">Other</div>

      <div className="text-center col-span-1">Other</div>

      {/* Action Buttons */}
      <div className="flex justify-end col-span-1 gap-4">
        <button
          className="bg-zinc-600 text-white px-3 py-1 text-lg rounded-md font-semibold"
          onClick={() => onEdit(member)}
        >
          Edit
        </button>
        <button className="bg-zinc-600 px-3 py-1 text-white text-lg rounded-md font-semibold">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
