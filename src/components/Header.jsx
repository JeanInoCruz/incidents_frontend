import { useEffect, useState } from "react";
import { Options } from "./Options";
import arrowDown from "../assets/arrowDown.svg";
import { getIncidents } from "../api/incidentApi";
import image from "../assets/devchallenges.png"

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [incidents, setIncidents] = useState([]);

  
  const fetchIncidents = async () => {
    try {
      const response = await getIncidents();
      setIncidents(response);
      console.log(response)
      
    } catch (error) {
      console.error('Error fetching incidents:', error);
    }
  };
  useEffect(() => {
    fetchIncidents();
  }, []);

  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="items-center font-bold flex justify-between drop-shadow-2xl">
      <div className=" flex flex-col justify-center content-center gap-3 text-[14px] text-sky-600">
        <h1 className="text-2xl">INCIDENTS MANAGEMENT</h1>
        <h2 className="text-gray-400">Home address: 123 Main Street, London, SW1A 1AA</h2>
      </div>
      <div className="flex items-center content-center gap-4 text-[12px]">
        <img
          src={image}
          className="w-8 h-8 rounded-lg"
          alt="profile picture"
        />

        <h2>Options</h2>
        <div className={`relative`}>
          <button
            onClick={handleIsActive}
            className="h-[24px] w-[24px] flex justify-center items-center content-center"
          >
            <img src={arrowDown} alt="Arrow" className="hover:cursor-pointer" />{" "}
          </button>
          <Options isActive={isActive} />
        </div>
      </div>
    </header>
  );
};
