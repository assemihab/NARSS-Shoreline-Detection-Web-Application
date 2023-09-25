import GoogleMap from "../../components/Google-Map/GoogleMap";
import Header from "../../components/Header/Header";
import InputField from "../../components/InputField/InputField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import TopSidebar from "../../components/TopSidebar/TopSidebar";
import "./shoreline-extraction.css";
const ShorelineExtraction = () => {
  return (
    <>
      <Header />
      <div className="shoreline-extraction">
        <div className="se-info">
          <TopSidebar idx={2} />
          <form className="se-items">
            <InputField title={"Model Name:"} id={"mn"} type={"text"} />
            <InputField title={"Site Name:"} id={"sn"} type={"text"} />
            <InputField title={"Epoch:"} id={"ep"} type={"text"} />
            <InputField title={"Clip Length:"} id={"cl"} type={"number"} />
            <InputField
              title={"Reference Shoreline:"}
              id={"rsh"}
              type={"checkbox"}
            />
            <InputField
              title={"Reference Region:"}
              id={"rre"}
              type={"checkbox"}
            />
            <InputField
              title={"Distance Threshold:"}
              id={"dt"}
              type={"number"}
            />
            <SubmitButton
              title={"Run and Process"}
              icon={"bi bi-gear-wide-connected"}
            />
          </form>
        </div>
        <GoogleMap />
      </div>
    </>
  );
};

export default ShorelineExtraction;
