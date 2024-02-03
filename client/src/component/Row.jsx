import React from "react";

function Row({ id, firstName, LastName, Email }) {
     return (
          <div
               className="grid__row"
               style={{
                    display: "flex",
                    gap: "1rem",
               }}
          >
               <span>{id}</span>
               <span>{firstName}</span>
               <span>{LastName}</span>
               <span>{Email}</span>
          </div>
     );
}

export default Row;
