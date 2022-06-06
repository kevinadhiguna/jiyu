// MLB AL MVP 2021 data
const al_mvp_2021 = [
  {
    id: "Zz1Dh",
    name: "Shohei Ohtani",
    age: 27,
    club: "Los Angeles Angels",
  },
  {
    id: "Qi6Kz",
    name: "Vladimir Guerrero jr.",
    age: 23,
    club: "Toronto Blue Jays",
  },
  { id: "Hj8Vo", name: "Marcus Semien", age: 31, club: "Toronto Blue Jays" },
];

// MLB AL Cy Young 2021 data
const al_cyyoung_2021 = [
  {
    id: "Nz7Be",
    name: "Robbie Ray",
    age: 30,
    club: "Toronto Blue Jays",
  },
  {
    id: "Vo8Vx",
    name: "Gerrit Cole",
    age: 31,
    club: "New York Yankees",
  },
  {
    id: "Tr7Qq",
    name: "Lance Lynn",
    age: 35,
    club: "Chicago WhiteSox",
  },
];

const App = () => {
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
    </>
  );
};

export default App;
