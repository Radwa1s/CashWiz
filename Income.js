import { Text, TextInput, Button, View } from "react-native";
import { useEffect, useState } from "react";
import { addDoc } from "firebase/firestore";
import { colRef } from "./Firebase";
import { getDocs } from "firebase/firestore";

export default function Income({ navigation }) {
  const [totalIncome, setTotalIncome] = useState(Number);
  const [inputName, setInputName] = useState();
  const [insertedIncome, setInsertedIncome] = useState();
  const [Salary, setSalary] = useState();
  const [Budget, setBudget] = useState([]);

  let TotalIncome = Number(Salary) + Number(insertedIncome);

  useEffect(() => {
    getDocs(colRef).then((response) => {
      const pt = response.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setBudget([...pt]);
    });
  }, [Budget]);

  const handleInput = (e) => {
    addDoc(colRef, {
      insertedIncomeName: inputName,
      insertedIncome: insertedIncome,
    });
    setSalary(e);
    setTotalIncome(TotalIncome);
    console.log(totalIncome);
  };

  return (
    <View>
      <Text>Salary</Text>

      <TextInput
        onChangeText={(e) => {
          setSalary(e);
        }}
        placeholder="Salary"
      />
      <Text>Add income</Text>
      <TextInput
        name="income"
        onChangeText={(e) => {
          setInputName(e);
        }}
        value={inputName}
        placeholder="ex.Freelance"
      />

      <TextInput
        value={insertedIncome}
        onChangeText={(e) => setInsertedIncome(e)}
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

      {Budget.map((bud) => (
        <View>
          <Text>{bud.data.insertedIncomeName}</Text>
          <TextInput value={bud.data.insertedIncome} />
        </View>
      ))}

      <Button
        title="Continue"
        onPress={() => {
          navigation.navigate("Expensess");
        }}
      >
        Continue{" "}
      </Button>
    </View>
  );
}
