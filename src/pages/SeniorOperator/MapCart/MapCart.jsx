import styles from "./MapCart.module.scss";
const TwoGis = () => {
   const organizationCode = "70000001066401992";
   const organizationLatitude = "38.174018";
   const organizationLongitude = "73.9140";

   const options = JSON.stringify({
      pos: { lat: organizationLatitude, lon: organizationLongitude, zoom: 15 },
      opt: { city: "bishkek" },
      org: organizationCode,
   });

   const twoGisIframeURL = encodeURI(`https://widgets.2gis.com/widget?type=firmsonmap&options=${options}`);

   return (
      <>
         <iframe
            className={styles.map}
            frameBorder="no"
            src={twoGisIframeURL}
         ></iframe>
      </>
   );
};

export default TwoGis;
