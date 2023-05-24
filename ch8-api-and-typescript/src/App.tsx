import styled from 'styled-components';
import DustBlock from './components/DustBlock';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const APIContainer = styled.div`
  width: 40vw;
  height: 80vh;
  background-color: #f7f7f7;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow-y: scroll;
`

function App() {
  return (
    <Container>
      <APIContainer>
        <h1>먼지 예보</h1>
        <DustBlock />
      </APIContainer>
    </Container>
  );
}

export default App;
