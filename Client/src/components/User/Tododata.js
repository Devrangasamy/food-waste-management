import React from "react";
import { useState, useEffect } from "react";
export const Tododata = async () => {
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
            value: food.text,
            label: food.text + food.number,
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
  // while (loading);
  return data;
};
// export default Tododata;
