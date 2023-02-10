import React                from "react";
import Header               from "./Components/Header/Header";
import Main                 from "./Components/Main/Main";
import Footer               from "./Components/Footer/Footer";
// import NewHookForm          from "./Components/NewHookForm/NewHookForm";
// eslint-disable-next-line no-unused-vars
import total                from "./total.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      {/* <NewHookForm /> */}
    </div>
  );
}

export default App;
