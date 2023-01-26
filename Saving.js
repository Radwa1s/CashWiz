// import { Text } from "react-native";
// import { useState, useEffect } from "react";
// import { getDocs } from "firebase/firestore";
// import { ExpensessRef, colRef } from "./Firebase";

// export default function Saving() {
//   const [ExpensessRefBudget, setExpensessRefBudget] = useState([]);
//   const [Budget, setBudget] = useState([]);

//   useEffect(() => {
//     getDocs(ExpensessRef).then((response) => {
//       const pt = response.docs.map((doc) => ({
//         data: doc.data(),
//         id: doc.id,
//       }));
//       setExpensessRefBudget([...pt]);
//     });
//   }, []);
//   useEffect(() => {
//     getDocs(colRef).then((response) => {
//       const pt = response.docs.map((doc) => ({
//         data: doc.data(),
//         id: doc.id,
//       }));
//       setBudget([...pt]);
//     });
//   }, []);
//   console.log();
//   return <Text>Saving</Text>;
// }
import React from "react";
import { Text } from "react-native";

export default function Saving() {
  return <Text>Saving</Text>;
}
