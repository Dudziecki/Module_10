import React from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import { RouterSetup } from "./RouterSetup";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="App">
          <Header />
          <RouterSetup />

          <Footer>© 2024 sidekick</Footer>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
