// This function updates the "Managed by" information in all worksheets of the active spreadsheet
function updateManagedByInAllSheets() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = spreadsheet.getSheets();

  // Define the mapping between project IDs and managed by information
  var projectMappings = {
    "project-id-1": "IT Admin (Already Deactivated)",
    "big-query-112233": "BI Team ",
    "business-intelligence-2424241": "Marketing",
    // Add more project ID mappings here
  };

  // Loop through all worksheets in the spreadsheet
  for (var sheetIndex = 0; sheetIndex < sheets.length; sheetIndex++) {
    var sheet = sheets[sheetIndex];
    
    // Only process worksheets that include the term "Resource" in their name
    if (sheet.getName().indexOf("Resource") !== -1) {
      var data = sheet.getDataRange().getValues();
      var projectIdIndex = data[0].indexOf("Project Id"); // Find the column index for "Project Id"
      var managedByIndex = data[0].indexOf("Managed by"); // Find the column index for "Managed by"

      // Loop through rows of data (excluding the header row)
      for (var i = 1; i < data.length; i++) {
        var projectId = data[i][projectIdIndex]; // Get the project ID from the row
        
        // Check if the project ID exists in the mappings
        if (projectMappings.hasOwnProperty(projectId)) {
          data[i][managedByIndex] = projectMappings[projectId]; // Update the "Managed by" value
        }
      }

      // Update the worksheet with the modified data (excluding the header row)
      sheet.getRange(2, 1, data.length - 1, data[0].length).setValues(data.slice(1));
    }
  }
}
