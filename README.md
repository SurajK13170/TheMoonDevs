# TheMoonDevs

# Social Media Post Generator

A full-stack application that generates social media posts using Google's Generative AI and saves them to Google Sheets. Users can input a prompt to generate posts, which are stored in a Google Spreadsheet and retrieved for display.


## Features

- **Generate Social Media Posts**: Input a prompt to generate text for social media posts using Google's Generative AI.
- **Store Posts**: Save generated posts to a Google Spreadsheet.
- **Retrieve Posts**: Fetch and display stored posts from the Google Spreadsheet.
- **Error Handling**: Provides feedback for various errors.

## Technologies

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **APIs**: Google Generative AI, Google Sheets API

## Setup

### Prerequisites

- **Node.js**: Install Node.js (version 16 or higher).
- **Google Cloud Account**: Create a Google Cloud project and enable Google Sheets API.
- **Google Service Account**: Create a service account and download the JSON key file.
- **Environment Variables**: Set up the required environment variables.

### Backend Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/SurajK13170/TheMoonDevs

### Create and Configure credentials.json:

**Create a file named credentials.json in the Backend directory and paste your Google Service Account credentials:**

*Example*: 
{
  "type": "service_account",
  "project_id": "themoondevs-427816",
  "private_key_id": "ce13702f245a73d0f2ea7eec89f9110f0564944f",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCyiU2L5niYgYKb\nFW/8G8+GsebLxF0WPBWxS9Z7r0/jWGC0y69/m07ZxEBftpLJW8PPo9jCpEpz9XLK\nWZcmHOXJGnXKIlysSa04y9aZeVigYulAFk/V4ZJFRppyxiUJhiu1M3nC+Wq2fDFr\nxlUeribaZarxVOsePoMsVT91G6907KVwTDtC+1upoNSKUohMM9u6Y4J4KQyCD2TK\nBXWXxiSYxurNhlOZndU+ENdaKft+IZFSBQfypym/BORosZRrvnvw7jFvW48Og1Q1\nU4+Nd2SoX7RF0h82jA17hO69GcfheZ33Qw9VPTeAch8Dax8GP76qYkhjbVayQTCX\nEsQ7vOPnAgMBAAECggEAB2P/x6DcRl4ejZQo4YlvoRZnNpwVnp67ynxDCOB8QoMv\nHvzZjrTpxYj/LBckcTJxG+6fCN85onPJgWtxAme5Dr+78DNVZKbcWq5DQsaddfzj\n/qHjJkZ/l6aqLKXNgweycn5uZ6b9ap11ZvGttLUJoiZ70q6s2MC4RihgI/G9SHxb\napaOxs8hQNF8Dbvt4SkHHb69L2JWf74FTlw5+XLgDhDgOUIHbjuRMdLhFTLELeTw\nXLSI3lBdn7zUHTO4Ko0DA3Kfv07u5skzcK7awkkZjFvjLf77nkQMkvyEpCxslwde\n5DUaQ3mKa0nrOjA/Zx3Lf5OxH9X7FEeyesmJmqzDPQKBgQD8L73guAf+EM2/Yym7\n2kfjxCVYPugf44hZghW9e3dnmT42CMFpQVPY1XVV1B7NWyoD3kPBWlJqk+RsR6QV\nJbLHJAQwJOvGNKqTDBlqkFjsykReYBgnoAgLvaBe0RycUffVEcjgWA1eBpSbvuIH\nnlChU/S5wYLhc6twZyNRs4UOfQKBgQC1PHLRX5Q3WS+krbTA6fLyQOBOoByZvZIl\n5wXrobP6cwud/QsDnqr4n5pwqYBhISsPixqL0E10i1QcJ4GMla0SBhsPcj7tTn1t\nVLtaY9B7nqojkOZ2xofD04DrTeI/K+KLkw1hlLhQFbBLwbsIMJUSUIXY0y8gCWwf\ndUOONnHVMwKBgCoIHwKUSai7zj8G3Q7VO8Qnjf3eRjwCZVhdyRfSuz0GGotQ/EN5\nwurR8QOEHjol5qPMaMiSMEhZK+osKpnntZthUl1f2fgoEQH/M0FCm7+jmq+MHpqE\nHrMuQMts2PLo6oCVvUA/DMNOH3ix4ORaK6An6RMIwLKo37sVRZq5bATVAoGAD2XT\nW3aDYTBym8smUD2QJoTcidGQnH8+q3m1Rw+1+tFLa2DUTrpsTDNDK8862QW4Ytmu\np7JK4lv0CXBR0V/mFGHwap+KOR8yCNfqEwPn8pjIW70z12OGpVyS12sGjddsp+8W\nc/PutN8i20zaVxfJkoTE2mcW2eHzDbkoxCxb/4ECgYEApB+rqUjw62S6b1CAS7w2\nzIEFKTOPpkVRHbjvbWe2Amm6bx24FdO3ANJVOvnp49oQVgWYeIN/7DdMKhMafNhE\nqsateDxY8FkeFZBnJSOeYXlqt7beQj7DcPltgb2jgRq8NxVBcz05CBkXynvBTIcd\n7LwIrlCttjf5Fok+J1iLBTc=\n-----END PRIVATE KEY-----\n",
  "client_email": "themoondevs@themoondevs-427816.iam.gserviceaccount.com",
  "client_id": "108220823998244358707",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/themoondevs%40themoondevs-427816.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

### Create a .env File:
  **Create a .env file in the Backend directory and add the following environment variables:**

**env**
**PORT**=8080.
**googleSheetId** = "1VR2s-P7eLHPqqESzLdx3-4TIQy_yxbeL64liv-fZ1FQ".
**API_KEY**="AIzaSyDqdojJ25nmPcGfAp3bMFff1TIPO0-8vw4".

