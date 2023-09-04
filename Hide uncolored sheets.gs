function hideUncoloredSheets() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = spreadsheet.getSheets();
  
  for (var i = 0; i < sheets.length; i++) {
    var sheet = sheets[i];
    var tabColor = sheet.getTabColor();
    
    if (tabColor === null) {
      // If the sheet has no tab color, hide it
      sheet.hideSheet();
    } else {
      // If the sheet has a tab color, show it
      sheet.showSheet();
    }
  }
}
