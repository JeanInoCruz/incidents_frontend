import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteIncident } from '../api/incidentApi';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { FilterMatchMode } from 'primereact/api';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';  
import 'primereact/resources/themes/tailwind-light/theme.css';          
import 'primeicons/primeicons.css';                        
import EditIncidentModal from './EditIncidentModal';

const IncidentList = ({ incidents, fetchIncidents }) => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    subject: { value: null, matchMode: FilterMatchMode.CONTAINS },
    description: { value: null, matchMode: FilterMatchMode.CONTAINS },
    location: { value: null, matchMode: FilterMatchMode.CONTAINS },
    status: { value: null, matchMode: FilterMatchMode.CONTAINS },
    userId: { value: null, matchMode: FilterMatchMode.CONTAINS }
  });

  const [selectedIncident, setSelectedIncident] = useState(null);

  const handleDelete = async (id) => {
    try {
      await deleteIncident(id);
      fetchIncidents();
    } catch (error) {
      console.error('Error deleting incident:', error);
    }
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => setSelectedIncident(rowData)} />
        <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => handleDelete(rowData.id)} />
      </React.Fragment>
    );
  };

  const imageBodyTemplate = (rowData) => {
    return (
      rowData.image && <img src={`http://localhost:3000/uploads/${rowData.image}`} alt="Incident" style={{ width: '100px' }} />
    );
  };

  return (
    <div>
      <DataTable value={incidents} paginator rows={10} filters={filters} onFilter={(e) => setFilters(e.filters)} filterDisplay="row" globalFilterFields={['subject', 'description', 'location', 'status', 'userId']}>
        <Column field="subject" header="Subject" filter filterPlaceholder="Search by subject" />
        <Column field="description" header="Description" filter filterPlaceholder="Search by description" />
        <Column field="location" header="Location"  filter filterPlaceholder="Search by location" />
        <Column field="status" header="Status" filter filterPlaceholder="Search by status" />
        <Column field="userId" header="User ID" filter filterPlaceholder="Search by user" />
        <Column body={imageBodyTemplate} header="Image" />
        <Column body={actionBodyTemplate} header="Actions" />
      </DataTable>
      
      {selectedIncident && (
        <EditIncidentModal 
          incident={selectedIncident} 
          fetchIncidents={fetchIncidents} 
          closeModal={() => setSelectedIncident(null)} 
        />
      )}
    </div>
  );
};

export default IncidentList;
