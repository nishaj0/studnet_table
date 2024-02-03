import React, { useEffect, useState } from "react";
import Row from "./component/Row";
import axios from "axios";

function App() {
     const [students, setStudents] = useState();
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          const fetchStudents = async () => {
               try {
                    const res = await axios("http://localhost:3000", {
                         headers: {
                              "Content-Type": "application/json",
                         },
                    });
                    setStudents(res.data);
               } catch (error) {
                    console.log(error);
               } finally {
                    setLoading(false);
               }
          };
          fetchStudents();
     }, []);

     return (
          <div
               className="gid"
               style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "1rem",
               }}
          >
               <Row
                    id={"ID"}
                    firstName={"FirstName"}
                    LastName={"LastName"}
                    Email={"Email"}
               />
               {loading ? (
                    <p>loading...</p>
               ) : (
                    students.map((student) => (
                         <Row
                              key={student.id}
                              id={student.id}
                              firstName={student.first_name}
                              LastName={student.last_name}
                              Email={student.email}
                         />
                    ))
               )}
          </div>
     );
}

export default App;
