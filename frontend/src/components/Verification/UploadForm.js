import React, { useState } from 'react';
import './UploadForm.css';

const UploadForm = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectType: '',
    location: '',
    description: '',
    estimatedOffset: ''
  });
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles([...files, ...uploadedFiles]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Project submitted for verification!');
      // Reset form
      setFormData({
        projectName: '',
        projectType: '',
        location: '',
        description: '',
        estimatedOffset: ''
      });
      setFiles([]);
    }, 2000);
  };

  return (
    <div className="upload-form">
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="projectName">Project Name</label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="projectType">Project Type</label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Type</option>
              <option value="renewable-energy">Renewable Energy</option>
              <option value="reforestation">Reforestation</option>
              <option value="methane-capture">Methane Capture</option>
              <option value="soil-carbon">Soil Carbon Sequestration</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="estimatedOffset">Estimated CO₂ Offset (tonnes)</label>
            <input
              type="number"
              id="estimatedOffset"
              name="estimatedOffset"
              value={formData.estimatedOffset}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="description">Project Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            required
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="files">Upload Evidence</label>
          <div className="file-upload">
            <input
              type="file"
              id="files"
              multiple
              accept="image/*,.pdf,.doc,.docx"
              onChange={handleFileUpload}
            />
            <div className="file-upload-text">
              <span>📁 Click to upload or drag and drop</span>
              <small>Images, PDFs, and documents accepted</small>
            </div>
          </div>
        </div>

        {files.length > 0 && (
          <div className="uploaded-files">
            <h4>Uploaded Files:</h4>
            {files.map((file, index) => (
              <div key={index} className="file-item">
                <span>{file.name}</span>
                <button type="button" onClick={() => removeFile(index)}>
                  ❌
                </button>
              </div>
            ))}
          </div>
        )}

        <button 
          type="submit" 
          className="submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit for Verification'}
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
