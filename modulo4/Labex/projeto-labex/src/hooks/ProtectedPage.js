import { useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom"

export const useProtectedPage = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (!token) {
        navigate("/");
      }
    }, [navigate]);
  };