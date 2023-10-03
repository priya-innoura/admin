import React, { useState } from "react";
import "./add.css";
import Select from "react-select";
import { Pagination, message } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Add({ setShowPopup }) {
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [isPhysicianChecked, setIsPhysicianChecked] = useState(false);
    const [isAdminChecked, setIsAdminChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [roles, setRoles] = useState("");
    const [selectedOption, setSelectedOption] = useState([]);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();
    const handleAdminChange = (e) => {
        setIsAdminChecked(!isAdminChecked);
        setIsPhysicianChecked(false);
        setRoles(e.target.name);
    };

    const handlePhysicianChange = (e) => {
        setIsPhysicianChecked(!isPhysicianChecked);
        setIsAdminChecked(false);
        setRoles(e.target.name);
    };

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };
    const validatePassword = (password) => {
        const uppercaseRegex = /[A-Z]/;
        const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
        const numberRegex = /[0-9]/;

        const hasUppercase = uppercaseRegex.test(password);
        const hasSpecialCharacter = specialCharacterRegex.test(password);
        const hasNumber = numberRegex.test(password);

        return (
            password.length >= 6 && hasUppercase && hasSpecialCharacter && hasNumber
        );
    };

    const handleResigter = async () => {
        const superAdmin = {
            email,
            password,
            name,
            position: roles.toLowerCase(),
            roles: [roles],
        };

        if (!validateEmail(email)) {
            setEmailError("Invalid email format*");
            return;
        } else {
            setEmailError("");
        }

        if (!validatePassword(password)) {
            setPasswordError(
                "Password must contain at least one uppercase letter, one special character, one number, and be at least 6 characters long*"
            );
            return;
        } else {
            setPasswordError("");
        }

        const token = JSON.parse(localStorage.getItem("token"));

        const fest = selectedOption.map((item) => item.value);
    };

    // const handleResigter = async () => {
    //   const superAdmin = {
    //     email,
    //     password,
    //     name,
    //     position: roles.toLowerCase(),
    //     roles: [roles],
    //   };

    //   if (!validateEmail(email)) {
    //     setEmailError("Invalid email format*");
    //     return;
    //   } else {
    //     setEmailError("");
    //   }

    //   if (!validatePassword(password)) {
    //     setPasswordError(
    //       "Password must contain at least one uppercase letter, one special character, one number, and be at least 6 characters long*"
    //     );
    //     return;
    //   } else {
    //     setPasswordError("");
    //   }

    //   const token = JSON.parse(localStorage.getItem("token"));

    //   const fest = selectedOption.map((item) => item.value);

    //   try {
    //     const response = await axios.post(
    //       "http://18.209.67.105:9090/api/v1/auth/signup",
    //       roles.toLowerCase() === "admin"
    //         ? superAdmin
    //         : { ...superAdmin, facilityList: fest },
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //           Authorization: `Bearer ${token.token}`,
    //         },
    //       }
    //     );
    //     if (response.status === 401) {
    //       // Remove the token and redirect to the login page
    //       localStorage.removeItem("token");
    //       message.warning("Logged in failed");
    //       navigate("/"); // Assuming "/superadmin-login" is the correct path
    //       return;
    //     }
    //     if (response.status === 201) {
    //       message.success("User created successfully");
    //       setShowPopup(false);
    //       window.location.reload();
    //     }

    //     // Handle response data here if needed.
    //   } catch (error) {
    //     console.error("Axios error:", error);

    //     if (error?.response?.status === 400) {
    //       message.warning(error?.response?.data?.message);
    //     }

    //     // Handle other errors here if needed.
    //     message.warning("login required");
    //     navigate("/")
    //   }
    // };

    const options = [
        {
            value: "Bedford Center for Nursing and Rehabilitation",
            label: "Bedford Center for Nursing and Rehabilitation",
        },
        {
            value: "King David Center for Nursing and Rehabilitation",
            label: "King David Center for Nursing and Rehabilitation",
        },

        {
            value: "Linden Center for Nursing and Rehabilitation",
            label: "Linden Center for Nursing and Rehabilitation",
        },

        {
            value: "Crown Heights Center for Nursing and Rehabilitation",
            label: "Crown Heights Center for Nursing and Rehabilitation",
        },
    ];

    return (
        <div>
            <div className="logo-form" style={{textAlign:"center"}}>LOGO</div>

            <div>
                <div className="super-admin-input">
                    <div className="form-group">
                        <label for="username"></label>
                        <input
                            type="text"
                            className="username"
                            placeholder="Username"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label for="email"></label>
                        <input
                            type="text"
                            className="email"
                            placeholder="Email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        {emailError && <p className="error-message">{emailError}</p>}
                    </div>

                    <div className="form-group">
                        <label for="password"></label>
                        <div className="password-input">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="password-form"
                                placeholder="Password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            <button
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <FontAwesomeIcon
                                    icon={showPassword ? faEye : faEyeSlash}
                                    className="password-icon"
                                />
                            </button>
                        </div>
                    </div>
                    {passwordError && <p className="error-message">{passwordError}</p>}
                </div>


                <div className="super-admin-btn">
                    <div>
                        <button
                            onClick={handleResigter}
                            className={`add-button ${isClicked ? "clicked" : ""}`}
                        >
                            <span className="add-text ">Add</span>
                        </button>
                    </div>
                    <div>
                        <button className="cancel-link" onClick={() => setShowPopup(false)}>
                            {" "}
                            Cancel{" "}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Add;
