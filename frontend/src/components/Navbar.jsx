import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-10 h-10"
          >
            <defs>
              <linearGradient
                id="logoGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#6366f1", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              d="M24 4L4 16v16l20 12 20-12V16L24 4zm0 8a4 4 0 110 8 4 4 0 010-8zm10 20l-10 6-10-6v-8l10 6 10-6v8z"
              fill="url(#logoGradient)"
            />
          </svg>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
            ConferencePro
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
