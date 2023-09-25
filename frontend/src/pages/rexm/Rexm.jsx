import GoogleMap from "../../components/Google-Map/GoogleMap";
import Header from "../../components/Header/Header";
import InputField from "../../components/InputField/InputField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import TopSidebar from "../../components/TopSidebar/TopSidebar";
import "./rexm.css";

const Rexm = () => {
  return (
    <>
      <Header />
      <div className="rexm">
        <div className="rexm-info">
          <TopSidebar idx={8} />
          <form className="rexm-items">
            <InputField title={"Model Name:"} id={"rexm-mn"} type={"text"} />
            <InputField title={"Epochs:"} id={"rexm-ep"} type={"number"} />
            <InputField
              title={"Decay Epochs:"}
              id={"rexm-dep"}
              type={"number"}
            />
            <InputField
              title={"Continue Training:"}
              id={"rexm-ct"}
              type={"checkbox"}
            />
            <InputField
              title={"Continue Training at Epoch #:"}
              id={"rexm-ctn"}
              type={"text"}
            />
            <SubmitButton title={"Run"} icon={"bi bi-gear-wide-connected"} />
          </form>
        </div>
        <GoogleMap />
      </div>
    </>
  );
};

export default Rexm;
