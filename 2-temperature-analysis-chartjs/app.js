// temperature data codes
const showDatas = async function () {
  const xLabels = [];
  const yTemps = [];
  const yTemps2 = [];
  const yTemps3 = [];
  const getSrc = await fetch("./src/ZonAnn.Ts+dSST.csv");
  const convert = await getSrc.text();
  const getData = convert.split("\n").slice(1);

  getData.forEach((data) => {
    const comma = data.split(",");
    const colsYear = comma[0];
    const colsTemps = comma[1];
    const colsTemps2 = comma[5];
    const colsTemps3 = comma[8];
    // push labels
    xLabels.push(colsYear);
    // push temps
    yTemps.push(parseFloat(colsTemps) + 2);
    yTemps2.push(parseFloat(colsTemps2) + 3);
    yTemps3.push(parseFloat(colsTemps3) + 4);
    // printout data
    console.log(colsYear, colsTemps);
  });
  return { xLabels, yTemps, yTemps2, yTemps3 };
};

// showDatas()
//   .then((result) => console.log("berhasil"))
//   .catch((err) => console.log("error"));

// ====================================

// sample code from chart js
const ctx = document.getElementById("myChart");

const chartUI = async function () {
  const content = await showDatas();
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: content.xLabels,
      datasets: [
        {
          label: "Data of Global",
          hoverBackgroundColor: "navy",
          data: content.yTemps3,
          borderWidth: 2,
        },
        {
          label: "Zonal Annual Means",
          hoverBackgroundColor: "red",
          data: content.yTemps2,
          borderWidth: 2,
        },
        {
          label: "Hemispheric Monthly Means",
          hoverBackgroundColor: "yellow",
          data: content.yTemps,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      stacked: false,
      plugins: {
        title: {
          display: true,
          text: "Chart.js Line Chart - Multi Axis",
        },
      },
      scales: {
        y: {
          ticks: {
            callback: function (value, index, ticks) {
              return value + "°";
            },
          },
        },
      },
    },
  });
};

chartUI();
