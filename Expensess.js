import { Text, TextInput, Button, View } from "react-native";
import { useEffect, useState } from "react";
import { addDoc } from "firebase/firestore";
import { colRef } from "./Firebase";
import { getDocs } from "firebase/firestore";
export default function Expensess({ navigation, bud }) {
  const [totalExpensess, setTotalExpensess] = useState(Number);
  const [ExpensessName, setExpensessName] = useState();
  const [insertedExpensess, setInsertedExpensess] = useState();
  const [Expensess, setExpensess] = useState();
  const [ExpensessRefBudget, setExpensessRefBudget] = useState([]);
  let TotalExp = Number(Expensess) + Number(insertedExpensess);

  useEffect(() => {
    getDocs(colRef).then((response) => {
      const pt = response.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setExpensessRefBudget([...pt]);
    });
  }, [ExpensessRefBudget]);

  const handleInput = (e) => {
    addDoc(colRef, {
      ExpensessName: ExpensessName,
      insertedExpensess: insertedExpensess,
    });
    setExpensess(e);

    setTotalExpensess(TotalExp);
    console.log(totalExpensess);
  };

  return (
    <View>
      <Text>Expensess</Text>

      <TextInput
        onChangeText={(e) => {
          setExpensess(e);
        }}
        placeholder="Expensess"
      />
      <Text>Add expensess</Text>
      <TextInput
        name="Expensess"
        className="bg-blue-400 m-4"
        onChangeText={(e) => {
          setExpensessName(e);
        }}
        value={ExpensessName}
        placeholder="Rent"
      />

      <TextInput
        value={insertedExpensess}
        onChangeText={(e) => setInsertedExpensess(e)}
        placeholder="2000"
      />
      <Button
        title="Submit"
        onPress={() => {
          handleInput();
        }}
      >
        Submit
      </Button>

      {/* <Text>Total Expensess</Text>
      <TextInput value={TotalExp} placeholder="Total Expensess" /> */}

      {ExpensessRefBudget.map((bud) => (
        <View key={bud.id}>
          <Text>{bud.data.ExpensessName}</Text>

          <TextInput value={bud.data.insertedExpensess} />
        </View>
      ))}

      <Button
        title="Continue"
        onPress={() => {
          navigation.navigate("Saving");
        }}
      >
        Continue{" "}
      </Button>
    </View>
  );
}
