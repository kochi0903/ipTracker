import React from "react";
import "../css/table.css";
/* eslint eqeqeq: 0 */
const DataTable = (props) => {
  /*to replace abbreviation with fullname*/
  const contienentName = {
    AS: "Asia",
    NA: "North America",
    AF: "Africa",
    EU: "Europe",
    SA: "South America",
    AQ: "Antarctica",
    OC: "Australia/Oceania",
  };
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <td>Attributes</td>
            <td>Data</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Continent</td>
            <td>{contienentName[props.continent]}</td>
          </tr>

          <tr>
            <td>Country</td>
            <td>
              {props.country_code} | {props.country}{" "}
            </td>
          </tr>
          <tr>
            <td>State </td>
            <td>
              {" "}
              {props.region_code} | {props.region}{" "}
            </td>
          </tr>

          <tr>
            <td>City</td>
            <td>{props.city}</td>
          </tr>
          <tr>
            <td>ISP</td>
            <td>{props.org} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
