import Login from './controls/login/login.control';
import TopControl from './controls/layout/kokkok.top.conrol';
import './App.css';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="md">
      <TopControl />
    </Container>
  );
}

export default App;
