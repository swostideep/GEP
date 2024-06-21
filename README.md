
## PhonePe Payments to Google Sheets

This project uses Google Apps Script to automate the process of extracting PhonePe payment notifications received in Gmail and logging them into a Google Sheet. Additionally, a dashboard is created to visualize the transactions.

### Features

- Automatically fetches PhonePe payment details from Gmail.
- Logs payment information into a Google Sheet.
- Provides a dashboard for visualizing transaction data.

### Installation Instructions

#### Google Apps Script Setup

1.Open Google Sheets and Create a New Sheet:

  - Open Google Sheets in your web browser.
  - Create a new sheet where you want to log PhonePe payments.
  
2.Navigate to Extensions > Apps Script:

  - In Google Sheets, go to the Extensions menu at the top.
  - Select Apps Script from the dropdown menu.
  
3.Replace the Code in the Script Editor:

  - In the Apps Script editor, delete any existing code.
  - Copy the content from script.js and paste it into the script editor.
  - copy the sheet id and past in the sheet id place in the code directed or replace with the existing sheet id in both the js code and the html code.
  
4.Save the Project:

  - Save the project with a name of your choice by clicking on File > Save or pressing Ctrl + S (Cmd + S on Mac).
  
5.Run the setup Function:

  - In the script editor, locate the setup function.
  - Run the setup function to authorize and initialize the script:
      
      function setup() {
        // Authorize and initialize the script
        initialize();
      }
6.Deploy the Web App:

  - Click on Deploy > New deployment.
  - Select Web app as the deployment type.
  - Choose the version of your script to deploy (select the most recent one if prompted).
  - Under Execute as, select Me.
  - Under Who has access, choose Anyone.
  - Click Deploy.
  - Copy the deployed web app URL.

7.Access the Dashboard:

  - Open the URL provided after deploying the web app in a web browser.
  - You'll see the dashboard with the transaction details.
  
Following these steps will guide you through the installation process, including adding the HTML dashboard, initializing the script, deploying the web app, and accessing the dashboard URL to view the dashboard showing transaction details.
#### Email Filters

1. Create a filter in Gmail to label all PhonePe payment emails.
2. Ensure the label name matches the one used in the script (`PHONEPE_LABEL`).

### Code Files

- [gep.js](gep.js): Contains the Google Apps Script code for fetching and logging payment details.
- [dashboard.html](dashboard.html): Contains the HTML code for the dashboard interface.

### Usage

1. Ensure the Google Apps Script is set up and authorized.
2. Emails labeled with the specified label will be processed, and payment details will be logged to the Google Sheet.
3. Open the `dashboard.html` file to view the dashboard and visualize the transaction data.

### Requirements

- Google Account
- Access to Google Sheets and Gmail
- Basic understanding of Google Apps Script

### Contributing

Contributions to this project are welcome. Please open an issue for any bugs you encounter or provide a fix or enhancement as a pull request.

[BSD.License]: https://img.shields.io/badge/License-BSD--3--Clause-blue.svg
