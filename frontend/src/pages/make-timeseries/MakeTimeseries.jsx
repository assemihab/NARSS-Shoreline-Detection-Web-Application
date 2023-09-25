import GoogleMap from "../../components/Google-Map/GoogleMap";
import Header from "../../components/Header/Header";
import InputField from "../../components/InputField/InputField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import TopSidebar from "../../components/TopSidebar/TopSidebar";
import "./make-timeseries.css";

const MakeTimeseries = () => {
  return (
    <>
      <Header />
      <div className="make-timeseries">
        <div className="mti-info">
          <TopSidebar idx={4} />
          <form className="mti-items">
            <InputField title={"Site Name:"} id={"mti-sn"} type={"text"} />
            <InputField
              title={"Switch Transect Direction:"}
              id={"std"}
              type={"checkbox"}
            />
            <InputField
              title={"Starting Index:"}
              id={"mti-si"}
              type={"number"}
            />
            <SubmitButton
              title={"Create Timeseries"}
              icon={"bi bi-calendar2-check"}
            />
          </form>
        </div>
        <GoogleMap />
      </div>
    </>
  );
};

export default MakeTimeseries;
