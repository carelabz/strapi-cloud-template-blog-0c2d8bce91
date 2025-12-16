// lib/RegionContext.js
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import client from "./appollo-client";
import { GET_REGIONS } from "./api-Collection";

const RegionContext = createContext();

export const RegionProvider = ({ children }) => {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRegions = async () => {
    try {
      const res = await client.query({ query: GET_REGIONS });
      setRegions(res.data.regions || []);
    } catch (err) {
      console.error("Failed to fetch regions:", err);
      setRegions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegions();
  }, []);

  return (
    <RegionContext.Provider value={{ regions, loading }}>
      {children}
    </RegionContext.Provider>
  );
};

// Hook to use in components
export const useRegions = () => {
  return useContext(RegionContext);
};
