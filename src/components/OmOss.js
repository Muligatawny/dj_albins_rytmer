import React from "react";

const OmOss = () => {
  return (
    <div>
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

      <div className="omoss-bilder">
  <div className="dos-image-frame">
    <img src={process.env.PUBLIC_URL + "/Albin_K.jpg"} alt="Albin K" />
    <div className="dos-image-text">
      Albin K,<br />
      bröllop i<br />
      Varberg 2024
    </div>
  </div>

  <div className="dos-image-frame">
    <img src={process.env.PUBLIC_URL + "/Albin_J.jpg"} alt="Albin J" />
    <div className="dos-image-text">
      Albin J,<br />
      30-årsfest i<br />
      Linköping 2023
    </div>
  </div>
</div>

    </div>
  );
};

export default OmOss;
