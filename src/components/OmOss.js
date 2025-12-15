import React from "react";

const OmOss = () => {
  return (
    <div>
      {/* Slogan-ruta */}
      <div className="slogan-box">
        <p>Rytmen du aldrig glömmer.</p>
      </div>

      {/* Brödtext */}
      <p>
        Vi är DJ Albins rytmer, två vänner som fann varandra genom ett gemensamt
        musikintresse och brist på studieteknik i Linköping 2014. Resten är
        pophistoria! Efter förvaltandet av den anrika popklubben John Doe
        2015–2020 har DJ-gigen, bröllop, klubbar, hemmafester, nationer,
        julfester, löptävlingar och allt däremellan – ställt sig på led.
        Åtminstone emellanåt. Men vi vill ha MER!
      </p>

      <p>
        Genom en cocktail av bangers från idag och din mormors tonår sätter vi
        prägeln på ditt dansgolv, oavsett sammanhang. Vi tar oss an alla sorters
        gig och kan även ta med ljudsystem, rökmaskin och ljusshow ifall detta
        önskas!
      </p>

      {/* Bilder */}
      <div className="omoss-bilder">
        <div className="dos-image-frame">
          <img src={process.env.PUBLIC_URL + "/Albin_K.jpg"} alt="Albin K" />
          <p>Albin K, bröllop i Varberg 2024</p>
        </div>
        <div className="dos-image-frame">
          <img src={process.env.PUBLIC_URL + "/Albin_J.jpg"} alt="Albin J" />
          <p>Albin J, 30-årsfest Linköping 2023</p>
        </div>
      </div>
    </div>
  );
};

export default OmOss;
