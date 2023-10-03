import React, { useState } from "react";
import "./datavalidation.css";
import { Modal, Select, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";



function DataValidation() {


  const [isClicked, setIsClicked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [activeComponent, setActiveComponent] = useState("");


  // Function to switch to the "File Processing" component
  const showFileProcessing = () => {
    setActiveComponent(null); // To hide any active component
  };


  const handleAddButtonClick = () => {
    setShowPopup(true);
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 200);

  }

  const head = ["PATCH JOB STATUS", "FILE NAME", "STATUS", "DATE CREATED"];

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
        patchJob: "Completed",
      name: "Name 1",
      status: "Enabled",
      date: "22 / 12 / 20",
    },
    {
        patchJob: "Completed",
      name: "Name 1",
      status: "Enabled",
      date: "22 / 12 / 20",
    },
    {
        patchJob: "Completed",
      name: "Name 1",
      status: "Enabled",
      date: "22 / 12 / 20",
    },
    {
        patchJob: "Completed",
      name: "Name 1",
      status: "Enabled",
      date: "22 / 12 / 20",
    },
    {
        patchJob: "Completed",
      name: "Name 1",
      status: "Enabled",
      date: "22 / 12 / 20",
    },
    {
        patchJob: "Completed",
      name: "Name 1",
      status: "Enabled",
      date: "22 / 12 / 20",
    },
    {
        patchJob: "Completed",
      name: "Name 1",
      status: "Enabled",
      date: "22 / 12 / 20",
    },
    {
        patchJob: "Completed",
      name: "Name 1",
      status: "Enabled",
      date: "22 / 12 / 20",
    },
    {
        patchJob: "Completed",
      name: "Name 1",
      status: "Enabled",
      date: "22 / 12 / 20",
    },
  ];
  return (
    <div>
     
      <div className="table-card">
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
                 <td>{item.patchJob}</td>
                <td>{item.name}</td>
              
                <td>{item.status}</td>

                <td>{item.date}</td>
               


              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataValidation;
