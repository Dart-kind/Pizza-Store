import React from "react"
import { Branch } from "@/store/models/Location"

type SidebarProps = {
  locations: Branch[];
  onSelect: (id: number) => void;
};



export const Sidebar: React.FC<SidebarProps> = ({ locations, onSelect }) => {

  return (
    <div>
      <ul>
        {locations.map((location) => (
          <li key={location.id} onClick={() => onSelect(location.id)}>
            {location.name}
          </li>
        ))}
      </ul>
    </div>
  );
};