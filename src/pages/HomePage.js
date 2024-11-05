import MainContent from "../components/homepage/MainContent";
import Sidebar from "../components/homepage/Sidebar";

export default function HomePage(){
  return (
    <main className="flex h-screen">
      <Sidebar/>
      <MainContent/>
    </main>
  );
}