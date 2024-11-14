import Sidebar from "../components/homepage/Sidebar";
import Details from "../components/details/Details";



export default function DetailsPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Details/>
    </div>
  );
}
