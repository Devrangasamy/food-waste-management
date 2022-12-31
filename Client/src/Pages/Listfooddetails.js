import React, { useState, useEffect } from "react";
import Loading from "../Pages/Loading";
import "../Pages/List.css";
import "./add.css";
import TodoList from "../components/TodoList";

export const Addfood = () => {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
};

export const Manage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const datefind = new Date(new Date().getTime() - 5 * 60 * 60 * 1000);
      // console.log(datefind);
      const currentuser = await fetch("/api/v1/users/me/");
      const current = await currentuser.json();
      // console.log(current);
      const response = await fetch("/api/v1/donarfoods/" + current.user._id);
      const json = await response.json();

      setData(json.data.data);

      let temp = json.data.data;
      // console.log(temp[0].fooddetails[0].text);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 style={{ color: "black" }} className="head">
        Listed Foods
      </h1>

      <div className="car">
        {data.map((singleData) =>
          singleData.fooddetails.map((food) => (
            <div className="containe">
              <div className="cards">
                <div className="card">
                  <h3>Name:{singleData.userid[0].name}</h3>
                  <p>Food:{food.text}</p>
                  <p>Quantity:{food.number}</p>
                  <p>Address:{singleData.address}</p>
                  <p>Contact:{singleData.mobile}</p>
                  <p>
                    Date:{new Date(singleData.createdAt).toLocaleDateString()}
                  </p>
                  <p>
                    Time:{new Date(singleData.createdAt).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
