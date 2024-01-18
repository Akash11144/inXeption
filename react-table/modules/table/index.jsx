import React from "react";
import "./Table.css";
import { data } from "../../mocks/index";

const Table = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Currency</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ fields }) => (
            <tr key={fields.currency}>
              <td data-label="Date">{fields.date}</td>
              <td data-label="Currency">{fields.currency}</td>
              <td data-label="Rate">{fields.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
