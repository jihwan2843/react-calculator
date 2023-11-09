import CalDelBtn from "./components/CalDelBtn";
import CalEnterBtn from "./components/CalEnterBtn";
import CalNumberBtn from "./components/CalNumberBtn";
import CalOperatorBtn from "./components/CalOperatorBtn";
import CallInput from "./components/CallInput";
import { useState } from "react";

const App = () => {
  const [result, setResult] = useState("0");
  const [temp, setTemp] = useState();
  const [operator, setOperator] = useState();

  return (
    <main className="bg-pink-200 min-h-screen flex justify-center items-center">
      <div className="bg-gray-300 px-8 py-12 rounded-lg shadow-md">
        <CallInput result={result} setResult={setResult} />
        <div className="grid grid-cols-4 mt-8 gap-4">
          <CalNumberBtn result={result} setResult={setResult} number="1" />
          <CalNumberBtn result={result} setResult={setResult} number="2" />
          <CalNumberBtn result={result} setResult={setResult} number="3" />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="+"
            bgColor="btn-style bg-blue-500 active:bg-blue-500"
          />
          <CalNumberBtn result={result} setResult={setResult} number="4" />
          <CalNumberBtn result={result} setResult={setResult} number="5" />
          <CalNumberBtn result={result} setResult={setResult} number="6" />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="-"
            bgColor="btn-style bg-red-500 active:bg-red-500"
          />
          <CalNumberBtn result={result} setResult={setResult} number="7" />
          <CalNumberBtn result={result} setResult={setResult} number="8" />
          <CalNumberBtn result={result} setResult={setResult} number="9" />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="*"
            bgColor="btn-style bg-orange-500 active:bg-orange-500"
          />
          <CalEnterBtn
            result={result}
            setResult={setResult}
            temp={temp}
            setTemp={setTemp}
            operator={operator}
            setOperator={setOperator}
          />
          <CalNumberBtn result={result} setResult={setResult} number="0" />
          <CalDelBtn result={result} setResult={setResult} />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="/"
            bgColor="btn-style bg-pink-500 active:bg-pink-500"
          />
        </div>
      </div>
    </main>
  );
};

export default App;
