import Button from "./components/Button/Button";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  const [date, setDate] = useState("");

  const handleDate = () => {
    const currentDate = new Date()
    setDate(currentDate.toDateString())
  }



  return (
    <Container>
      <h2>{ date }</h2>

      <Button 
        btnText="Show Time" 
        isPublished={true} 
        post={{ id: "Upload" }} 
        handleDate={() => handleDate()}
        variant="desable"
      />
    </Container>
  );
}

export default App;
