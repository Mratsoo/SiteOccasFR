import { Outlet } from "react-router-dom";
import Nav2 from "../../nav/nav2";
import Footer from "../../footer/footer";
import "./basescreen.css"

const BaseScreen = () => {
  return (
    <div className="">
      
      <Nav2/>
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default BaseScreen;
