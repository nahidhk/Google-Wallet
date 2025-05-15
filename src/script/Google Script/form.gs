function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index'); 
}

function doPost(e) {
  try {
    const params = e.parameter;
    
    // গুগল শীটের নাম এবং ডেটা অ্যাড করা
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("daily");
    sheet.appendRow([
      params.date || "N/A",
      params.bonus || "N/A",
      params.basic || "N/A"
    ]);

    // রেসপন্স ফিরিয়ে দেয়া
  return HtmlService.createHtmlOutput("</h3>Add This Number <br> <button onclick='window.history.back()'>Back</button>");
    
  } catch (error) {
    return HtmlService.createHtmlOutput("<h3>ত্রুটি: " + error.message + "</h3><button onclick='window.history.back()'>Back</button>");
  }
}
