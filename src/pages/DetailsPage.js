import Sidebar from "../components/homepage/Sidebar";
import Details from "../components/details/Details";



export default function HomePage(){
  return (
    <main className="flex h-screen">
      <Sidebar/>
      <Details/>
    </main>
  );
}