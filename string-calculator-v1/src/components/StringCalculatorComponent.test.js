import { render, screen, fireEvent } from "@testing-library/react";
import StringCalculator from "../components/StringCalculator";

describe("StringCalculator Component", () => {
    
    // Test 1: Check if the component renders correctly
    test("renders correctly", () => {
        render(<StringCalculator />); // Render the component
        
        // Check if the title exists
        expect(screen.getByText(/String Calculator/i)).toBeInTheDocument();
        
        // Check if the input box exists
        expect(screen.getByPlaceholderText(/Enter numbers/i)).toBeInTheDocument();
    });
});