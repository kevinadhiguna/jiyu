import { al_mvp_2021 } from "../mock-data/mvp-data";
import { al_cyyoung_2021 } from "../mock-data/cyyoung-data";

const PlainHtmlTable = () => {
  return (
    <>
      <h3>MLB - AL MVP 2021</h3>
      <table>
        <tr>
          <th>Player ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Club</th>
        </tr>
        {al_mvp_2021.map((data) => (
          <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.club}</td>
          </tr>
        ))}
      </table>
      <br />
      <h3>MLB - AL Cy Young 2021</h3>
      <table>
        <tr>
          <th>Player ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Club</th>
        </tr>
        {al_cyyoung_2021.map((data) => (
          <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.club}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default PlainHtmlTable;
