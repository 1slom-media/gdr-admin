import { Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import { RouterData } from "./index-data";
import logo from "../assets/image/logo-gerb-red.svg";
import { motion } from "framer-motion";

import "./styles.css";

function RouterComponent() {
  return (
    <>
      <div className="big_wrap">
        <Suspense
          fallback={
            <div className="logo-wrap">
              <img src={logo} alt="" />
              <motion.div
                className="box"
                animate={{
                  scale: [1, 1.5, 1.5, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["10%", "10%", "50%", "50%", "10%"]
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
            </div>
          }
        >
          <Routes>
            {RouterData.map((elem) => (
              <Route
                key={elem.id}
                path={elem.path}
                element={elem.component}
              />
            ))}
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default RouterComponent;
