import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import MainRoutes from "../routes/MainRoutes";

function App() {
  return (
      <Router>
        <MainLayout>
          <MainRoutes />
        </MainLayout>
      </Router>
  );
}

export default App;