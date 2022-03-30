import { useState } from 'react';
import Box from './Box';
import Input from './Input';

function App() {
  const [color, setColor] = useState('');
  const [hex, setHex] = useState('');

  return (
    <div className="App">
      <Box color={color} hex={hex} />
      <Input color={color} setColor={setColor} setHex={setHex} />
    </div>
  );
}

export default App;
