import { useState } from "react";
import { createIncident } from "../api/incidentApi";

const NewIncidentModal = ({ fetchIncidents }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    type: "",
    description: "",
    location: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createIncident(formData);
      console.log("Incident created:", response);
      setShowModal(false);
      fetchIncidents();
    } catch (error) {
      console.error("Error creating incident:", error);
    }
  };

  return (
    <>
      <button
        className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowModal(true)}
      >
        Create New Incident
      </button>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="type"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Type
                    </label>
                    <select
                      name="type"
                      id="type"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="cleaning">Cleaning</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="electrical">Electrical</option>
                      <option value="security">Security</option>
                      <option value="HVAC">HVAC</option>
                      <option value="landscaping">Landscaping</option>
                      <option value="elevator">Elevator</option>
                      <option value="pest_control">Pest Control</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="location"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Location
                    </label>
                    <select
                      name="location"
                      id="location"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Location</option>
                      <optgroup label="Residential Areas">
                        <option value="101">101</option>
                        <option value="102">102</option>
                        <option value="103">103</option>
                        <option value="104">104</option>
                        <option value="201">201</option>
                        <option value="202">202</option>
                        <option value="203">203</option>
                        <option value="204">204</option>
                        <option value="301">301</option>
                        <option value="302">302</option>
                        <option value="303">303</option>
                        <option value="304">304</option>
                        <option value="401">401</option>
                        <option value="402">402</option>
                        <option value="403">403</option>
                        <option value="404">404</option>
                        <option value="501">501</option>
                        <option value="502">502</option>
                        <option value="503">503</option>
                        <option value="504">504</option>
                      </optgroup>
                      <optgroup label="Common Areas">
                        <option value="common_area_1">Common Area 1</option>
                        <option value="common_area_2">Common Area 2</option>
                        <option value="common_area_3">Common Area 3</option>
                        <option value="common_area_4">Common Area 4</option>
                        <option value="common_area_5">Common Area 5</option>
                        <option value="reception_hall">Reception Hall</option>
                        <option value="parking_lot">Parking Lot</option>
                        <option value="rooftop">Rooftop</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="image"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Image
                    </label>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewIncidentModal;
