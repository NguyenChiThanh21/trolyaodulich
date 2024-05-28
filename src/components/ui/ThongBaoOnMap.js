import React, { useRef, useEffect, useState } from "react";
import { CgDanger } from "react-icons/cg";
import { HiDocument } from "react-icons/hi2";
import { FaWindowClose } from "react-icons/fa";
const ThongBaoOnMap = ({ hide , setHide}) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    const fadeOutAnimation = () => {
      if (container) {
        container.style.opacity = "0.1";
      }
    };

    const fadeInAnimation = () => {
      if (container) {
        container.style.opacity = "1";
      }
    };
    const fadeInterval = setInterval(() => {
      fadeOutAnimation();
    
      setTimeout(() => {
        fadeInAnimation();
      }, 1000);
    }, 2000);
    
    setTimeout(() => {
      clearInterval(fadeInterval);
    }, 5000);

    return () => {
      clearInterval(fadeInterval);
    };
  }, [hide]);


  return (
    <>
      {!hide && (
        <div
          ref={containerRef}
          className="Container-ThongBao"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "23vw",
            height: 40,
            zIndex: 99999,
            right: 60,
            top: "15vh",
            backgroundColor: "#000",
            position: "absolute",
            transition: "opacity 0.8s ease-in-out",
          }}
        >
          <div
            className="Title-ThongBao"
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px",
            }}
          >
            <CgDanger style={{ marginRight: 10 }} />
            Thông báo
         
          </div>
          <div
            className="Content-ThongBao"
            style={{ backgroundColor: "white", padding: "10px" }}
          >
            Thời tiết có nắng, thuận lợi cho chuyến đi du lịch của bạn.
          </div>
        </div>
      )}
    </>
  );
};

export default ThongBaoOnMap;