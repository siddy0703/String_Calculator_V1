import React from "react";

const StringCalculator = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>String Calculator</h2>
            <input
                type="text"
                value={''}
                placeholder="Enter numbers"
                style={{ padding: "10px", width: "300px" }}
            />
            <button style={{ marginLeft: "10px", padding: "10px 20px" }}>
                Calculate
            </button>
            <p style={{ color: "red" }}>Error</p>
            <p>Sum: 0</p>
        </div>
    );
};

export default StringCalculator;