const showDatas = async function () {
  const getSrc = await fetch("./src/data.csv");
  const convert = await getSrc.text();
  const getData = convert.split("\n").slice(1);

  getData.forEach((data) => {
    const comma = data.split(",");
    const colsYear = comma[0];
    const colsPercentage = comma[1];
    //   printout data
    console.log([colsYear, colsPercentage]);
  });
};

showDatas()
  .then((result) => console.log("berhasil"))
  .catch((err) => console.log("error"));
