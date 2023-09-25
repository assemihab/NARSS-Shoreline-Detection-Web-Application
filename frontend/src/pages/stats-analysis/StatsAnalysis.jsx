import Header from "../../components/Header/Header";
import InputField from "../../components/InputField/InputField";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./stats-analysis.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const StatsAnalysis = () => {
  const data = {
    labels: ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17"],
    datasets: [
      {
        label: "Corn",
        data: [100000, 200000, 50000, 80000, 30000, 70000],
        borderColor: "#ff9800",
        backgroundColor: "rgba(255, 152, 0,0.5)",
        pointBorderColor: "#ff9800",
      },
      {
        label: "Cotton",
        data: [32000, 45000, 50000, 80000, 60000, 15000],
        borderColor: "#90caf9",
        backgroundColor: "rgba(144, 202, 249,0.5)",
      },
      {
        label: "Wheat",
        data: [130000, 98000, 125330, 70000, 110000, 80000],
        borderColor: "#ffde03",
        backgroundColor: "rgba(255, 222, 3,0.5)",
      },
      {
        label: "Rice",
        data: [80000, 90000, 50000, 30000, 50000, 70000],
        borderColor: "#c2defd",
        backgroundColor: "rgba(194, 222, 253,0.5)",
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Crop Area(unit: km^2)",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 3000000,
        ticks: {
          stepSize: 500000,
        },
      },
    },
    layout: {
      padding: 10,
    },
  };
  const pieData = {
    labels: ["Corn", "Cotton", "Wheat", "Rice"],
    datasets: [
      {
        data: [10000, 20000, 30000, 40000],
        backgroundColor: [
          "rgba(255, 152, 0,0.5)",
          "rgba(144, 202, 249,0.5)",
          "rgba(255, 222, 3,0.5)",
          "rgba(194, 222, 253,0.5)",
        ],
      },
    ],
  };
  const pieOptions = {
    plugins: {
      legend: {
        position: "top",
        display: true,
        align: "center",
        labels: {
          usePointStyle: true,
          boxWidth: 100,
        },
      },
      title: {
        display: true,
        text: "Crop Area(unit: km^2)",
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };
  const tableDummyData = [
    {
      id: 1,
      name: "Rice",
      province: "Ad Daqahliah",
      county: "Al-Mansurah",
      years: [
        {
          2017: "18706.00000",
          2018: "18244.00000",
          2019: "18952.00000",
          2020: "19025.00000",
        },
      ],
      cropArea: "317.00",
      changeRate: "1.69%",
    },
    {
      id: 2,
      name: "Wheat",
      province: "Ad Daqahliah",
      county: "Al-Mansurah",
      years: [
        {
          2017: "45097.00000",
          2018: "43854.00000",
          2019: "43022.00000",
          2020: "44203.00000",
        },
      ],
      cropArea: "419.00",
      changeRate: "1.12%",
    },
    {
      id: 3,
      name: "Corn",
      province: "Ad Daqahliah",
      county: "Al-Mansurah",
      years: [
        {
          2017: "65423.00000",
          2018: "62147.00000",
          2019: "68642.00000",
          2020: "63124.00000",
        },
      ],
      cropArea: "-2937.00",
      changeRate: "-0.44%",
    },
    {
      id: 4,
      name: "Cotton",
      province: "Ad Daqahliah",
      county: "Al-Mansurah",
      years: [
        {
          2017: "13147.00000",
          2018: "13504.00000",
          2019: "13795.00000",
          2020: "13286.00000",
        },
      ],
      cropArea: "3046.00",
      changeRate: "2.19%",
    },
    {
      id: 5,
      name: "Rice",
      province: "Ad Daqahliah",
      county: "Al-Mansurah",
      years: [
        {
          2017: "75645.00000",
          2018: "79521.00000",
          2019: "74243.00000",
          2020: "72672.00000",
        },
      ],
      cropArea: "5682.00",
      changeRate: "1.42%",
    },
    {
      id: 6,
      name: "Wheat",
      province: "Ad Daqahliah",
      county: "Al-Mansurah",
      years: [
        {
          2017: "93547.00000",
          2018: "94321.00000",
          2019: "95348.00000",
          2020: "92136.00000",
        },
      ],
      cropArea: "2594.00",
      changeRate: "0.28%",
    },
    {
      id: 7,
      name: "Corn",
      province: "Ad Daqahliah",
      county: "Al-Mansurah",
      years: [
        {
          2017: "15678.00000",
          2018: "15895.00000",
          2019: "15492.00000",
          2020: "15324.00000",
        },
      ],
      cropArea: "3935.00",
      changeRate: "0.53%",
    },
    {
      id: 8,
      name: "Cotton",
      province: "Ad Daqahliah",
      county: "Al-Mansurah",
      years: [
        {
          2017: "53217.00000",
          2018: "57891.00000",
          2019: "54945.00000",
          2020: "56219.00000",
        },
      ],
      cropArea: "2285.00",
      changeRate: "1.50%",
    },
    {
      id: 9,
      name: "Rice",
      province: "Ad Daqahliah",
      county: "Al-Mansurah",
      years: [
        {
          2017: "18706.00000",
          2018: "18244.00000",
          2019: "18952.00000",
          2020: "19025.00000",
        },
      ],
      cropArea: "13168.00",
      changeRate: "3.00%",
    },
  ];
  return (
    <>
      <Header idx={2} />
      <div className="stats-analysis">
        <div className="sa-items">
          <div className="f-head">
            <div className="ip-fields">
              <div className="select-field">
                <span>Statistical Item:</span>
                <select>
                  <option disabled>Select Item</option>
                  <option value="crop-area">Crop Area</option>
                </select>
              </div>
              <InputField title={"Begin Time:"} id={"stats-bt"} type={"date"} />
              <InputField title={"End Time:"} id={"stats-et"} type={"date"} />
              <div className="select-field">
                <span>Province:</span>
                <select>
                  <option disabled>Select Province</option>
                  <option value="crop-area">Cairo</option>
                  <option value="crop-area">Giza</option>
                  <option value="crop-area">Alexandria</option>
                  <option value="crop-area">Bahira</option>
                </select>
              </div>
              <div className="select-field">
                <span>County:</span>
                <select>
                  <option disabled>Select County</option>
                </select>
              </div>
            </div>
            <div className="sub-btns">
              <div className="stat-btn">
                <i className="bi bi-search"></i>
                <span className="sbtitle">Query</span>
              </div>
              <div className="stat-btn">
                <i className="bi bi-arrow-clockwise"></i>
                <span className="sbtitle">Reset</span>
              </div>
              <div className="stat-btn">
                <i className="bi bi-download"></i>
                <span className="sbtitle">Save As</span>
              </div>
            </div>
          </div>
          <div className="f-middle">
            <div className="fm-box">
              <Line data={data} options={options}></Line>
            </div>
            <div className="fm-box">
              <Bar data={data} options={options}></Bar>
            </div>
            <div className="fm-box">
              <Pie data={pieData} options={pieOptions}></Pie>
            </div>
          </div>
          <div className="f-table">
            <table>
              <thead>
                <tr>
                  <td>#</td>
                  <td>Name</td>
                  <td>Province</td>
                  <td>County</td>
                  {[2017, 2018, 2019, 2020].map((y) => (
                    <td>{y}</td>
                  ))}
                  <td>{"Crop Area Change(unit: km^2)"}</td>
                  <td>{"Rate of change in crop area"}</td>
                </tr>
              </thead>
              <tbody>
                {tableDummyData.map((item, idx) => (
                  <tr key={item.id}>
                    <td>{idx + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.province}</td>
                    <td>{item.county}</td>
                    {item.years.map((year) =>
                      Object.values(year).map((y) => <td>{y}</td>)
                    )}
                    <td>{item.cropArea}</td>
                    <td>{item.changeRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="tb-pg">
              <span className="pg-btn">Back</span>
              <span className="nums">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <span className="pg-btn">{num}</span>
                ))}
              </span>
              <span className="pg-btn">Next</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsAnalysis;
