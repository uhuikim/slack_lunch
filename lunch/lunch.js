const PublicGoogleSheetsParser = require("public-google-sheets-parser");

const spreadsheetId = "1-b2NppFw2DB4iLRc31euqWyX4Cb7pVEPkcoxBn9HMS4";
const parser = new PublicGoogleSheetsParser(spreadsheetId);

const lunchRandom = async () => {
  const menuList = await parser.parse();
  const menu = menuList[Math.floor(Math.random() * menuList.length)];

  return menu;
};

exports.lunchRandom = lunchRandom;