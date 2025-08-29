import React, { useEffect, useState } from "react";
import googleURL from "../data/googleURL.json";
function TotalBalance() {
  const [data, setData] = useState(null);
  const url = googleURL[0].JsonViewAPi;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  if (!data) {
    return <i className="fa-solid fa-arrow-rotate-right fa-spin"></i>; // 
  }

  const totalBasic = data.reduce((sum, item) => sum + (Number(item.basic) || 0), 0);
  const totalBouns = data.reduce((sum, item) => sum + (Number(item.bonus) || 0), 0);
  const totalMyBalance = totalBouns + totalBasic;

  return <span>{totalMyBalance.toLocaleString("en-US")}</span>;
}

export default TotalBalance;
