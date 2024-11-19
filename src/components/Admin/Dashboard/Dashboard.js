import "./Dashboard.scss";
import {
  LineChart,
  XAxis,
  Tooltip,
  Line,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      name: "Jan",
      booking: 1000,
    },
    {
      name: "Feb",
      booking: 2000,
    },
    {
      name: "Mar",
      booking: 3000,
    },
    {
      name: "Apr",
      booking: 4780,
    },
    {
      name: "May",
      booking: 5890,
    },
    {
      name: "June",
      booking: 6390,
    },
    {
      name: "July",
      booking: 7490,
    },
    {
      name: "Aug",
      booking: 8890,
    },
    {
      name: "Sep",
      booking: 4390,
    },
    {
      name: "Oct",
      booking: 3490,
    },
    {
      name: "Nov",
      booking: 1890,
    },
    {
      name: "Dec",
      booking: 2390,
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
          <ResponsiveContainer width="80%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="booking" stroke="#f5606b" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
