import { useState, useEffect } from "react";
import IncidentList from "../components/IncidentList";
import { getIncidents } from "../api/incidentApi";
import { Header } from "../components/Header";

const Incidents = () => {
  const [incidents, setIncidents] = useState([]);

  const fetchIncidents = async () => {
    try {
      const response = await getIncidents();
      setIncidents(response);
      console.log(response);
    } catch (error) {
      console.error("Error fetching incidents:", error);
    }
  };

  useEffect(() => {
    fetchIncidents();
  }, []);

  return (
    <div className="p-5">
      <Header />
      <div className="max-w-[80%] self-center flex justify-center items-center">
        <IncidentList incidents={incidents} fetchIncidents={fetchIncidents} />
      </div>
    </div>
  );
};

export default Incidents;
