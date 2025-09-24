import { useState, createContext, ReactNode } from "react";
import propertydata from "./Data";

type ContextType = {
  propertydata: {
    id: number;
    propertyName: string;
    price: string;
    priceInLakhs: number;
    bedrooms: number;
    bathrooms: number;
    location: string;
    imageURL: string;
  }[];
  cities: string[];
  bedRooms: number[];
  handleFilterChange: (filter: any) => void;
  selectedFilter: {
    price: string;
    city: string;
    bedRooms: string;
  };
  filteredProperties: {
    id: number;
    propertyName: string;
    price: string;
    priceInLakhs: number;
    bedrooms: number;
    bathrooms: number;
    location: string;
    imageURL: string;
  }[];
} | null;

export const AppContext = createContext<ContextType>(null);

const cities = [...new Set(propertydata.map((curCity) => curCity.location))];
const bedRooms = [...new Set(propertydata.map((curBdrm) => curBdrm.bedrooms))];

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [selectedFilter, setSelectedFilter] = useState({
    price: "",
    city: "",
    bedRooms: "",
  });

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  // Filtered Properties
  const filteredProperties = propertydata.filter((property) => {
    const { price, city, bedRooms } = selectedFilter;
    return (
      (!price || price === "Price" || property.priceInLakhs <= Number(price)) &&
      (!city || city === "City" || property.location === city) &&
      (!bedRooms ||
        bedRooms === "Select BHK" ||
        property.bedrooms === Number(bedRooms))
    );
  });

  return (
    <AppContext.Provider
      value={{
        propertydata,
        cities,
        bedRooms,
        handleFilterChange,
        selectedFilter,
        filteredProperties,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
