const express = require("express")
const app = express()
const cors = require("cors")
const OpenAI = require("openai")
const axios = require("axios")
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { google } = require("googleapis")

app.use(express.json())
app.use(cors())
require("dotenv").config()
const PORT = process.env.PORT || 3000

const googleSheetId = process.env.googleSheetId;
console.log(googleSheetId)
const googleAuthClientEmail = process.env.GOOGLE_AUTH_CLIENT_EMAIL;
const googleAuthPrivateKey = process.env.googleAuthPrivateKey;

const genAI = new GoogleGenerativeAI(process.env.API_KEY);


const auth = new google.auth.GoogleAuth({
  keyFile: "./cred.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets"
})

const authClient = auth.getClient();

const sheets = google.sheets({ version: 'v4', auth: authClient });


app.post('/generate', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Missing prompt in request body' });
    }

    const model = await genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);

    const post = result.response.text();
    const timestamp = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      auth,
      spreadsheetId: googleSheetId,
      range: 'Sheet1!A:C',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, prompt, post]],
      },
    });

    res.json({ post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
})



// Fetch Posts
app.get('/posts', async (req, res) => {
  try {
    const result = await sheets.spreadsheets.values.get({
      auth,
      spreadsheetId: googleSheetId,
      range: 'Sheet1!A:C', // Adjust range as needed
    });

    const rows = result.data.values || [];
    const posts = rows.map(row => ({
      timestamp: row[0],
      prompt: row[1],
      post: row[2],
    }));

    res.json({ posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});





app.listen(PORT, () => console.log(`Server running on port ${PORT}`))