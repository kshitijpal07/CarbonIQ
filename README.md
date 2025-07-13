# 🌱 CarbonIQ

**Bringing Trust and Transparency to the Carbon Market with AI and Blockchain.**

[Link to Live Demo]    |    [Link to GitHub Repo]

### The Problem

The global carbon credit market is broken. It suffers from rampant **greenwashing**, a **lack of standardized verification**, and **high barriers to entry** that exclude small-scale environmental heroes. This creates a system where trust is low, fraud is high, and real climate impact is diluted.

### Our Solution: CarbonIQ

CarbonIQ is a decentralized platform that automates the verification, scoring, and tokenization of carbon offset projects. By combining AI-powered data analysis with the immutable trust of the blockchain, we create a transparent, fraud-proof, and universally accessible ecosystem for carbon credits.

### How It Works (A 4-Step Process)

1.  📤 **Submit Data**  
    Users upload evidence of their carbon-reducing activities, such as satellite coordinates of a new forest, sensor data, or energy audit documents.

2.  🤖 **AI Verification**  
    Our powerful machine learning models automatically analyze the submitted data. Computer vision models scan satellite imagery for tree growth, while NLP models process reports to validate claims.

3.  💎 **Score & Mint Token**  
    The AI calculates a confidence score and estimates the CO₂ offset in tonnes (TCO₂e). A successful verification triggers a smart contract, which mints a unique Carbon Credit Token (NFT) on the **Polygon** blockchain, with the proof stored immutably on **IPFS**.

4.  🌐 **View & Trade on Dashboard**  
    All tokenized credits appear on a public Web3 dashboard. Here, anyone can view the entire lifecycle of a credit—from creation to sale or retirement—ensuring complete transparency.

### Core Features (Hackathon Build)

*   **AI Verifier Engine:** A Python engine using **YOLOv5** for image analysis and **Hugging Face Transformers** for document parsing.
*   **Automated Carbon Scoring:** Calculates CO₂e savings based on verified data and **IPCC standards**.
*   **Blockchain Tokenization:** Solidity smart contracts mint ERC-721 tokens (NFTs) on the **Polygon** testnet for each verified ton of CO₂.
*   **Decentralized Evidence Storage:** All supporting documents and images are pinned to **IPFS** for permanent, tamper-proof storage.
*   **Transparent Web3 Dashboard:** A **React** DApp with **MetaMask** integration to view and manage carbon credit tokens.

### Technology Stack

*   **AI / Machine Learning:** Python, PyTorch, YOLOv5, Hugging Face, Pandas
*   **Blockchain:** Solidity, Hardhat, Polygon (Mumbai)
*   **Frontend & Web3:** React, Web3.js, Ethers.js
*   **Decentralized Storage:** IPFS

### The Impact

CarbonIQ is more than a hackathon project; it's a blueprint for a more equitable and effective climate finance system. By tackling greenwashing and democratizing access to the carbon market, we directly address the **UN Sustainable Development Goal 13 (Climate Action)** and pave the way for a trusted, transparent green economy.