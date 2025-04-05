import React from "react";

const StringCalculator = () => {
    return (
        <div>
            <h2>String Calculator</h2>
            <input
                type="text"
                value={''}
                placeholder="Enter numbers"
            />
            <button>
                Calculate
            </button>
            <p>Sum: 0</p>
        </div>
    );
};

export default StringCalculator;