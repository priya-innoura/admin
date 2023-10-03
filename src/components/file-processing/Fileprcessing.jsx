import React, { useState } from "react";
import "./fileprocessing.css";
import { Modal, Select, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import DataValidation from "./data-validation/DataValidation";

function FileProcessing() {
  const [isClicked, setIsClicked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);
  const showDataValidation = () => {
    setActiveComponent(<DataValidation />);
    return;
  };


  const showFileProcessing = () => {
    setActiveComponent(null); 
  };

  const handleAddButtonClick = () => {
    setShowPopup(true);
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  const head = ["FILE NAME", "STATUS", "DATE CREATED"];

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
  const datas = [
    {
      name: "Name 1",
      status: "Completed",
      date: "22 / 12 / 20",
    },
    {
      name: "Name 1",
      status: "In-Progress",
      date: "22 / 12 / 20",
    },
    {
      name: "Name 1",
      status: "Finished Validation",
      date: "22 / 12 / 20",
    },
    {
      name: "Name 1",
      status: "In-Validation",
      date: "22 / 12 / 20",
    },
    {
      name: "Name 1",
      status: "Hold",
      date: "22 / 12 / 20",
    },
    {
      name: "Name 1",
      status: "Finished Validation",
      date: "22 / 12 / 20",
    },
    {
      name: "Name 1",
      status: "Hold",
      date: "22 / 12 / 20",
    },
    {
      name: "Name 1",
      status: "In-Progress",
      date: "22 / 12 / 20",
    },
   
  ];
  const defaultValue = "All"
  return (
    <div>
      <div className="table-card">
      <div style={{ display: "flex" , justifyContent:"space-between", alignItems:"center"}}>
        <div><h3>File Processing</h3></div>
        <div style={{display:"flex"}}>
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
          </div>
        </div>
        <table className="list-table">
          <thead className="table-head">
            <tr>
              {head.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {datas.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>

                <td style={{ background: "#F5F5F5" }}>

 
  <label
    className={
      item.status === "Completed"
        ? "completed"
        : item.status === "In-Progress"
        ? "in-progress"
        : item.status === "Finished Validation"
        ? "finished-validation"
        : item.status === "Hold"
        ? "hold"
        : item.status === "In-Validation"
        ? "invalidation"
        : ""
    }
  >
    {item.status}
  </label>
  {/* <span style={{marginLeft:"10px"}}>
      {item.status === "Completed" ? (
    <FontAwesomeIcon icon={faEye} className="enabled-eye-icon" />
  ) : (
    <FontAwesomeIcon icon={faEyeSlash} className="disabled-eye-icon" />
  )}
  </span> */}

</td>


                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FileProcessing;
