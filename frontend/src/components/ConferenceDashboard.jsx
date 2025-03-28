import React, { useState } from "react";
import {
  PlusCircle,
  Calendar,
  Users,
  MoreVertical,
  Edit,
  Trash2,
  Search,
  Filter,
  ChevronDown,
} from "lucide-react";
import Navbar from "./Navbar";

// Mock conference data
const initialConferences = [
  {
    id: 1,
    name: "Global Tech Summit 2024",
    date: "September 15-17, 2024",
    location: "San Francisco, CA",
    attendees: 1200,
    status: "Upcoming",
  },
  {
    id: 2,
    name: "AI Innovation Conference",
    date: "November 5-7, 2024",
    location: "Boston, MA",
    attendees: 850,
    status: "Planning",
  },
  {
    id: 3,
    name: "Healthcare Technology Forum",
    date: "October 22-24, 2024",
    location: "Chicago, IL",
    attendees: 600,
    status: "Registration Open",
  },
];

const ConferenceDashboard = () => {
  const [conferences, setConferences] = useState(initialConferences);
  const [searchTerm, setSearchTerm] = useState("");

  // Search and filter logic
  const filteredConferences = conferences.filter(
    (conference) =>
      conference.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  // Status color mapping
  const getStatusColor = (status) => {
    switch (status) {
      case "Upcoming":
        return "bg-blue-100 text-blue-800";
      case "Planning":
        return "bg-yellow-100 text-yellow-800";
      case "Registration Open":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Conferences</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search conferences"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center space-x-2">
              <PlusCircle className="w-5 h-5" />
              <span>Create Conference</span>
            </button>
          </div>
        </div>

        {/* Conference List */}
        <div className="grid gap-6">
          {filteredConferences.map((conference) => (
            <div
              key={conference.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 p-6 flex justify-between items-center"
            >
              <div className="flex items-center space-x-6">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-1">
                    {conference.name}
                  </h2>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <span>{conference.date}</span>
                    <span className="h-1 w-1 bg-gray-400 rounded-full"></span>
                    <span>{conference.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <Users className="w-5 h-5 text-gray-500" />
                    <span>{conference.attendees} Attendees</span>
                    <span
                      className={`ml-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        conference.status
                      )}`}
                    >
                      {conference.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">
                  <Edit className="w-5 h-5" />
                </button>
                <button className="text-red-500 hover:bg-red-50 p-2 rounded-full">
                  <Trash2 className="w-5 h-5" />
                </button>
                <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Conferences State */}
        {filteredConferences.length === 0 && (
          <div className="text-center py-16">
            <div className="mb-6">
              <Calendar className="mx-auto w-16 h-16 text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              No Conferences Found
            </h2>
            <p className="text-gray-600 mb-6">
              Create your first conference and start managing events
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 flex items-center space-x-2 mx-auto">
              <PlusCircle className="w-5 h-5" />
              <span>Create Conference</span>
            </button>
          </div>
        )}
      </div>

      {/* Uncomment to show modal */}
      {/* <CreateConferenceModal /> */}
    </div>
  );
};

export default ConferenceDashboard;
