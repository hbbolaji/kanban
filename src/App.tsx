import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Board from "./pages/Board";
import { UtilityContext } from "./context/utilityContext";

function App() {
  const { dark } = useContext(UtilityContext);
  return (
    <div className={`flex relative ${dark && "dark"}`}>
      <aside className="hidden md:block h-screen bg-orange-500 dark:bg-red-500 md:w-80 xl:w-96 fixed top-0 left-0 z-10"></aside>
      <main className="bg-blue-500 md:ml-80 xl:ml-96 flex-1 min-h-screen relative">
        <header className="h-20 bg-purple-500 fixed top-0 right-0 w-full"></header>
        <div className="mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Board />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
