import "./App.css";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import List from "./components/ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "tanishk ",
      number: "7222996024",
    },
    {
      id: "2",
      name: "pawni",
      number: "9191919191",
    },
  ];

  return (
    <div className="App">
      <Header />
      <AddContact />
      <List contacts={contacts} />
    </div>
  );
}

export default App;
