function doGet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("daily"); 
  var data = sheet.getDataRange().getValues();
  var headers = data.shift();
  var json = data.map(function(row) {
    var obj = {};
    headers.forEach(function(header, i) {
      obj[header] = row[i];
    });
    return obj;
  });
  return ContentService.createTextOutput(JSON.stringify(json)).setMimeType(ContentService.MimeType.JSON);
}
