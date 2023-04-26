const { google } = require("googleapis");

// Authenticate with Google and create a Sheets API client
const auth = new google.auth.GoogleAuth({
  keyFile: process.env.GOOGLE_API_KEY,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
const sheets = google.sheets({ version: "v4", auth });

// Update a cell in the sheet
const spreadsheetId = process.env.SPREADSHEET_ID;
const sheetName = "Sheet1";
const rangeName = "A1";
const newValue = "New Value";
const resource = {
  values: [[newValue]],
};
sheets.spreadsheets.values.update(
  {
    spreadsheetId: spreadsheetId,
    range: `${sheetName}!${rangeName}`,
    valueInputOption: "USER_ENTERED",
    resource: resource,
  },
  (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`${res.data.updatedCells} cells updated.`);
  }
);
