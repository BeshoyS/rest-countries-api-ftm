import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { DataContextProvider } from "../context/DataContext";

function App() {
  return (
    <DataContextProvider>
      <div
        className={` min-h-screen bg-veryLightGray text-veryDarkBlue-500 dark:bg-veryDarkBlue-300 dark:text-white`}
      >
        <Navbar />
        <Outlet />
      </div>
    </DataContextProvider>
  );
}

export default App;
