import React, { useState, useEffect } from "react";
import img from "../img.png";
import { useNavigate } from "react-router-dom";
import img2 from "../img2.png";
import "../Dashboard.css";
import Loading from "../Loading";
export const UserDashboard = () => {
  const Navigate = useNavigate();
  const [foodcount, setfoodcount] = useState(0);
  const [requestcount, setrequestcount] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    var food = 0;
    var foodrequest = 0;
    const Listfood = async () => {
      setLoading(true);
      const currentuser = await fetch("/api/v1/users/me/");
      const current = await currentuser.json();
      if (current.status === "failure" || current.user.role !== "User") {
        Navigate("/loginregister");
        if (current.user.role !== "User") {
          alert("You do not have Permission to access this page!");
        } else {
          alert(current.Error);
        }
      }
      if (current.status === "failure") {
        return;
      }
      const Listedfoods = await fetch("/api/v1/donarfoods/");
      // console.log("/api/v1/donarfoods/" + userid);
      const foods = await Listedfoods.json();
      // console.log(foods);
      for (var i = 0; i < foods.results; i++) {
        const arrsize = foods.data.data[i].fooddetails.length;
        for (var j = 0; j < arrsize; j++) {
          food += parseInt(foods.data.data[i].fooddetails[j].number);
        }
        // console.log(foods.data.data[i].fooddetails.length);
      }
      const Listedrequest = await fetch("/api/v1/reviews/"+ current.user._id);
      // console.log("/api/v1/donarfoods/" + userid);
      const request = await Listedrequest.json();
      // console.log(foods);
      for (var i = 0; i < request.results; i++) {
        const arrsize = request.data.data[i].availablefood.length;
        for (var j = 0; j < arrsize; j++) {
          foodrequest += parseInt(request.data.data[i].availablefood[j][2]);
        }
        // console.log(foods.data.data[i].fooddetails.length);
      }
      // setloading(true);
      // console.log(food);
      setrequestcount(foodrequest);
      setfoodcount(food);
      setLoading(false);
    };
    // setfoodcount(food);
    Listfood();
  }, []);

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
          <h1 style={{ color: "black" }}>{requestcount}</h1>
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
          <h1 style={{ color: "black" }}>{requestcount}</h1>
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
