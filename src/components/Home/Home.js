import videoHomepage from "../../assets/videos/video-homepage.mp4";
import { Row, Col } from "react-bootstrap";
import "./Home.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const navigate = useNavigate();
  return (
    <div className="homepage-container">
      <div className="hero">
        <Row>
          <Col>
            <video autoPlay loop muted controls>
              <source src={videoHomepage} type="video/mp4" />
            </video>
          </Col>
          <Col className="hero-content">
            <div className="title-large">
              Get to know your customers with forms worth filling out
            </div>
            <p className="title-small">
              Collect all the data you need to understand customers with forms
              designed to be refreshingly different.
            </p>
            {!isAuthenticated ? (
              <button onClick={() => navigate("/login")} className="btn">
                Get started-it's free
              </button>
            ) : (
              <button onClick={() => navigate("/users")} className="btn">
                Doing Quiz Now
              </button>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
