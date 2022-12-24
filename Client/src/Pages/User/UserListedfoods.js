import React, { useState, useEffect } from "react";

export const UserListedfoods = () => {
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    const response = await fetch("/api/v1/tours/");
    const json = await response.json();
    console.log(json.data.data);

    return json.data.data;
  };
  useEffect(() => {
    let res = [];
    const insidefunction = async () => {
      res = await fetchdata();
    };
    insidefunction();
    console.log("gvghhgh", res);
    const responsedata = [];
    Array.from(res).forEach((r) => {
      r.fooddetails.forEach((food) => {
        responsedata.push({
          text: food.text,
          number: food.number,
          mobile: r.mobile,
          description: r.description,
        });
      });
    });
    setData(responsedata);
  }, []);
  console.log(data);

  return (
    <div className="sidebar">
      <div>
        {data.map((d) => (
          <ul>
            <li>{d.mobile}</li>
            <li>{d.description}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
