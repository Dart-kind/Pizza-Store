import { useState } from "react"
import { Sidebar } from "@/components/Location/Sidebar/Sidebar"
import { Details } from "@/components/Location/Detalis/Details"
import { postApi } from "@/services/PostService"
import { Branch } from "@/store/models/Location"
import styles from "./styles.module.scss"


export const MapCover = () => {

  const [selectedBranch, setSelectedBranch] = useState<number>(1);
  const { data: locations, error, isLoading } = postApi.useFetchBranchCitiesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading locations</div>;



  return (
      <div className={styles.wrapper} >
        <Sidebar  locations={locations as Branch[]} onSelect={setSelectedBranch} />
        <div className={styles.details}>
          <Details selectedBranch={selectedBranch} />
        </div>
      </div>
  );
};