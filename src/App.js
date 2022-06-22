import React from "react"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import "../node_modules/bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Footer />
    </div>
  );
}

export default App;
