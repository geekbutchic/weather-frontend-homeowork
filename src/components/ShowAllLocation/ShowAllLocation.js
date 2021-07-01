import React from "react";
import "./ShowAllLocation.css"


function ShowAllLocation(props) {
  return (
    <div className="search" style={{ marginTop: 50 }}>
      Searched Weather Location
      {props.locationArray.map((item) => {
        return (
          <div key={item._id}>
            <span>
              {item.city} {item.country}
            </span>
            <button className="delete" onClick={() => props.handleDeleteByID(item._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default ShowAllLocation;
