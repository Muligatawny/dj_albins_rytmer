import React, { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSending(true);

    try {
      const formData = new FormData(e.target);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        e.target.reset();
      } else {
        setError("❌ Kunde inte skicka formuläret. Försök igen.");
      }
    } catch (err) {
      setError("❌ Kunde inte skicka formuläret. Försök igen.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <p style={{ textAlign: "center", padding: "1rem" }}>
        ✅ Tack för ditt meddelande. Vi hör av oss så snart vi kan.
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* Web3Forms access key */}
      <input
        type="hidden"
        name="access_key"
        value="42b6c923-0510-4920-845c-1036dfc4ec74"
      />

      {/* Ämnesrad i mailet */}
      <input
        type="hidden"
        name="subject"
        value="Ny förfrågan från albinsrytmer.se"
      />

      {/* Honeypot (bot-skydd) */}
      <input type="checkbox" name="botcheck" style={{ display: "none" }} />

      <label>Namn*</label>
      <input type="text" name="Namn" required placeholder="Ditt namn" />

      <label>Mail*</label>
      <input type="email" name="Mail" required placeholder="exempel@mail.com" />

      <label>Telefonnummer*</label>
      <input
        type="tel"
        name="Telefonnummer"
        required
        placeholder="0701234567"
      />

      <label>Datum</label>
      <input type="text" name="Datum" placeholder="ÅÅÅÅ-MM-DD" />

      <label>Meddelande</label>
      <textarea
        name="Meddelande"
        rows="4"
        placeholder="Berätta mer om evenemanget."
      ></textarea>

      <fieldset>
        <legend>Tillval</legend>

        <label>
          <input type="checkbox" name="Tillval" value="Högtalarsystem" />{" "}
          Högtalarsystem
        </label>

        <label>
          <input
            type="checkbox"
            name="Tillval"
            value="Rökmaskin och belysning"
          />{" "}
          Rökmaskin och belysning
        </label>

        <label>
          <input type="checkbox" name="Tillval" value="Musikquiz" /> Musikquiz
        </label>

        <label>
          <input type="checkbox" name="Tillval" value="Kärleksråd" /> Kärleksråd
        </label>
      </fieldset>

      {error && (
        <p style={{ color: "red", marginTop: "0.75rem" }}>{error}</p>
      )}

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <button className="send-button" type="submit" disabled={sending}>
          {sending ? "SKICKAR..." : "SKICKA"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
