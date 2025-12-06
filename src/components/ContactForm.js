import React, { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p style={{ textAlign: "center", padding: "1rem" }}>
        ✅ Tack för ditt meddelande. Vi hör av oss så snart vi kan.
      </p>
    );
  }

  return (
    <form
      className="contact-form"
      action="https://formsubmit.co/albin.karlens@gmail.com"
      method="POST"
      onSubmit={() => setSubmitted(true)}
    >
      {/* Aktiverar CC till Albin J */}
      <input type="hidden" name="_cc" value="nisalbinlarsjohansson@gmail.com" />

      {/* Stänger av captcha */}
      <input type="hidden" name="_captcha" value="false" />

      {/* Skicka besökaren tillbaka till hemsidan efter skickat formulär */}
      <input type="hidden" name="_next" value="https://albinsrytmer.se" />

      <label>Namn*</label>
      <input type="text" name="Namn" required placeholder="Ditt namn" />

      <label>Mail*</label>
      <input type="email" name="Mail" required placeholder="exempel@mail.com" />

      <label>Telefonnummer*</label>
      <input type="tel" name="Telefonnummer" required placeholder="0701234567" />

      <label>Företagsnamn</label>
      <input type="text" name="Företagsnamn" placeholder="Företag (valfritt)" />

      <label>Datum</label>
      <input type="text" name="Datum" placeholder="ÅÅÅÅ-MM-DD" />

      <label>Meddelande</label>
      <textarea
        name="Meddelande"
        rows="4"
        placeholder="Berätta mer om evenemanget."
      ></textarea>

      <fieldset>
        <legend>Paket och pris</legend>
        <label>
          <input type="checkbox" name="Paket" value="DJ och mixerbord" /> DJ och
          mixerbord
        </label>
        <label>
          <input type="checkbox" name="Paket" value="Pris med högtalarsystem" />
          Jag vill ha pris med högtalarsystem
        </label>
        <label>
          <input type="checkbox" name="Paket" value="Vet inte än" /> Jag vet inte än
        </label>
      </fieldset>

      <fieldset>
        <legend>Tillval</legend>
        <label>
          <input type="checkbox" name="Tillval" value="Rökmaskin" /> Rökmaskin och belysning
        </label>
        <label>
          <input type="checkbox" name="Tillval" value="Musikquiz" /> Musikquiz
        </label>
        <label>
          <input type="checkbox" name="Tillval" value="Kärleksråd" /> Kärleksråd
        </label>
      </fieldset>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <button className="send-button" type="submit">
          Skicka
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
