import List from "./components/List";
import { useEffect, useRef, useState } from "react";
import Form from "./components/Form";
import { Sub } from "./types";

interface appState {
  subs: Array<Sub>;
  newSubNumber: number;
}
const intial_state = [
  {
    nick: "Luis",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=Luis",
    description: "Este es un ejercicio de typescript",
  },
  {
    nick: "Carlos",
    subMonths: 4,
    avatar: "https://i.pravatar.cc/150?u=Carlos",
    description: "Este es un ejercicio de typescript",
  },
];

function App() {
  const [subs, setSubs] = useState<appState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<appState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSubs(intial_state);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
  };
  return (
    <>
      <div className="App" ref={divRef}>
        <List subs={subs} />
        <Form onNewSub={handleNewSub} />
      </div>
      ;
    </>
  );
}

export default App;
