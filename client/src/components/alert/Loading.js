// import library
import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
// Init component
const Loading = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  return (
    loading && (
      <div
        className="position-fixed w-100 h-100 text-center loading"
        style={{
          background: "#0008",
          color: "white",
          top: 0,
          left: 0,
          zIndex: 50,
        }}
      >
        {/* Image */}
        <svg width="205" height="250" viewBox="0 0 40 50">
          <polygon
            stroke="#fff"
            strokeWidth="1"
            fill="none"
            points="20,1 40,40 1,40"
          />
          {/* Text */}
          <text fill="#fff" x="5" y="47">
            Loading
          </text>
        </svg>
      </div>
    )
  );
};

export default Loading;
