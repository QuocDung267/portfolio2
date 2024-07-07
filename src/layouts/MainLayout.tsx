import { Fragment } from "react";
import Header from "../components/Header/Header";

function MainLayout({ children }) {
  return (
    <Fragment>
      <div className="bw_mainWeb">
        <Header />
        {children}
        {/* <Footer /> */}
      </div>
    </Fragment>
  );
}

export default MainLayout;
