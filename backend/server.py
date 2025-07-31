import os
import time
import google.generativeai as genai
from flask import Flask, request, jsonify
from flask_cors import CORS
import werkzeug.utils

# --- Main PDF Processing Function ---
def extract_total_units_from_pdf(api_key, pdf_path):
    """
    Analyzes an electricity bill PDF using the Gemini API to extract total units consumed.
    """
    uploaded_file = None
    try:
        genai.configure(api_key=api_key)
        model = genai.GenerativeModel('gemini-1.5-flash')
        
        print("Uploading file to Gemini...")
        uploaded_file = genai.upload_file(path=pdf_path, display_name="Electricity Bill")
        print(f"File uploaded successfully: {uploaded_file.uri}")

        prompt = """
        Analyze the provided electricity bill PDF document.
        In the main billing details table, find the column labeled 'Billed Units'.
        Extract all the numerical values from this column.
        Return these values as a simple comma-separated string (e.g., '200.00, 200.00, 203.00').
        Do not include any other text, labels, or explanations in the response.
        """

        print("Sending request to Gemini for analysis...")
        response = model.generate_content([prompt, uploaded_file])
        cleaned_response = response.text.strip()
        return cleaned_response
    finally:
        if uploaded_file:
            print(f"Deleting uploaded file: {uploaded_file.name}")
            time.sleep(2)
            genai.delete_file(uploaded_file.name)
            print("File deleted successfully.")

# --- Flask Web Server Setup ---
app = Flask(__name__)
CORS(app)  # Allows the frontend to communicate with this server

# Create a folder to temporarily store uploaded files
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/api/calculate-from-bill', methods=['POST'])
def handle_bill_upload():
    if 'bill' not in request.files:
        return jsonify({"error": "No file part in the request"}), 400
    
    file = request.files['bill']
    if file.filename == '' or not file.filename.endswith('.pdf'):
        return jsonify({"error": "Please select a valid PDF file"}), 400

    try:
        filename = werkzeug.utils.secure_filename(file.filename)
        pdf_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(pdf_path)

        # ====================================================================
        # === IMPORTANT: INSERT YOUR GEMINI API KEY HERE ===
        # ====================================================================
        gemini_api_key = "AIzaSyDdY2MWmpUIs9YOg8JpSN0Mi3lxFSe94PM" 
        # ====================================================================
        
        if gemini_api_key == "YOUR_GEMINI_API_KEY":
            return jsonify({"error": "Gemini API key is not configured on the server"}), 500

        # Process the PDF to get billed units
        billed_units_str = extract_total_units_from_pdf(gemini_api_key, pdf_path)
        
        # Calculate the total from the comma-separated string
        total_units = sum([float(unit.strip()) for unit in billed_units_str.split(',')])
        
        # Simple example conversion: 1 credit = 1000 kg CO2, and assume 0.5 kg CO2 per unit
        carbon_credits_needed = (total_units * 0.5) / 1000

        return jsonify({
            "total_units": int(total_units),
            "carbon_credits_needed": round(carbon_credits_needed, 4)
        })

    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500
    finally:
        # Clean up by deleting the temporary file
        if 'pdf_path' in locals() and os.path.exists(pdf_path):
            os.remove(pdf_path)

if __name__ == '__main__':
    # Runs the server on http://localhost:5001
    app.run(debug=True, port=5001)