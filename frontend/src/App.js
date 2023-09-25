import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/footer";
import DownloadImagery from "./pages/download-imagery/DownloadImagery";
import ShorelineExtraction from "./pages/shoreline-extraction/ShorelineExtraction";
import MakeTransects from "./pages/make-transects/MakeTransects";
import MakeTimeseries from "./pages/make-timeseries/MakeTimeseries";
import GetLTS from "./pages/get-lts/GetLTS";
import ProjectTimeseries from "./pages/project-timeseries/ProjectTimeseries";
import MergeProjections from "./pages/merge-projections/MergeProjections";
import Rexm from "./pages/rexm/Rexm";
import AboutUs from "./pages/about-us/AboutUs";
import StatsAnalysis from "./pages/stats-analysis/StatsAnalysis";
function App() {
  return (
    <BrowserRouter basename="/ShorelineExtraction-SP">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats-analysis" element={<StatsAnalysis />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/download-imagery" element={<DownloadImagery />} />
        <Route path="/shoreline-extraction" element={<ShorelineExtraction />} />
        <Route path="/make-transects" element={<MakeTransects />} />
        <Route path="/make-timeseries" element={<MakeTimeseries />} />
        <Route path="/get-lts" element={<GetLTS />} />
        <Route path="/project-timeseries" element={<ProjectTimeseries />} />
        <Route path="/merge-projections" element={<MergeProjections />} />
        <Route path="/rexm" element={<Rexm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
