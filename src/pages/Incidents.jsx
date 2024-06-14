import { useState, useEffect } from "react";
import IncidentList from "../components/IncidentList";
import { getIncidents } from "../api/incidentApi";
import { Header } from "../components/Header";
import NewIncidentModal from "../components/NewIncidentModal";

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
    <div className="p-5 flex flex-col">
      <Header />
      <div className="max-w-[80%] self-center flex flex-col justify-center items-center">
        <NewIncidentModal fetchIncidents={fetchIncidents} />
        <IncidentList incidents={incidents} fetchIncidents={fetchIncidents} />
      </div>
    </div>
  );
};

export default Incidents;
