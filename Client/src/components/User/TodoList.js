import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./add.css";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import { Tododata } from "./Tododata";
import Loading from "../../Pages/Loading";
// import { Formend } from "./TodoForm";

const Option = (props) => {
  // const [foodcount, setFood] = useState([]);

  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          // onChange={(e) => changeHandler(e)}
          name="fooditem"
          // value={changeHandler.fooditem}
        />{" "}
        <label>{props.label}</label>
        <label>{props.label1}</label>
      </components.Option>
    </div>
  );
};

function TodoList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const datefind = new Date(
        new Date().getTime() - 5 * 60 * 60 * 1000
      ).toISOString();
      // console.log(datefind);
      const response = await fetch(
        "/api/v1/donarfoods/?createdAt[gte]=" + datefind
      );
      const json = await response.json();

      // setData(json.data.data);
      // console.log(json.data.data);
      let fooddetails = [];

      json.data.data.map((singleData) =>
        singleData.fooddetails.map((food) =>
          fooddetails.push({
            donarid: singleData._id,
            value: food.text,
            label: food.text + " - " + food.number,
            label1: food.number,
            id: singleData.userid[0]._id,
          })
        )
      );
      setData(fooddetails);
      // let temp = json.data.data;
      // console.log(temp[0].fooddetails[0].text);
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log("Something", data);

  const [fooddetails, setFood] = useState({
    fooditem: [],
    totalrequired: "",
    date: "",
    address: "",
    mobile: "",
  });
  const Navigate = useNavigate();

  const change = (e) => {
    let x = [];
    for (var i = 0; i < e.length; i++) {
      x.push([e[i].id, e[i].value, e[i].label1,e[i].donarid]);
    }
    setFood({ ...fooddetails, fooditem: x });
    // console.log("gdfgd", x, "fgh", fooddetails.fooditem);
  };

  const changefood = (e) => {
    // console.log("Event", e.target);
    const name = e.target.name.split(",");
    // console.log("name", name[0], name[1]);
    for (let i = 0; i < fooddetails.fooditem.length; i++) {
      if (
        fooddetails.fooditem[i][0] === name[1] &&
        fooddetails.fooditem[i][1] === name[0]
      ) {
        console.log(fooddetails.fooditem[i][1], name[0]);
        fooddetails.fooditem[i][2] = e.target.value;
      }
    }
  };

  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(name, value);
    setFood({ ...fooddetails, [name]: value });
  };

  const OnSubmit = (event) => {
    event.preventDefault();
    if (!fooddetails.fooditem) {
      alert("Please enter food !!!");
      return;
    }
    if (!fooddetails.address) {
      alert("Pls Enter Address !!!");
      return;
    }
    if (!fooddetails.date) {
      alert("Pls Enter Time!!!");
      return;
    }
    if (!fooddetails.totalrequired) {
      alert("Pls Enter No Persons");
      return;
    }
    if (!fooddetails.mobile) {
      alert("Pls Enter mobile number to contact !!!");
      return;
    }

    // console.log(fooddetails);
    // console.log({
    //   totalrequired: fooddetails["totalrequired"],
    //   data: fooddetails["date"],
    //   address: fooddetails["address"],
    //   mobile: fooddetails["mobile"],
    // });

    const addfood = async (fooddetails) => {
      const currentuser = await fetch("/api/v1/users/me/");
      const current = await currentuser.json();
      // console.log("food details", fooddetails);
      const response = await fetch("/api/v1/reviews/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          userid: current.user._id,
          availablefood: fooddetails.fooditem,

          totalrequired: fooddetails["totalrequired"],
          date: fooddetails["date"],
          address: fooddetails["address"],
          mobile: fooddetails["mobile"],
          createdAt: Date.now(),
        }),
      });
      const json = await response.json();

      if (json.status === "success") {
        alert("Successfully Added your Food");
        Navigate("/Userpage/Userdashboard");
      } else {
        alert(json.status);
      }
      // console.log(json);
      // alert(json.status);
    };
    addfood(fooddetails);
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
              options={data}
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              components={{
                Option,
              }}
              name="fooditem"
              onChange={(e) => change(e)}
              allowSelectAll={true}
            />
          </span>
        </div>
        <div>
          {fooddetails.fooditem.map((food) => (
            <div className="name">
              <label className="label">No .of {food[1]} required:</label>
              <input
                className="input"
                type="number"
                name={food[1] + "," + food[0]}
                max={food[2]}
                required
                onChange={(e) => changefood(e)}
                // value={changeHandler.totalrequired}
              />
            </div>
          ))}
        </div>
        <div className="name">
          <label className="label">Persons Required Food:</label>
          <input
            className="input"
            type="number"
            name="totalrequired"
            onChange={(e) => changeHandler(e)}
            value={changeHandler.totalrequired}
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
