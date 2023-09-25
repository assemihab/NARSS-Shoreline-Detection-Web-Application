import GoogleMap from "../../components/Google-Map/GoogleMap";
import Header from "../../components/Header/Header";
import InputField from "../../components/InputField/InputField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import TopSidebar from "../../components/TopSidebar/TopSidebar";
import "./make-transects.css";

const MakeTransects = () => {
  return (
    <>
      <Header />
      <div className="make-transects">
        <div className="mt-info">
          <TopSidebar idx={3} />
          <form className="mt-items">
            <InputField
              title={"Alongshore Spacing:"}
              id={"as"}
              type={"number"}
            />
            <InputField
              title={"Cross-Shore Length:"}
              id={"csl"}
              type={"number"}
            />
            <InputField
              title={"Reference Shoreline Shapefile:"}
              id={"rshsh"}
              type={"file"}
              classes={"f-ip"}
            />
            <SubmitButton title={"Start"} icon={"bi bi-play-circle"} />
          </form>
        </div>
        <GoogleMap />
      </div>
    </>
  );
};

export default MakeTransects;
