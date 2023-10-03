import React, { useState } from "react";
import "./table.css";
import { Modal, Select, Switch, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Add from "../add-form/Add";



function Table() {


  const [isClicked, setIsClicked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);



  const handleAddButtonClick = () => {
    setShowPopup(true);
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 200);

  }

  const head = ["NAME", "EMAIL ID", "PASSWORD", "STATUS", "DATE CREATED"];

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
  const defaultValue = "All"
  const datas = [
    {
      name: "Name 1",
      email: "name@gmail.com",
      password: "*************",
      status: "Enabled",
      date: "22 / 12 / 20",
    },
    {
      name: "Name 1",
      email: "name@gmail.com",
      password: "*************",
      status: "Enabled",
      date: "22 / 12 / 20",
    },
    {
      name: "Name 1",
      email: "name@gmail.com",
      password: "*************",
      status: "Enabled",
      date: "22 / 12 / 20",
    },
    {
      name: "Name 1",
      email: "name@gmail.com",
      password: "*************",
      status: "Enabled",
      date: "22 / 12 / 20",
    },
    {
      name: "Name 1",
      email: "name@gmail.com",
      password: "*************",
      status: "Enabled",
      date: "22 / 12 / 20",
    },
    {
      name: "Name 1",
      email: "name@gmail.com",
      password: "*************",
      status: "Enabled",
      date: "22 / 12 / 20",
    },
    {
      name: "Name 1",
      email: "name@gmail.com",
      password: "*************",
      status: "Enabled",
      date: "22 / 12 / 20",
    },
    {
      name: "Name 1",
      email: "name@gmail.com",
      password: "*************",
      status: "Enabled",
      date: "22 / 12 / 20",
    },
   
  ];
  return (
    <div>
      <div className="btn-container">
        <div style={{ display: "flex" }}>
          <div>
            <input type="search" className="input-search" placeholder="Name" />
          </div>
          <div>
            {" "}
            <input type="date" className="input-date" placeholder="Name" />
          </div>
          <Modal
            open={showPopup}
          
            cancelButtonProps={{ style: { display: 'none' } }}
            okButtonProps={{ style: { display: 'none' } }}


          >
            <div
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 463,
                height: 580,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
                borderRadius: "15px",
                border: "none",
                outline: "none",
              }}
            >
              <Add setShowPopup={setShowPopup} />
            </div>
          </Modal>
          <div className="select-input">
            {" "}
            <Select
              className="input-fields"
              styles={{
                width: "100%",
                background: "none",
              }}
              // defaultValue={selectedOption}
              // onChange={setSelectedOption}
              options={options}
              defaultValue={defaultValue} 

            />
          </div>
        </div>
        <div> <Tooltip title="Add New Admin " arrow>
            <button
              onClick={handleAddButtonClick}
              className={`my-button ${isClicked ? "clicked" : ""}`}
            >
              <FontAwesomeIcon icon={faPlus} style={{ color: "white" }} />
            </button>
            </Tooltip></div>
      </div>
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
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                <Switch style={{color:"black"}} checkedChildren="Enabled" unCheckedChildren="Disabled" defaultChecked />

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

export default Table;
