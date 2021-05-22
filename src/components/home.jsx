import { useState } from "react";
import Navbar from "./navbar";
import SortButton from "./sort-button";
import { connect } from "react-redux";

const Home = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  const [sortedData, setSortedData] = useState([]);
  const sortData = () => {
    const sorted = [...data].sort((a, b) => {
      return a.email.localeCompare(b.email);
    });
    setSortedData(sorted);
  };

  let fakeKey = 0;
  return (
    <div>
      <Navbar />

      {data === null ? (
        <p>There is no user</p>
      ) : sortedData.length === 0 ? (
        <div>
          <SortButton sortData={sortData} />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">username</th>
                <th scope="col">data de nastere</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => {
                return (
                  <tr key={fakeKey++}>
                    <td>{user.email}</td>
                    <td>{user.dataNasterii}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <SortButton sortData={sortData} />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">username</th>
                <th scope="col">data de nastere</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((user) => {
                return (
                  <tr key={fakeKey++}>
                    <td>{user.email}</td>
                    <td>{user.dataNasterii}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

//  export default Home;

const mapStateToProps = (state) => {
  return {
    user: state.data,
  };
};

export default connect(mapStateToProps)(Home);
