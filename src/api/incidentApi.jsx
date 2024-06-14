import axios from "axios";

const baseURL = "http://localhost:3000/api";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const registerUser = (userData) =>
  instance.post("/auth/register", userData).then((response) => response.data);
export const loginUser = (userData) =>
  instance.post("/auth/login", userData).then((response) => response.data);

export const createIncident = (incidentData) => {
  const formData = new FormData();
  formData.append("subject", incidentData.subject);
  formData.append("type", incidentData.type);
  formData.append("description", incidentData.description);
  formData.append("location", incidentData.location);
  formData.append("image", incidentData.image);

  return instance
    .post("/incidents/incidents", formData)
    .then((response) => response.data);
};

export const getIncidents = () =>
  instance.get("/incidents/incidents").then((response) => response.data);

export const updateIncident = (incidentId, incidentData) => {
  const formData = new FormData();
  formData.append("subject", incidentData.subject);
  formData.append("type", incidentData.type);
  formData.append("description", incidentData.description);
  formData.append("location", incidentData.location);
  formData.append("image", incidentData.image);

  return instance
    .put(`/incidents/${incidentId}`, formData)
    .then((response) => response.data);
};

export const deleteIncident = (incidentId) =>
  instance.delete(`/incidents/${incidentId}`).then((response) => response.data);

export const createComment = (incidentId, commentData) =>
  instance
    .post(`/incidents/${incidentId}/comments`, commentData)
    .then((response) => response.data);

export const getComments = (incidentId) =>
  instance
    .get(`/incidents/${incidentId}/comments`)
    .then((response) => response.data);
