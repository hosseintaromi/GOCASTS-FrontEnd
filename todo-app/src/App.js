import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { useThemeContext } from './ThemeProvider';

function App() {
  const { mode, toggleMode } = useThemeContext();

  return (
    <Container>
      <Typography variant="h4">Current Mode: {mode}</Typography>
      <Button variant="contained" onClick={toggleMode}>
        Toggle Theme
      </Button>
    </Container>
  );
}

export default App;
