import React from "react";
import "../../Styles/Header.css";
import Typical from 'react-typical';
import { CgGoogleTasks } from "react-icons/cg";

const Header = () => {
  return ( 
    <React.Fragment>
      <div className="header-container">
          <h3 className="task-heading"><span className="logo"><CgGoogleTasks /></span> Task Tracker</h3>
          <div className="content">
              <Typical
                  wrapper="p"
                  loop={Infinity}
                  steps={
                      [
                          'Track your everyday activities!🥳', 1000, 
                          'Keep your tasks maintained!📚', 1000,
                          'No need to memorize what you have to do!🧠', 1000
                      ]
                  }
              />
          </div>
      </div>
    </React.Fragment>
  );
}
 
export default Header;