import React, { useState } from 'react';
import axios from 'axios';
import './Calculator.css';

const Calculator = () => {
    const [billFile, setBillFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    // New state to hold the calculation result from the backend
    const [calculationResult, setCalculationResult] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setCalculationResult(null); // Clear previous results
            setBillFile(e.target.files[0]);
        }
    };

    const handleBillSubmit = async (e) => {
        e.preventDefault();
        if (!billFile) {
            alert('Please select a PDF file to upload.');
            return;
        }

        setIsUploading(true);
        setCalculationResult(null); // Clear previous results
        const formData = new FormData();
        formData.append('bill', billFile);

        try {
            const response = await axios.post('http://localhost:5001/api/calculate-from-bill', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            // Set the result to be displayed on the page
            setCalculationResult({ success: true, data: response.data });
        } catch (error) {
            const errorMessage = error.response ? error.response.data.error : 'An unexpected error occurred.';
            // Set the error to be displayed on the page
            setCalculationResult({ success: false, message: errorMessage });
            console.error('Error uploading file:', error);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="beautified-calculator-container">
            <div className="page-header">
                <h1>Carbon Footprint Calculator</h1>
                <p>Choose a method below to estimate your environmental impact.</p>
            </div>

            <div className="calculator-main-content">
                {/* Card for Electricity Bill Upload */}
                <div className="calculator-card">
                    <div className="card-header">
                        <span className="card-icon">📄</span>
                        <h3>Calculate from Bill</h3>
                    </div>
                    <p className="card-description">For the most accurate result, upload a PDF of your electricity bill.</p>
                    
                    <form className="upload-form" onSubmit={handleBillSubmit}>
                        <label htmlFor="billUpload" className="file-drop-zone">
                            {isUploading ? (
                                <div className="spinner"></div>
                            ) : (
                                <>
                                    <span className="file-icon">📤</span>
                                    <span>{billFile ? billFile.name : 'Click or drop PDF here'}</span>
                                </>
                            )}
                        </label>
                        <input
                            type="file"
                            id="billUpload"
                            accept=".pdf"
                            onChange={handleFileChange}
                            disabled={isUploading}
                        />
                        <button type="submit" className="btn-upload" disabled={isUploading || !billFile}>
                            {isUploading ? 'Analyzing...' : 'Analyze My Bill'}
                        </button>
                    </form>

                    {/* New section to display results or errors */}
                    {calculationResult && (
                        <div className={`result-display ${calculationResult.success ? 'success' : 'error'}`}>
                            {calculationResult.success ? (
                                <>
                                    <h4>✅ Analysis Complete</h4>
                                    <p>Total Units Detected: <strong>{calculationResult.data.total_units}</strong></p>
                                    <p>Your Carbon Credits Need is: <strong>{calculationResult.data.carbon_credits_needed} tons</strong></p>
                                </>
                            ) : (
                                <>
                                    <h4>❌ Error</h4>
                                    <p>{calculationResult.message}</p>
                                </>
                            )}
                        </div>
                    )}
                </div>

                {/* You can add the manual calculator back here if you want */}
                {/* For now, it's commented out to highlight the new design */}
                {/*
                <div className="calculator-card">
                    <h3>Manual Calculator</h3>
                    ... your manual form here ...
                </div>
                */}
            </div>
        </div>
    );
};

export default Calculator;