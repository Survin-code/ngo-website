import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
const Popup = () => {

  
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-80">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-2">Join As Volunteer!</h2>
            <p className="text-gray-700"></p>
          </div>
        </div>
      )}
    </>
  );
};
export default Popup;