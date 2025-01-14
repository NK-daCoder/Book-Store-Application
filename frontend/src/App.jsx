import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainHeader from "./components/MainHeader";
import Discovery from "./components/Discovery";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <>
      {/* 
        The AuthProvider has a children property thats used within the 
        function note that the implementation that the children property gets populated
        by the other elements so we dont have to define a children property like such <AuthProvider children="">....
      */}
      <AuthProvider>
        <section className="flex h-screen gap-2 bg-gray-100 font-secondery-font-family !text-sm">
          <Header className="sticky top-0 h-full bg-white z-10" />

          {/* the outlet reads the cjildren elements from the router.jsx array */}
          <main className="w-full bg-white p-2 flex flex-col gap-3 overflow-y-auto">
            <Outlet />
            <footer>
              <section>
                <h2 className="text-center p-2">&copy; All Rights Reserved By The Book Alchemist</h2>
              </section>
            </footer>
          </main>
          <aside className="w-56 sticky top-0 h-screen bg-gray-50 z-10">
            {/* Sidebar content */}
          </aside>
        </section>
      </AuthProvider>
    </>
  )
}

export default App
