import React from "react";

const Logo = () => {
  return (
    <div style={styles.logoContainer}>
      <div style={styles.iconFrame}>
        {/* White Vector */}
        <div style={styles.whiteVector}></div>
        {/* Blue Vector */}
        <div style={styles.blueVector}></div>
      </div>
      <span style={styles.logoText}>Velo Drive</span>
    </div>
  );
};

const styles = {
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
  },
  blueVector: {
    position: "absolute",
    left: "50.02%",
    right: "0%",
    top: "0%",
    bottom: "34.88%",
    backgroundColor: "#006AFF",
    width: "100%",
    height: "100%",
    clipPath: "polygon(100% 0%, 100% 100%, 50% 100%)",
    zIndex: 1,
  },
  logoText: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 700,
    fontSize: "20px",
    color: "#3563E9",
  },
};

export default Logo;
