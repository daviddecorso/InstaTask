import React from "react";

import help from "./img/importhelp.png";
import help1 from "./img/importhelp1.png";
import help2 from "./img/importhelp2.png";

function ImportHelp() {
  return (
    <div className="section">
        <div className="container">
          <div className="columns is-8 is-variable is-centered">
            <div className="column">
              <h1 className="title section-title">Calendar Import Tutorial</h1>
              <hr style={{ border: "1px solid #1659b1" }}></hr>
              <p>
              <img src={help1} /> <br></br>

              In order to import you calendar into InstaTask first navigate to Canvas and select the calendar icon on the left hand side menu. <br></br> 
              Then, below the list of calendars on the right side, select "Calendar Feed". <br></br>

              <img src={help} /> <br></br>
              
              After that you will be given a url that you can then copy to your clipboard and paste on the import page when prompted.<br></br>

              <img src={help2} /> <br></br>

              
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ImportHelp;
