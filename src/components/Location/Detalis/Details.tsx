import { postApi } from "@/services/PostService"
import React from "react"
import { Map } from "@/components/Location/Map/Map"
import styles from "./styles.module.scss"
import Button from "@/components/Button/Button"

type BranchDetailsProps = {
  selectedBranch: number;
};

export const Details: React.FC<BranchDetailsProps> = ({ selectedBranch }) => {

  const { data, error, isLoading } = postApi.useFetchBranchDetailsQuery(selectedBranch);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading branch details</div>;


  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
      <h2 className={styles.title}>{data?.name}</h2>
        <p className={styles.locationParagraph}>location</p>
      <p className={styles.paragraph}>{data?.location}</p>
        <div className={styles.phone}>
          <div>
            <h4>Global</h4>
            <p>{data?.contact.globe}</p>
          </div>
         <div>
           <h4>Smart</h4>
           <p>{data?.contact.smart}</p>
         </div>
        </div>
      <Button className={styles.button} onClick={() => window.open(data?.facebookPage, '_blank')}>
        Visit Branch Facebook Page
      </Button>
      </div>
      <div className={styles.map}>
      <Map location={data?.location} />
      </div>
    </div>
    );
};

