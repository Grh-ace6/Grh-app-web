import Sidebar from "../components/homepage/Sidebar";
import Results from "../components/resultados/Results";

export default function ResultsPage(){
  return (
    <div className="flex h-screen">
      <Sidebar/>
      <Results/>
    </div>
  );
}