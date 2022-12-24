import React, { useState, useEffect } from "react";
import Loading from "../Loading";

export const Listedfoods = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const datefind = new Date(new Date().getTime() - 5 * 60 * 60 * 1000);
      console.log(datefind);
      const response = await fetch("/api/v1/tours/");
      const json = await response.json();

      setData(json.data.data);

      let temp = json.data.data;
      console.log(temp[0].fooddetails[0].text);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="sidebar">
      <div>
        {data.map((singleData) => (
          <h1>
            {singleData.fooddetails.map((food) => (
              <div>
                <p>{food.text}</p>
                <p>{food.number}</p>
                <p>{singleData.userid[0].name}</p>
              </div>
            ))}
          </h1>
        ))}
      </div>
    </div>
  );
};
