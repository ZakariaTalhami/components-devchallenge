import Button from './components/button/Button';

function App() {
  return (
    <div>
      <Button size="sm" color="danger" shadowed>
        Default
      </Button>
      <br />
      <br />
      <Button variant="outline" size="md">
        Default
      </Button>
      <br />
      <br />
      <Button variant="text" color="danger" size="lg">
        Default
      </Button>
      <br />
      <br />
      <Button>Default</Button>
    </div>
  );
}

export default App;
