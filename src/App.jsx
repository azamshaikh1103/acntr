import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
    </Provider>
  );
}

export default App;