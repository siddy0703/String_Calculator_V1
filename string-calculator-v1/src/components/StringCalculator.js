import React, { useState } from "react";

const StringCalculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>String Calculator</h2>
            <input
                type="text"
                value={input}
                placeholder="Enter numbers"
                style={{ padding: "10px", width: "300px" }}
            />
            <button style={{ marginLeft: "10px", padding: "10px 20px" }}>
                Calculate
            </button>
            <p style={{ color: "red" }}>{error}</p>
            <p>Sum: {result}</p>
        </div>
    );
};

export default StringCalculator;