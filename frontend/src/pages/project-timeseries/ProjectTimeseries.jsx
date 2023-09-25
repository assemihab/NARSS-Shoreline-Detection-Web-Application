import GoogleMap from "../../components/Google-Map/GoogleMap";
import Header from "../../components/Header/Header";
import InputField from "../../components/InputField/InputField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import TopSidebar from "../../components/TopSidebar/TopSidebar";
import "./project-timeseries.css";

const ProjectTimeseries = () => {
  return (
    <>
      <Header />
      <div className="project-timeseries">
        <div className="pt-info">
          <TopSidebar idx={6} />
          <form className="pt-items">
            <InputField title={"Site Name:"} id={"pt-sn"} type={"text"} />
            <InputField
              title={"Starting Index:"}
              id={"pt-si"}
              type={"number"}
            />
            <InputField title={"Ending Index:"} id={"pt-ei"} type={"number"} />
            <InputField title={"Epochs:"} id={"pt-ei"} type={"number"} />
            <InputField title={"Batch Size:"} id={"pt-bs"} type={"number"} />
            <InputField
              title={"Number of LSTM Layers:"}
              id={"pt-nl"}
              type={"number"}
            />
            <InputField
              title={"Look-Back Value:"}
              id={"pt-lbv"}
              type={"number"}
            />
            <InputField
              title={"Number of Predictions:"}
              id={"pt-np"}
              type={"number"}
            />
            <InputField
              title={"Number of Repeats:"}
              id={"pt-nr"}
              type={"number"}
            />
            <InputField
              title={"Training Split:"}
              id={"pt-ts"}
              type={"number"}
            />
            <div className="select-field">
              <span>Prediction Frequency:</span>
              <select>
                <option disabled>Select Frequency</option>
                <option value="monthly">Monthly</option>
                <option value="seasonally">Seasonally</option>
                <option value="biannually">Biannually</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <SubmitButton title={"Run"} icon={"bi bi-gear-wide-connected"} />
          </form>
        </div>
        <GoogleMap />
      </div>
    </>
  );
};

export default ProjectTimeseries;
