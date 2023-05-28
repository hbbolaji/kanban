import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Board from "./pages/Board";
import { UtilityContext } from "./context/utilityContext";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  const { dark } = useContext(UtilityContext);
  const [sidebar, setSidebar] = useState<boolean>(true);
  const [mobileSidebar, setMobileSidebar] = useState<boolean>(false);
  return (
    <div className={`flex relative ${dark && "dark"}`}>
      {/* Mobile Sidebar */}
      {mobileSidebar ? (
        <div
          className="md:hidden fixed top-0 right-0 w-full h-screen bg-gray-900 bg-opacity-70 z-20"
          onClick={() => setMobileSidebar(false)}
        >
          <div
            className="w-5/6 sm:w-1/2 h-full bg-gray-50 dark:bg-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar closeMobileSidebar={() => setMobileSidebar(false)} />
          </div>
        </div>
      ) : null}

      {/* Tablet and Desktop Sidebar */}
      {sidebar ? (
        <aside className="hidden md:block h-screen bg-gray-50 dark:bg-slate-700 border-r border-r-gray-200 dark:border-r-slate-600 md:w-80 xl:w-96 fixed top-0 left-0 z-10">
          <Sidebar closeSidebar={() => setSidebar(false)} />
        </aside>
      ) : null}

      {/* Main Page */}
      <main
        className={`bg-slate-200 dark:bg-slate-900 flex-1 min-h-screen relative ${
          sidebar && "md:ml-80 xl:ml-96"
        }`}
      >
        {/* Header */}
        <header
          className={`h-16 md:h-20 bg-gray-50 dark:bg-slate-700 border-b border-b-gray-200 dark:border-b-slate-600 fixed top-0 right-0 w-full`}
        >
          <div className={`${sidebar && "md:ml-80 xl:ml-96"}`}>
            <Header
              sidebar={sidebar}
              openMobileSidebar={() => setMobileSidebar(true)}
              openSidebar={() => setSidebar(true)}
            />
          </div>
        </header>

        {/* Board Section */}
        <div className="mt-16 md:mt-20">
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
