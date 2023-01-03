import React, { useState, useEffect } from "react";
import Loading from "../Loading";

import "./List.css";
export const UserListedfoods = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

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
          singleData.fooddetails.map((food, index) => (
            <div className="containe" key={index}>
              <div className="cards">
                <div className="card">
                  <h3>Name:{singleData.userid[0].name}</h3>
                  <p>Food:{food.text}</p>
                  <p>Quantity:{food.remaining}</p>
                  <p>Contact:{singleData.mobile}</p>
                  <p>
                    Date:{new Date(singleData.createdAt).toLocaleDateString()}
                  </p>
                  <p>
                    Time:{new Date(singleData.createdAt).toLocaleTimeString()}
                  </p>
                  <button
                    className="btn"
                    onClick={(event) =>
                      (window.location.href = "/Userpage/add/food")
                    }
                  >
                    Request
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
