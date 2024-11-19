import "./Dashboard.scss";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Legend,
  Bar,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];

  return (
    <div className="dashboard-root container-fluid">
      <div className="dashboard-title">Home / Dashboard</div>
      <div className="dashboard-main mt-3">
        <div className="dashboard-cards mb-4">
          <div className="row list_cards">
            <div className="col-6 col-xxl-3">
              <div className="card_item border mb-4">
                <div className="card_title">Bookings hôm nay</div>
                <div className="card_quantity">
                  <span className="quantity">
                    8<span className="percent">-50%</span>
                  </span>
                </div>
                <div className="total">
                  Tổng : <span>6,888</span>
                </div>
              </div>
            </div>
            <div className="col-6 col-xxl-3">
              <div className="card_item border mb-4">
                <div className="card_title">Số lượt phòng</div>
                <div className="card_quantity">
                  <span className="quantity">
                    58<span className="percent">-50%</span>
                  </span>
                </div>
                <div className="total">
                  Tổng : <span>8,888</span>
                </div>
              </div>
            </div>
            <div className="col-6 col-xxl-3">
              <div className="card_item border">
                <div className="card_title">Số lượt khách</div>
                <div className="card_quantity">
                  <span className="quantity">
                    88<span className="percent">-50%</span>
                  </span>
                </div>
                <div className="total">
                  Tổng : <span>28,888</span>
                </div>
              </div>
            </div>
            <div className="col-6 col-xxl-3">
              <div className="card_item border">
                <div className="card_title">Doanh thu</div>
                <div className="card_quantity">
                  <span className="quantity">
                    80,000,000VND<span className="percent">-50%</span>
                  </span>
                </div>
                <div className="total">
                  Tổng : <span>8,888,888,888 VND</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard_charts border d-flex justify-content-center bg-light">
          <BarChart width={830} height={500} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#e20b3a" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
