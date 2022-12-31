import React, { useEffect, useState } from "react";
import img from "./img.png";
import { useNavigate } from "react-router-dom";
import img2 from "./img2.png";
import "./Dashboard.css";
import Loading from "../Pages/Loading";
export const DonarDashboard = () => {
  const [foodcount, setFoodcount] = useState(0);
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const Listfood = async () => {
      setLoading(true);

      var food = 0;
      const currentuser = await fetch("/api/v1/users/me/");
      const current = await currentuser.json();
      if (current.status === "failure" || current.user.role !== "Donar") {
        Navigate("/loginregister");
        alert(current.Error);
      }
      if (current.status === "failure") {
        return;
      }
      const userid = current.user._id;
      const Listedfoods = await fetch("/api/v1/donarfoods/" + userid);
      // console.log("/api/v1/donarfoods/" + userid);
      const foods = await Listedfoods.json();
      // console.log(foods);
      for (var i = 0; i < foods.results; i++) {
        if (foods.data.data[i].userid[0]._id !== current.user._id) {
          // console.log("dfhfghfgh");
          continue;
        }
        const arrsize = foods.data.data[i].fooddetails.length;
        for (var j = 0; j < arrsize; j++) {
          food += parseInt(foods.data.data[i].fooddetails[j].number);
        }
        // console.log(foods.data.data[i].fooddetails.length);
      }
      // setloading(true);
      // console.log(food);
      setFoodcount(food);
      setLoading(false);
    };
    // setfoodcount(food);
    Listfood();
  }, []);

  // const Loginnot = async () => {
  //   const Navigate = useNavigate();

  //   const currentuser = await fetch("/api/v1/users/me/");
  //   const current = await currentuser.json();
  //   // console.log(current.user.role);
  //   if (current.status === "failure" || current.user.role !== "Donar") {
  //     Navigate("/loginregister");
  //     alert(current.Error);
  //     return;
  //   }
  // };
  // Loginnot();

  // const [foodcount, setfoodcount] = useState(0);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="hiii">
      <div
        className="hii"
        style={{
          backgroundColor: "#FF1053",
          position: "relative",
          borderRadius: "10px",
          color: "black",
        }}
      >
        <div className="imga">
          <img
            src={img}
            alt={"Spoon"}
            style={{ height: "70px", width: "70px", alignItems: "center" }}
          />
        </div>
        <div className="hibro">
          <h2>Total Listed Food</h2>
          <h1 style={{ color: "black" }}>{foodcount}</h1>
        </div>
      </div>
      <div
        className="hii"
        style={{
          backgroundColor: "#6C6EA0",
          position: "relative",
          borderRadius: "10px",
          color: "black",
        }}
      >
        <div className="imga">
          <img
            src={img2}
            alt={"Document"}
            style={{ height: "70px", width: "70px", alignItems: "center" }}
          />
        </div>
        <div>
          <h2>Request Completed</h2>
          <h1 style={{ color: "black" }}>0</h1>
        </div>
      </div>
      <div
        className="hii"
        style={{
          backgroundColor: "#66C7F4",
          position: "relative",
          borderRadius: "10px",
          color: "black",
        }}
      >
        <div className="imga">
          <img
            src={img2}
            alt={"Document"}
            style={{ height: "70px", width: "70px", alignItems: "center" }}
          />
        </div>
        <div>
          <h2>Rejected Requests</h2>
          <h1 style={{ color: "black" }}>0</h1>
        </div>
      </div>
      <div
        className="hii"
        style={{
          backgroundColor: "#C1CAD6",
          position: "relative",
          borderRadius: "10px",
          color: "black",
        }}
      >
        <div className="imga">
          <img
            src={img2}
            alt={"Document"}
            style={{ height: "70px", width: "70px", alignItems: "center" }}
          />
        </div>
        <div>
          <h2>All Requests</h2>
          <h1 style={{ color: "black" }}>0</h1>
        </div>
      </div>
      <div
        className="hii"
        style={{
          backgroundColor: "#FFFFFF",
          position: "relative",
          borderRadius: "10px",
          color: "black",
        }}
      >
        <div className="imga">
          <img
            src={img2}
            alt={"Document"}
            style={{ height: "70px", width: "70px", alignItems: "center" }}
          />
        </div>
        <div>
          <h2>New Requests</h2>
          <h1 style={{ color: "black" }}>0</h1>
        </div>
      </div>
    </div>
  );
};
