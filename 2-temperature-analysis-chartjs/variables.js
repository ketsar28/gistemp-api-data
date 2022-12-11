const variables = function (data) {
  const comma = data.split(",");
  const colsYear = comma[0];
  const colsTemps = comma[1];
  const colsTemps2 = comma[5];
  const colsTemps3 = comma[8];
  return { colsYear, colsTemps, colsTemps2, colsTemps3 };
};

export { variables };
