import React from "react";

const OmOss = () => {
  return (
    <div>
      <p>
        Vi är DJ Albins rytmer, två vänner som började DJa ihop under
        studietiden i Linköping där vi också drev en popklubb. Sedan dess har vi
        spelat tillsammans i över tio år på bröllop, klubbar, hemmafester,
        nationer, julfester, löptävlingar och allt däremellan.
      </p>
      <p>
        Vi älskar musik i alla former, har bred musiksmak men känsla för
        kvalitet. En bra låt är en bra låt oavsett genre. Vi anpassar alltid
        musiken efter sammanhanget.
      </p>
      <p>
        Vi tar oss an alla sorters gig och kan även ta med ljudsystem,
        belysning och lasershow. Behöver du en DJ till ditt bröllop,
        firmafest, klubbkväll eller något helt annat, då löser vi det.
      </p>

      <div className="omoss-bilder">
        <div className="dos-image-frame">
          <img src={process.env.PUBLIC_URL + "/Albin_K.jpg"} alt="Albin K" />
          <p>Albin K</p>
        </div>
        <div className="dos-image-frame">
          <img src={process.env.PUBLIC_URL + "/Albin_J.jpg"} alt="Albin J" />
          <p>Albin J</p>
        </div>
      </div>
    </div>
  );
};

export default OmOss;
