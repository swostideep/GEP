<a href="https://GridTools.github.io/gridtools"><img src="https://raw.githubusercontent.com/GridTools/gridtools/gh-pages/v1.0/_static/logo.svg"/></a>
<br/><br/>
<a target="_blank" href="https://opensource.org/licenses/BSD-3-Clause">![License: BSD][BSD.License]</a>
![](https://github.com/GridTools/gridtools/workflows/CI/badge.svg?branch=master)
![](https://github.com/GridTools/gridtools/workflows/CMake-config/badge.svg?branch=master)
<a target="_blank" href="https://join.slack.com/t/gridtools/shared_invite/zt-1mceuj747-59swuowC3MKAuCFyNAnc1g"><img src="https://img.shields.io/badge/slack-join-orange?logo=slack"></a>
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/GridTools/gridtools) 

## PhonePe Payments to Google Sheets

This project uses Google Apps Script to automate the process of extracting PhonePe payment notifications received in Gmail and logging them into a Google Sheet. Additionally, a dashboard is created to visualize the transactions.

### Features

- Automatically fetches PhonePe payment details from Gmail.
- Logs payment information into a Google Sheet.
- Provides a dashboard for visualizing transaction data.

### Installation Instructions

#### Google Apps Script Setup

1. Open Google Sheets and create a new sheet for logging PhonePe payments.
2. Navigate to `Extensions` > `Apps Script`.
3. Replace the code in the script editor with the content from [script.js](path/to/script.js).
4. Save the project with a name of your choice.
5. Run the `setup` function to authorize and initialize the script.

#### Email Filters

1. Create a filter in Gmail to label all PhonePe payment emails.
2. Ensure the label name matches the one used in the script (`PHONEPE_LABEL`).

### Code Files

- [script.js](path/to/script.js): Contains the Google Apps Script code for fetching and logging payment details.
- [dashboard.html](path/to/dashboard.html): Contains the HTML code for the dashboard interface.

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
