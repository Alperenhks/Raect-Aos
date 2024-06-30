import React from "react";
import Home from "./pages/Home";
import Example from "./pages/Example";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        image='https://picsum.photos/200/100'
        title="React AOS Deneme"
        description="React ile AOS Kütüphanesi kullanımı"
        link="https://michalsnik.github.io/aos/"
      />
      {/* <Home/> */}
      {/* <Example/> */}
    </div>
  );
}

export default App;
