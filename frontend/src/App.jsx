import "./App.css";
import Card from "./components/comman/Card";
import Profile from "./components/comman/Profile";
import SideBarButton from "./components/comman/SideBarButton";
import Team from "./components/Team";

function App() {
  return (
    <main className="grid grid-cols-5 h-screen">
      <aside className="col-span-1 flex flex-col justify-between bg-white-off p-6">
        <div className="">
          <p className="text-3xl font-medium py-4">EMS-BREVO</p>

          <div className="">
            <SideBarButton text="Dashboard" />
            <SideBarButton text="Team" />
            <SideBarButton text="Connect" />
          </div>
        </div>

        <div>
          <Profile />
          <SideBarButton text="Settings" />
          <SideBarButton text="Logout"/>
        </div>
      </aside>
      <section className="col-span-4 h-full overflow-hidden">
        <Team/>
      </section>
    </main>
  );
}

export default App;
