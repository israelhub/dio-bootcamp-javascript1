import { useState } from "react";
import { Container, Content } from "./styles.js";
import { Input } from "./components/Input/";
import { Button } from "./components/Button/";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleAddNumber = (number) => {
    if (currentNumber === '0') {
      setCurrentNumber(number);
    } else {
      setCurrentNumber(currentNumber + number);
    }
  };

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const result = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(result));
      setFirstNumber('0');
      setOperation('');
    }
  };

  const handleMultiplyNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('');
      setOperation('X');
    } else {
      const result = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(result));
      setFirstNumber('0');
      setOperation('');
    }
  };

  const handleDivideNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('');
      setOperation('/');
    } else {
      const result = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(result));
      setFirstNumber('0');
      setOperation('');
    }
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '') {
      switch(operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case 'X':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        default:
          break;
      }
    }
  };

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="C" onClick={handleClear} />
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={handleMinusNumbers} />
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={handleSumNumbers} />
          <Button label="/" onClick={handleDivideNumbers} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="X" onClick={handleMultiplyNumbers} />
          <Button label="=" onClick={handleEquals} />
      </Content>
    </Container>
  );
}

export default App;
