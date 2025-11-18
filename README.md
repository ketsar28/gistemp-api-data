# 🌡️ GISTEMP API Data - Global Temperature Analysis

[![GitHub](https://img.shields.io/badge/GitHub-ketsar28-181717?style=for-the-badge&logo=github)](https://github.com/ketsar28/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ketsarali-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/ketsarali/)
[![HuggingFace](https://img.shields.io/badge/HuggingFace-ketsar-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)](https://huggingface.co/ketsar)

A comprehensive JavaScript-based application for analyzing and visualizing NASA's GISTEMP (Goddard Institute for Space Studies Surface Temperature Analysis) global temperature data. This project provides interactive data visualization tools to understand climate change trends through historical temperature records.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Data Source](#data-source)
- [Projects](#projects)
- [Connect With Me](#connect-with-me)
- [License](#license)

## 🌍 Overview

This repository contains two distinct implementations for analyzing global temperature data from NASA's GISTEMP dataset:

1. **Basic Temperature Analysis** - Console-based data parsing and analysis
2. **Interactive Chart Visualization** - Advanced multi-axis line chart using Chart.js

The project processes CSV data containing temperature anomalies across different geographical zones and time periods, making climate data accessible and understandable through visualization.

## ✨ Features

- 📊 **Interactive Data Visualization** - Dynamic charts powered by Chart.js
- 🔄 **Async Data Processing** - Efficient CSV data fetching and parsing
- 🌐 **Multiple Data Zones** - Analysis of Global, Hemispheric, and Zonal temperature data
- 📈 **Multi-Axis Charts** - Compare multiple temperature datasets simultaneously
- 🎯 **Responsive Design** - Charts adapt to different screen sizes
- 💡 **Clean Code Architecture** - Modular and maintainable JavaScript code

## 📁 Project Structure

```
gistemp-api-data/
│
├── 1-temperature-analysis/
│   ├── index.html              # Main HTML file
│   ├── app.js                  # Data parsing logic
│   └── src/
│       ├── data.csv            # Temperature data (simplified)
│       └── ZonAnn.Ts+dSST.csv  # NASA GISTEMP zonal data
│
├── 2-temperature-analysis-chartjs/
│   ├── index.html              # Chart visualization HTML
│   ├── app.js                  # Chart.js implementation
│   ├── variables.js            # Configuration variables
│   └── src/
│       ├── data.csv            # Temperature data (simplified)
│       └── ZonAnn.Ts+dSST.csv  # NASA GISTEMP zonal data
│
└── README.md                   # Project documentation
```

## 🛠️ Technologies Used

- **JavaScript (ES6+)** - Modern async/await syntax
- **Chart.js** - Professional chart library for data visualization
- **HTML5** - Semantic markup
- **CSS3** - Styling and responsive design
- **Fetch API** - Asynchronous data loading
- **NASA GISTEMP Data** - Authoritative climate data source

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ketsar28/gistemp-api-data.git
   cd gistemp-api-data
   ```

2. **Run with a local server**

   You need to run the project with a local server due to CORS restrictions with the Fetch API.

   **Option 1: Using Python**
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Option 2: Using Node.js (http-server)**
   ```bash
   npx http-server
   ```

   **Option 3: Using VS Code Live Server**
   - Install "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

3. **Access the applications**
   - Basic Analysis: `http://localhost:8000/1-temperature-analysis/`
   - Chart Visualization: `http://localhost:8000/2-temperature-analysis-chartjs/`

## 💻 Usage

### Basic Temperature Analysis

Navigate to the `1-temperature-analysis` folder and open `index.html` in your browser (via local server). Open the browser console to view the parsed temperature data.

```javascript
// Output format: [Year, Temperature Anomaly]
['1880', '-0.16']
['1881', '-0.07']
// ...
```

### Chart.js Visualization

Navigate to the `2-temperature-analysis-chartjs` folder and open `index.html` in your browser (via local server). You'll see an interactive multi-axis line chart displaying:

- **Global Temperature Data** - Worldwide temperature trends
- **Zonal Annual Means** - Temperature by latitude zones
- **Hemispheric Monthly Means** - Northern and Southern hemisphere data

**Chart Features:**
- Hover over data points for detailed information
- Interactive legend to show/hide datasets
- Responsive canvas that adapts to screen size
- Temperature values displayed in degrees (°)

## 📊 Data Source

This project uses data from **NASA GISTEMP** (Goddard Institute for Space Studies Surface Temperature Analysis):

- **Dataset**: ZonAnn.Ts+dSST.csv (Zonal Annual Temperature Anomalies)
- **Source**: [NASA GISS](https://data.giss.nasa.gov/gistemp/)
- **Description**: Combined land-surface air and sea-surface water temperature anomalies
- **Base Period**: Temperature anomalies relative to 1951-1980 mean
- **Coverage**: 1880 to present

### Data Columns

- `Year` - Year of measurement
- `Glob` - Global mean temperature anomaly
- `NHem` - Northern Hemisphere mean
- `SHem` - Southern Hemisphere mean
- Various latitude zones (90N-90S)

## 🎯 Projects

### Project 1: Temperature Data Parser
A foundational implementation that demonstrates:
- Fetching CSV data from local files
- Parsing CSV format using JavaScript
- Extracting specific columns (Year, Temperature)
- Console logging for data verification

### Project 2: Interactive Chart Visualization
An advanced visualization tool featuring:
- Multi-dataset comparison
- Chart.js integration
- Interactive tooltips and hover effects
- Customizable chart options
- Responsive design patterns

## 🤝 Connect With Me

I'm passionate about data science, climate analysis, and web development. Let's connect!

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-ketsar28-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ketsar28/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ketsar_Ali-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ketsarali/)
[![Instagram](https://img.shields.io/badge/Instagram-ketsar.aaw-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/ketsar.aaw/)
[![HuggingFace](https://img.shields.io/badge/HuggingFace-ketsar-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)](https://huggingface.co/ketsar)
[![Streamlit](https://img.shields.io/badge/Streamlit-ketsar28-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white)](https://share.streamlit.io/user/ketsar28)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Contact_Me-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://api.whatsapp.com/send/?phone=6285155343380&text=Hello!%20I%20found%20your%20GitHub%20profile)

</div>

### 📬 Get In Touch

- 💼 Professional inquiries: [LinkedIn](https://www.linkedin.com/in/ketsarali/)
- 🤖 AI/ML projects: [HuggingFace](https://huggingface.co/ketsar)
- 📱 Quick chat: [WhatsApp](https://api.whatsapp.com/send/?phone=6285155343380&text=Hello!%20I%20found%20your%20GitHub%20profile)
- 🌐 Web apps: [Streamlit](https://share.streamlit.io/user/ketsar28)

## 📝 Future Enhancements

- [ ] Add real-time data fetching from NASA GISTEMP API
- [ ] Implement date range filtering
- [ ] Add more chart types (bar, area, scatter)
- [ ] Create comparison tools for different time periods
- [ ] Add export functionality (PNG, PDF, CSV)
- [ ] Implement dark/light theme toggle
- [ ] Add detailed statistical analysis features
- [ ] Mobile-responsive UI improvements

## 🙏 Acknowledgments

- **NASA GISS** - For providing open-access climate data
- **Chart.js** - For the excellent charting library
- **GISTEMP Team** - For maintaining accurate temperature records

## 📄 License

```
MIT License

Copyright (c) 2025 Ketsar Ali

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

**Made with ❤️ by Ketsar Ali**

*Analyzing climate data, one degree at a time* 🌡️🌍

⭐ **If you find this project useful, please consider giving it a star!** ⭐

</div>
