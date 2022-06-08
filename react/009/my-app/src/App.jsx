import "./App.css";

function App() {
  const name = "nayoung";
  function age() {
    return 10;
  }
  const someStyle = { backgroundColor: "black", color: "white" };
  return (
    <div>
      <h1 className="one">hello world</h1>
      <h1 style={{ backgroundColor: "black", color: "white" }}>hello world</h1>
      <h1>
        hello {name} {age()}
      </h1>
      <h1 style={someStyle}>hello world</h1>
    </div>
  );
}

export default App;
