import GoogleMap from "../../components/Google-Map/GoogleMap";
import Header from "../../components/Header/Header";
import InputField from "../../components/InputField/InputField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import TopSidebar from "../../components/TopSidebar/TopSidebar";
import "./merge-projections.css";

const MergeProjections = () => {
  return (
    <>
      <Header />
      <div className="merge-projections">
        <div className="mp-info">
          <TopSidebar idx={7} />
          <form className="mp-items">
            <InputField title={"Site Name:"} id={"mp-sn"} type={"text"} />
            <InputField
              title={"Switch Transect Direction:"}
              id={"mp-std"}
              type={"checkbox"}
            />
            <InputField
              title={"Start Transect ID:"}
              id={"mp-stid"}
              type={"number"}
            />
            <InputField
              title={"End Transect ID:"}
              id={"mp-etid"}
              type={"number"}
            />
            <InputField title={"EPSG Code:"} id={"mp-epc"} type={"text"} />
            <SubmitButton title={"Run"} icon={"bi bi-gear-wide-connected"} />
          </form>
        </div>
        <GoogleMap />
      </div>
    </>
  );
};

export default MergeProjections;
