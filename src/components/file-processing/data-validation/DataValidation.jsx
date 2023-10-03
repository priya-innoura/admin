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
  };

  const head = ["PATCH JOB STATUS", "FILE NAME", "STATUS", "DATE CREATED"];

  const options = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "Completed",
      label: "Completed",
    },

    {
      value: "InProgress",
      label: "InProgress",
    },
    {
      value: "Finished Validation",
      label: "Finished Validation",
    },
    {
      value: "Invalidation",
      label: "Invalidation",
    },
  ];
  const patchStatusOptions = [
    {
      value: "Completed",
      label: "Completed",
    },
    {
      value: "Started",
      label: "Started",
    },

    {
      value: "Pending",
      label: "Pending",
    },
    {
      value: "Patching",
      label: "Patching",
    },
    {
      value: "No Patching",
      label: "No Patching",
    },
    {
      value: "Resume",
      label: "Resume",
    },
  ];
  const datas = [
    {
      patchJob: "Completed",
      name: "Name 1",
      status: "Completed",
      date: "22 / 12 / 20",
    },
    {
      patchJob: "Started",
      name: "Name 1",
      status: "In-Progress",
      date: "22 / 12 / 20",
    },
    {
      patchJob: "Completed",
      name: "Name 1",
      status: "Finished Validation",
      date: "22 / 12 / 20",
    },
    {
      patchJob: "Patching",
      name: "Name 1",
      status: "In-Validation",
      date: "22 / 12 / 20",
    },
    {
      patchJob: "Started",
      name: "Name 1",
      status: "Hold",
      date: "22 / 12 / 20",
    },
    {
      patchJob: "Pending",
      name: "Name 1",
      status: "Finished Validation",
      date: "22 / 12 / 20",
    },
    {
      patchJob: "Completed",
      name: "Name 1",
      status: "In-Validation",
      date: "22 / 12 / 20",
    },
    {
      patchJob: "No Patching",
      name: "Name 1",
      status: "Hold",
      date: "22 / 12 / 20",
    },
  ];
  const defaultValue = "All";
  return (
    <div>
      <div className="table-card">
        <div style={{ display: "flex", justifyContent: "space-between",alignItems:"center" }}>
          <div>
            <h3>Data Validation</h3>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <input type="date" className="input-date" placeholder="Name" />
            </div>
            <div className="select-input" style={{ marginRight: "20px" }}>
              <Select
                className="input-fields"
                styles={{
                  width: "100%",
                  background: "none",
                }}
                options={patchStatusOptions}
                defaultValue={defaultValue}
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
                <td>
                  {/* Conditionally apply CSS classes based on the status */}
                  <label
                    className={
                      item.patchJob === "Completed"
                        ? "completed-patch"
                        : item.patchJob === "Started"
                        ? "in-progress-patch"
                        : item.patchJob === "Patching"
                        ? "finished-validation-patch"
                        : item.patchJob === "Pending"
                        ? "hold-patch"
                        : item.patchJob === "No Patching"
                        ? "nopatching-patch"
                        : ""
                    }
                  >
                    {item.patchJob}
                  </label>
                </td>{" "}
                <td>{item.name}</td>
                <td  style={{background:"#F5F5F5"}}>
                  {/* Conditionally apply CSS classes based on the status */}
                  <label
                    className={`${
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
                    } status-gray`}
                  >
                    {item.status}
                  </label>
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

export default DataValidation;
