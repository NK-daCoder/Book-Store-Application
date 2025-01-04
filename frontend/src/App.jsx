import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainHeader from "./components/MainHeader";
import Discovery from "./components/Discovery";

const App = () => {
  return (
    <>
      <section className="flex h-screen gap-2 bg-gray-100 font-secondery-font-family !text-sm">
        <Header />

        <main className="w-full bg-white p-2 flex flex-col gap-3">
          {
            /* Outlet comes from react-router-dom and renders children array of the router.jsx */
            /* but you'll notice that the header and footer remains the same only when your type in the routes in the url eg:home you will see the element of the path children will be renderd */
          }
          <Outlet />
        </main>
        <aside className="w-56 bg-white">

        </aside>
      </section>
    </>
  )
}

export default App
