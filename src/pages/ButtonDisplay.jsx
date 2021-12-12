import Button from "../components/button/Button";

const Header = (props) => <h2 style={{
  marginBottom: '0.5rem',
  marginTop: '0.5rem',
}} {...props}/>

const DisplayGrid = (props) => <div style={{
  padding: '1rem',
  display: 'grid',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  gap: '1rem'

}} {...props}/> 

const ButtonRow = (props) => <div style={{
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  gap: '1rem'
}} {...props}/> 

function ButtonDisplay() {
  return (
    <DisplayGrid>
      <Header>Button Sizes</Header>
      <ButtonRow>
        <Button size="sm" color="primary">Small Button</Button>
        <Button size="md" color="primary">Medium Button</Button>
        <Button size="lg" color="primary">Large Button</Button>
      </ButtonRow>
      <Header>Button Colors</Header>
      <ButtonRow>
        <Button>Default Button</Button>
        <Button color="primary">Primary Button</Button>
        <Button color="secondary">Secondary Button</Button>
        <Button color="danger">Danger Button</Button>
      </ButtonRow>
      <Header>Button Variants</Header>
      <ButtonRow>
        <Button color="primary" variant='text'>Text Button</Button>
        <Button color="primary" variant='outline'>Outline Button</Button>
        <Button color="primary" variant='solid'>Solid Button</Button>
      </ButtonRow>
      <Header>Disabled Button</Header>
      <ButtonRow>
        <Button disabled>Default Button</Button>
        <Button color="primary" disabled>Primary Button</Button>
        <Button color="secondary" disabled>Secondary Button</Button>
        <Button color="danger" disabled>Danger Button</Button>
      </ButtonRow>
      <Header>Shadowed Button</Header>
      <ButtonRow>
        <Button shadowed>Default Button</Button>
        <Button color="primary" shadowed>Primary Button</Button>
        <Button color="secondary" shadowed>Secondary Button</Button>
        <Button color="danger" shadowed>Danger Button</Button>
      </ButtonRow>
      <Header>Iconed Button</Header>
      <ButtonRow>
        <Button color="primary" leftIcon="home">Home Button</Button>
        <Button color="primary" rightIcon="login">Login Button</Button>
      </ButtonRow>
    </DisplayGrid>
  )
}

export default ButtonDisplay;