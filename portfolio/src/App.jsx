// App.jsx
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-blue-800 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Hello Tailwind CSS!
        </h1>
        <p className="text-lg text-gray-700">
          This text is styled with Tailwind utility classes.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;