import React from "react";
import {data} from "../src/data"


const pokeData = ({ id, name, type, base }) => {
  if (!id) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{name}</h5>
          </td>
          <td>
            <h5>{type}</h5>
          </td>
          <td>
            <h4>{base}</h4>
          </td>
        </tr>
      </tbody>
    </table>
  );
};