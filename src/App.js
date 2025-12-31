import React from "react";
import "./App.css";

import Window from "./components/Window";
import OmOss from "./components/OmOss";
import DagensBanger from "./components/DagensBanger";
import DJPaket from "./components/DJPaket";
import ContactForm from "./components/ContactForm";
import RunningBanner from "./components/RunningBanner";

function App() {
  return (
    <div
      className="page-background"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/background_webpage_1.png)`,
      }}
    >


      <div className="main-columns">
        {/* Vänsterkolumn */}
        <div className="left-column">
          <Window title="ALBINSRYTMER.BAT">
            <h1>DJ Albins rytmer</h1>
            <p>
              Vi är två vänner som spelar på bröllop, fester och klubbar och har
              hållit igång dansgolv tillsammans i många år!!
            </p>
            <RunningBanner />
          </Window>

          <Window title="OMOSS.DOS">
            <OmOss />
          </Window>

          <Window title="BANGER.WAV">
            <DagensBanger />
          </Window>
        </div>

        {/* Högerkolumn */}
        <div className="right-column">
          <Window title="PAKET.DOS">
            <DJPaket />
          </Window>

          <Window title="CONTACT.DOS">
            <ContactForm />
          </Window>


        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>© 2025 DJ Albins rytmer</p>
      </div>
    </div>
  );
}

export default App;