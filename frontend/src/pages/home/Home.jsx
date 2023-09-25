import GoogleMap from "../../components/Google-Map/GoogleMap";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header idx={1} />
      <div className="home">
        <Sidebar />
        <GoogleMap />
      </div>
    </>
  );
};

export default Home;
