import GoogleMap from "../../components/Google-Map/GoogleMap";
import Header from "../../components/Header/Header";
import InputField from "../../components/InputField/InputField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import TopSidebar from "../../components/TopSidebar/TopSidebar";
import "./get-lts.css";

const GetLTS = () => {
  return (
    <>
      <Header />
      <div className="get-lts">
        <div className="glts-info">
          <TopSidebar idx={5} />
          <form className="glts-items">
            <InputField title={"Site Name:"} id={"glts-sn"} type={"text"} />
            <InputField
              title={"Minimum Year:"}
              id={"glts-mny"}
              type={"number"}
            />
            <InputField
              title={"Maximum Year:"}
              id={"glts-mxy"}
              type={"number"}
            />
            <InputField title={"EPSG Code:"} id={"glts-epc"} type={"text"} />
            <SubmitButton
              title={"Make Linear Trends Shapefile"}
              icon={"bi bi-file-earmark-break"}
            />
          </form>
        </div>
        <GoogleMap />
      </div>
    </>
  );
};

export default GetLTS;
