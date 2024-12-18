import Buttons from "./components/Buttons";

function App() {
  return (
    <div>
      <Buttons color="success" onClick={() => console.log("Clicked")}>
        Click Here
      </Buttons>
    </div>
  );
}

export default App;
