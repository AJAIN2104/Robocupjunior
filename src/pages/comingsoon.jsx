import React from "react";

export default function ComingSoon() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "#f5f7fa",
        padding: "20px",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "55px",
            fontWeight: "800",
            marginBottom: "15px",
          }}
        >
          Coming Soon
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#555",
            marginBottom: "25px",
          }}
        >
          Visit again for more details.
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          style={{
            padding: "12px 25px",
            border: "none",
            borderRadius: "8px",
            background: "#111",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}