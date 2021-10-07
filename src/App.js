import Display from "./components/Display";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div>
      <Routes />
      <GlobalStyle />
      <Display />
    </div>
  );
}

export default App;
