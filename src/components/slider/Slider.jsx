import React, { useState } from "react";
import { Select } from "antd";
import './slider.css'
import DataValidation from "../file-processing/data-validation/DataValidation";
import FileProcessing from "../file-processing/Fileprcessing";
// Assuming you have a separate component for File Processing

function Slider() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [activeButton, setActiveButton] = useState(""); 


  const showDataValidation = () => {
    setActiveComponent(<DataValidation />);
    setActiveButton("data-validation"); 
  };

  const showFileProcessing = () => {
    setActiveComponent(<FileProcessing/>);
    setActiveButton("file-processing"); 
  }
  const options = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "Enabled",
      label: "Enabled",
    },

    {
      value: "Disbled",
      label: "Disbled",
    },
  ];
  const defaultValue = "All";
  return (
    
    <div>
      <div className="btn-container">
        <div style={{ display: "flex" }}>
          <div>
            <button
              type="search"
              className={`slider-btn ${activeButton === "file-processing" ? "active" : ""}`} // Apply active class if activeButton is "file-processing"
              onClick={showFileProcessing}
            >
              File Processing
            </button>
          </div>
          <div>
            <button
              type="search"
              className={`slider-btn ${activeButton === "data-validation" ? "active" : ""}`} // Apply active class if activeButton is "file-processing"
              onClick={showDataValidation}
            >
              Data Validation
            </button>
          </div>
        </div>
        {/* <div style={{ display: "flex" }}>
          <div>
            <input
              type="date"
              className="input-date"
              placeholder="Name"
            />
          </div>
          <div className="select-input">
            <Select
              className="input-fields"
              styles={{
                width: "100%",
                background: "none",
              }}
              options={options}
              defaultValue={defaultValue} 
            />
          </div>
        </div> */}
      </div>
      <div className="content">
        {activeComponent}
      </div>
    </div>
  );
}

export default Slider;
