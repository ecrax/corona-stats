import moment from "moment";
import React, { useEffect, useState } from "react";
import { getData } from "utils/getData";
import "./index.module.css";

export const Stats: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      setData(await getData("https://disease.sh/v3/covid-19/all"));
    }

    loadData();
  }, []);

  console.log(data);

  return (
    <div id="statsTable">
      <table>
        <tr>
          <td>
            <h3>{new Intl.NumberFormat("en-US").format(data?.tests)}</h3>
            <p>Total Tests</p>
            <h4>
              {new Intl.NumberFormat("en-US").format(data?.testsPerOneMillion)}
            </h4>
            <p>per 1 Million</p>
          </td>
          <td>
            <h3>{new Intl.NumberFormat("en-US").format(data?.cases)}</h3>
            <p>Total Cases</p>
            <h4>
              {new Intl.NumberFormat("en-US").format(data?.casesPerOneMillion)}
            </h4>
            <p>per 1 Million</p>
          </td>
          <td>
            <h3>{new Intl.NumberFormat("en-US").format(data?.deaths)}</h3>
            <p>Total Deaths</p>
            <h4>
              {new Intl.NumberFormat("en-US").format(data?.deathsPerOneMillion)}
            </h4>
            <p>per 1 Million</p>
          </td>
        </tr>
        <tr>
          <td>
            <h4>{new Intl.NumberFormat("en-US").format(data?.active)}</h4>
            <p>Active</p>
          </td>
          <td>
            <h4>{new Intl.NumberFormat("en-US").format(data?.critical)}</h4>
            <p>Critical</p>
          </td>
          <td>
            <h4>{new Intl.NumberFormat("en-US").format(data?.recovered)}</h4>
            <p>Recovered</p>
          </td>
        </tr>
      </table>
      <p>
        Last updated: {moment(data?.updated).fromNow()} (
        {moment(data?.updated).format("dddd, MMMM Do YYYY, h:mm:ss a")})
      </p>
    </div>
  );
};
