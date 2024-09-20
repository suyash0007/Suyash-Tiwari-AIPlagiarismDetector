# AI Powered Plagiarism Detector

## Overview
This project is an AI-powered plagiarism detector built with React and Vite. It allows users to upload PDF and Word documents, extracts text from them, and analyzes the content for potential plagiarism using the Gemini AI API. The results include a plagiarism score and highlighted sections of the text that have been flagged.

## Features
- Upload PDF and Word documents
- Extract text from uploaded files
- Analyze text for plagiarism
- Display plagiarism score and highlighted text
- Download plagiarism analysis report as a PDF

## Technologies Used

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Google Generative AI API
- **File Handling:** react-dropzone for file uploads
- **Text Extraction** pdfjs-dist and mammoth for pdf and word files respectively
- **PDF Generation:** jsPDF for report generation


## Getting Started

### Prerequisites
- Node.js (version 14 or later)
- npm or yarn
- Google Gemini AI API key

## Steps to Obtain the Gemini API Key
- Go to ([Google AI studio](https://aistudio.google.com/))
- Sign in with your Google account
- In the left side click on Get API Key
- Click on create API key
- If you do not have any exsisting project, click on Create an API key in a new project otherwise choose an exsisting project
- Copy the API key 

### Setup
1. Clone the repository
2. Install the dependencies: npm install
3. Create a .env file in the root directory of the project and add your API key, make sure you start you enviromental variable name with "VITE"
4. ## Steps to Obtain the Gemini API Key
- Go to ([Google AI studio](https://aistudio.google.com/))
- Sign in with your Google account
- In the left side click on Get API Key
- Click on create API key
- If you do not have any exsisting project, click on Create an API key in a new project otherwise choose an exsisting project
- Copy the API key 
5. To start the development server, run: npm run dev
