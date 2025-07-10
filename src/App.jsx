import "./App.css";
import Logo from "./components/Logo/Logo";
import Form from "./components/Form/Form";
import PackingList from "./components/PackingList/PackingList";
import Stats from "./components/Stats/Stats";
import ItemsContextProvider from "./Context/itemsContext";

function App() {
  return (
    <div className="app">
      <ItemsContextProvider>
        <Logo />
        <Form />
        <PackingList />
        <Stats />
      </ItemsContextProvider>
    </div>
  );
}

export default App;
