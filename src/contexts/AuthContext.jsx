import { createContext, useContext } from "react";
import { useQuery, useMutation, QueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { getIncidents,  updateIncident as updateIncidentApi } from "../api/incidentApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const queryClient = new QueryClient();

  const { data: incidents } = useQuery("incidents", getIncidents);

  const profileMutation = useMutation(updateIncidentApi, {
    onSuccess: () => {
      queryClient.invalidateQueries("incidents");
    },
  });

  const register = (data) => {
    localStorage.setItem("token", data.token);
    navigate("/login");
  };

  const login = (data) => {
    localStorage.setItem("token", data.token);
    navigate("/incidents");
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ incidents, login, logout, profileMutation, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
