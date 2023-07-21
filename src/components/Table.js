const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satelite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {sat.map((sat, id) => {
                    return (
                        <tr key={id}>
                            <td>{sat.name}</td>
                            <td>{sat.type}</td>
                            <td>{sat.launchDate}</td>
                            <td>{sat.operational ? 'Active' : 'Inactive'}</td>
                        </tr>
                    )
                })}
        </tbody>
      </table>
  );
};

export default Table;