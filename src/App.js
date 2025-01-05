import React, { useState, useEffect } from "react";
import Header from "./components/header";
import DataTable from "./components/dataTable";
import Footer from "./components/footer";
import "./css/index.css";
import { MutatingDots } from "react-loader-spinner";

const App = () => {
  const loader = [
    {
      props: {
        color: "#3078db",
        secondaryColor: "#3078db",
        height: 100,
        width: 100,
      },
    },
  ];
  const [data, setData] = useState();
  const [query, setQuery] = useState("");
  const [IP, setIP] = useState();
  const [loading, setLoading] = useState(true);

  const validateIPaddress = (ipaddress) => {
    if (
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        ipaddress
      )
    ) {
      return true;
    }
    return false;
  };

  const fetchMyIP = async () => {
    try {
      let response = await fetch(`https://geolocation-db.com/json/`);
      response = await response.json();
      console.log("MY IP", response);
      setIP(response.IPv4);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchIPRelatedData = async () => {
    try {
      let data = await fetch(`https://ipapi.co/${IP}/json/`);
      data = await data.json();
      console.log("MY IPRelated Data", data);
      setData(data);
      if (data.ip !== "undefined") {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyIP();
  }, []);

  useEffect(() => {
    fetchIPRelatedData();
  }, [IP]);

  const submitHandle = async (event) => {
    try {
      event.preventDefault(); /**stop refreshing onSubmit */
      setLoading(true);
      if (validateIPaddress(query)) {
        let response = await fetch(`https://ipapi.co/${query}/json/`);
        response = await response.json();
        console.log("Response after Submit", response);
        setData(response);
        setLoading(false);
      } else {
        alert("Invalid IP Adress");
      }
    } catch (error) {
      console.log(error);
      alert("Something Went Wrong");
    }
  };

  const queryUpdate = (event) => {
    setQuery(event.target.value.replace(/^\s+|\s+$/g, ""));
  };

  return loading === true ? (
    <MutatingDots {...loader.props} ariaLabel="loading" />
  ) : (
    <>
      <Header />
      <form onSubmit={submitHandle}>
        <input
          type="search"
          placeholder="Enter IP address"
          className="ip_address_input"
          onChange={queryUpdate}
          defaultValue={data?.ip}
          title="Enter IP address"
          required
        />
        <input className="submit_button" type="submit" value="Search" />
      </form>

      <h2 className="IP">Detected : {data?.ip}</h2>

      <DataTable
        className="data"
        country={data?.country_name}
        country_code={data?.country_code}
        continent={data?.continent_code}
        city={data?.city}
        region={data?.region}
        region_code={data?.region_code}
        org={data?.org}
      />

      <Footer />
    </>
  );
};

export default App;
