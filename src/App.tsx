// OrionKit lib Components
import { Button, TextField, Form } from "../lib/main";

// STYLES
import "./App.css";

function App() {
  return (
    <>
      <Form.Root>
        <Form.Field size="small">
          <Form.Label>Small field</Form.Label>
          <Form.Control />
          <Form.Message>Helper text for small field</Form.Message>
        </Form.Field>

        <Form.Field>
          <Form.Label>Default field</Form.Label>
          <Form.Control />
          <Form.Message>Helper text for default field</Form.Message>
        </Form.Field>

        <Form.Field size="large">
          <Form.Label>Large field</Form.Label>
          <Form.Control />
          <Form.Message>Helper text for large field</Form.Message>
        </Form.Field>

        <Form.Row>
          <Form.Field>
            <Form.Label>Field row item</Form.Label>
            <Form.Control />
            <Form.Message>Helper text for row item field</Form.Message>
          </Form.Field>

          <Form.Field>
            <Form.Label>Field row item</Form.Label>
            <Form.Control />
            <Form.Message>Helper text for row item field</Form.Message>
          </Form.Field>

          <Form.Field>
            <Form.Label>Field row item</Form.Label>
            <Form.Control />
          </Form.Field>
        </Form.Row>

        <Form.Field>
          <Form.Label>Select field</Form.Label>
          <Form.Control asChild>
            <select name="test-select" id="myselect">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </Form.Control>
          <Form.Message>Helper Text for select</Form.Message>
        </Form.Field>
      </Form.Root>

      <br />
      <br />
      <br />
      <br />

      <Button>OrionKit button</Button>

      <TextField
        type="text"
        placeholder="OrionKit input"
        label="Teste 1"
        hintMessage="abc"
      />
      <TextField
        type="text"
        placeholder="OrionKit input"
        label="Teste block"
        hintMessage="ola, hint aqui"
        block
      />
    </>
  );
}

export default App;
