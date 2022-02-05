import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./styles.scss";

function App(): JSX.Element {
  return (
    <div className="App" style={{display: 'flex', flexDirection: "row"}}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
