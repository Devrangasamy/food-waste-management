import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./add.css";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";

// import { Formend } from "./TodoForm";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

function TodoList() {
  const colourOptions = [
    { value: "ocean1", label: "Ocean" },
    { value: "blue", label: "Blue" },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red" },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" },
    { value: "green", label: "Green" },
    { value: "forest", label: "Forest" },
    { value: "slate", label: "Slate" },
    { value: "silver", label: "Silver" },
  ];

  const [fooddetails, setFood] = useState({
    description: "",
    date: "",
    address: "",
    mobile: "",
  });
  const Navigate = useNavigate();
  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(name, value);
    setFood({ ...fooddetails, [name]: value });
  };

  const OnSubmit = (event) => {
    event.preventDefault();

    if (!fooddetails.address) {
      alert("Pls Enter Address !!!");
      return;
    }
    if (!fooddetails.date) {
      alert("Pls Enter Time!!!");
      return;
    }
    if (!fooddetails.description) {
      alert("Pls Enter No Persons");
      return;
    }
    if (!fooddetails.mobile) {
      alert("Pls Enter mobile number to contact !!!");
      return;
    }

    // console.log(fooddetails);
    // console.log({
    //   description: fooddetails["description"],
    //   data: fooddetails["date"],
    //   address: fooddetails["address"],
    //   mobile: fooddetails["mobile"],
    // });

    const addfood = async (todos, fooddetails) => {
      const currentuser = await fetch("/api/v1/users/me/");
      const current = await currentuser.json();
      // console.log("food details", fooddetails);
      const response = await fetch("/api/v1/donarfoods/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          userid: current.user._id,
          description: fooddetails["description"],
          data: fooddetails["data"],
          address: fooddetails["address"],
          mobile: fooddetails["mobile"],
        }),
      });
      const json = await response.json();

      if (json.status === "success") {
        alert("Successfully Added your Food");
        Navigate("/Donarpage/dashboard");
      } else {
        alert(json.status);
      }
      // console.log(json);
      // alert(json.status);
    };
  };
  const Loginnot = async () => {
    const currentuser = await fetch("/api/v1/users/me/");
    const current = await currentuser.json();
    console.log(current);
    if (current.status === "failure" || current.user.role !== "User") {
      Navigate("/loginregister");
      alert(current.Error);
    }
  };
  Loginnot();

  return (
    <>
      <form onSubmit={OnSubmit}>
        <div className="name">
          <label className="label">Available foods</label>
          <span
            className="d-inline-block"
            data-toggle="popover"
            data-trigger="focus"
            data-content="Please selecet account(s)"
          >
            <ReactSelect
              options={colourOptions}
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              components={{
                Option,
              }}
              // onChange={this.handleChange}
              allowSelectAll={true}
              // value={this.state.optionSelected}
            />
          </span>
        </div>
        <div className="name">
          <label className="label">Persons Required Food:</label>
          <input
            className="input"
            type="number"
            name="description"
            onChange={(e) => changeHandler(e)}
            value={changeHandler.description}
          />
        </div>
        <div className="num">
          <label className="label">Pickup Time</label>
          <input
            type="text"
            className="input"
            name="date"
            onChange={(e) => changeHandler(e)}
            onFocus={(e) => (e.target.type = "time")}
            onBlur={(e) => (e.target.type = "text")}
          />
        </div>
        <div className="name">
          <label className="label"> Address</label>
          <input
            className="input"
            name="address"
            type="textarea"
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <div className="name">
          <label className="label">Contact</label>
          <input
            className="input"
            type="number"
            name="mobile"
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <div>
          <button className="submit" value="Submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default TodoList;
