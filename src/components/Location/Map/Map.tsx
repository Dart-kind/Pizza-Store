import React from "react"
import styles from "./styles.module.scss"

export type MapProps = {
  location: number;
};

export const Map: React.FC<MapProps> = ({ location }) => {
  const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;

  return (
    <div className={styles.wrapper}>
      <iframe className={styles.map}
        src={googleMapsUrl}
        width="800"
        height="450"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};