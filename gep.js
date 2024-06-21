function doGet(e) {
  return HtmlService.createHtmlOutput('<h1>Transaction Logger Web App</h1><p>This web app logs Gmail transaction emails to a Google Sheet.</p>');
}

function extractTransactionDetails() {
  const threads = GmailApp.search('Subject:"Sent ₹"');
  if (threads.length === 0) {
    Logger.log('No transaction emails found.');
    return;
  }
  const message = threads[0].getMessages()[0];
  const emailBody = message.getPlainBody();
  
  const transactionIdMatch = emailBody.match(/Txn\. ID\s*:\s*(\w+)/);
  const amountMatch = emailBody.match(/₹\s*(\d+(\.\d{2})?)/);
  const messageMatch = emailBody.match(/Message\s*:\s*(.*?)\s*(Hi\s+\w+\s+\w+)/); // Match any message
  const paidToMatch = emailBody.match(/Paid To\s*([\w\s]+)\s*₹/i);
  
  if (!transactionIdMatch || !amountMatch || !paidToMatch) {
    Logger.log('Transaction ID, Amount, or Paid To information not found.');
    return;
  }
  
  const transactionId = transactionIdMatch[1];
  const amount = amountMatch[1];
  const messageContent = messageMatch ? messageMatch[1].trim() : "No message";
  const paidTo = paidToMatch[1].trim();
  logToSheet(transactionId, amount, messageContent, paidTo);
}

function logToSheet(transactionId, amount, messageContent, paidTo) {
  const sheetId = '1R8fL3HQqkA0n4NK5QXPd4TyC-7wu2fONzjuMYIV5q6U'; // Replace with your Sheet ID
  const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
  if (sheet.getLastRow() == 0) {
    appendToSheet(sheet);
  }
  sheet.appendRow([new Date(), transactionId, amount, messageContent, paidTo]);
}

function appendToSheet(sheet) {
  const newRow = ["DATE", "TRANSACTION ID", "AMOUNT", "MESSAGE CONTENT", "PAID TO"];
  sheet.appendRow(newRow);
}

function setupGmailTrigger() {
  ScriptApp.newTrigger('checkForNewTransactions')
    .timeBased()
    .everyMinutes(5) // Check every 5 minutes
    .create();
}

function checkForNewTransactions() {
  const processedIds = PropertiesService.getScriptProperties().getProperty('processedIds');
  const processedIdSet = processedIds ? new Set(processedIds.split(',')) : new Set();

  const threads = GmailApp.search('Subject:"Sent ₹"');
  if (threads.length === 0) {
    Logger.log('No new transaction emails found.');
    return;
  }

  threads.forEach(thread => {
    const messages = thread.getMessages();
    messages.forEach(message => {
      const messageId = message.getId();
      if (processedIdSet.has(messageId)) {
        Logger.log('Message already processed: ' + messageId);
        return;
      }

      const emailBody = message.getPlainBody();
      
      const transactionIdMatch = emailBody.match(/Txn\. ID\s*:\s*(\w+)/);
      const amountMatch = emailBody.match(/₹\s*(\d+(\.\d{2})?)/);
      const messageMatch = emailBody.match(/Message\s*:\s*(.*?)\s*(Hi\s+\w+\s+\w+)/); // Match any message
      const paidToMatch = emailBody.match(/Paid To\s*([\w\s]+)\s*₹/i);
      
      if (!transactionIdMatch || !amountMatch || !paidToMatch) {
        Logger.log('Transaction ID, Amount, or Paid To information not found.');
        return;
      }
      
      const transactionId = transactionIdMatch[1];
      const amount = amountMatch[1];
      const messageContent = messageMatch ? messageMatch[1].trim() : "No message";
      const paidTo = paidToMatch[1].trim();
      logToSheet(transactionId, amount, messageContent, paidTo);

      processedIdSet.add(messageId);
    });
  });

  PropertiesService.getScriptProperties().setProperty('processedIds', Array.from(processedIdSet).join(','));
}

function initialize() {
  setupGmailTrigger();
  PropertiesService.getScriptProperties().setProperty('processedIds', '');
}

// Run initialize() manually once to set up the trigger and initialize the processedIds property
