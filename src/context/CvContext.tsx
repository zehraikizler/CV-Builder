"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";
import { CvData } from "@/types/cv-data";
import initialData from "@/data/initialData.json";

// --- Context Arayüzü ---
interface CvContextType {
  cvData: CvData;
}

const CvContext = createContext<CvContextType | undefined>(undefined);

// --- Provider Bileşeni ---
export const CvProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cvData, setCvData] = useState<CvData>(initialData as CvData);

  const contextValue: CvContextType = {
    cvData,
  };

  return (
    <CvContext.Provider value={contextValue}>{children}</CvContext.Provider>
  );
};

// --- Custom Hook ---
export const useCv = () => {
  const context = useContext(CvContext);
  if (context === undefined) {
    throw new Error("useCv must be used within a CvProvider");
  }
  return context;
};
