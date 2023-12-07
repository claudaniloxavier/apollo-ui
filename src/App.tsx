// OrionKit lib Components
import { Button, TextField } from '../lib/main'

// STYLES
import './App.css'

function App() {

  return (
    <>
      <Button>
        OrionKit button
      </Button>

      <TextField type='text' placeholder='OrionKit input' label='Teste 1' hintMessage='abc' />
      <TextField type='text' placeholder='OrionKit input' label='Teste block' hintMessage='ola, hint aqui' block />
    </>
  )
}

export default App
