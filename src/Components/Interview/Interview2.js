
const userData = [
  {
    firstName: "Dolly",
    lastName: "Singh",
    email: "heydolly@gmail.com",
    phone: 123412345
  },
  {
    firstName: "G k",
    lastName: "Sridhar",
    email: "heydolly@gmail.com",
    phone: 123412345
  }
];

const Interview2=()=> {
//   const getPhoneNumber = (acc, current) => {
//     if (userData.phone > 0) {
//       return console.log(userData.phone);
//     } else {
//       console.log(" ");
//     }
//   };

//   getPhoneNumber(userData.phone);

  return (
    <div className="App">
      <h1>User Data</h1>

      <table>
        <tr>
          <th>Full Name</th>
          <th>Email: </th>
          <th>Phone Number: </th>
        </tr>
        {userData.map((details) => {
          return (
            <>
              <tr>
                <td>
                  {details.firstName} {details.lastName}
                </td>

                <td>{details.email}</td>

                <td>{details.phone}</td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default Interview2;
