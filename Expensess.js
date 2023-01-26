import { Text, TextInput, Button, View } from "react-native";
import { useEffect, useState } from "react";
import { addDoc } from "firebase/firestore";
import { colRef } from "./Firebase";

export default function Expensess({ navigation, bud }) {
  const [totalExpensess, setTotalExpensess] = useState(Number);
  const [ExpensessName, setExpensessName] = useState();
  const [insertedExpensess, setInsertedExpensess] = useState();
  const [Expensess, setExpensess] = useState();
  const [ExpensessRefBudget, setExpensessRefBudget] = useState([]);

  const handleInput = () => {
    addDoc(colRef, {
      ExpensessName: ExpensessName,
      insertedExpensess: insertedExpensess,
    });
  };
  //   useEffect(() => {
  //     getDocs(ExpensessRef).then((response) => {
  //       const pt = response.docs.map((doc) => ({
  //         data: doc.data(),
  //         id: doc.id,
  //       }));
  //       setExpensessRefBudget([...pt]);
  //     });
  //   }, [ExpensessRefBudget]);
  //   const q = doc(db, "BudgetTracker", `${Budget.id}`);

  //   const handleInput = () => {
  //     );
  //   };

  return (
    <View>
      <Text>Add income</Text>
      <TextInput
        name="income"
        className="bg-blue-400 m-4"
        onChangeText={(e) => {
          setExpensessName(e);
        }}
        value={ExpensessName}
        placeholder="Freelance"
      />

      <TextInput
        value={insertedExpensess}
        onChangeText={(e) => setInsertedExpensess(e)}
        placeholder="2000"
      />
      <Text>Salary</Text>

      <TextInput
        onChangeText={(e) => {
          setExpensess(e);
        }}
        placeholder="Salary"
      />
      <Text>Total income</Text>

      <TextInput value={totalExpensess} placeholder="Total Expensess" />
      {ExpensessRefBudget.map((bud) => (
        <View>
          <Text>{bud.data.ExpensessName}</Text>

          <TextInput value={bud.data.insertedExpensess} />
        </View>
      ))}
      {/* <TextInput
        style={tw`bg-green-400 m-4`} // style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
        placeholder="Essentials"
      /> */}
      {/* <TextInput
        style={tw`bg-green-400 m-4`} // style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
        placeholder="Expensess"
      /> */}
      {/* <TextInput
        style={tw`bg-green-400 m-4`} // style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
        placeholder="Saving"
      /> */}
      <Button
        title="Submit"
        onPress={() => {
          handleInput(), navigation.navigate("Saving");
        }}
      >
        Submit
      </Button>
    </View>
  );
}
