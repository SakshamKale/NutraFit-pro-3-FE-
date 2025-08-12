
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const moongoose=require('mongoose');
const {datarouter}=require('./Routes/User.Routes');
const { formrouter } = require('./Routes/Form');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama3-70b-8192',
        messages,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const reply = response.data.choices?.[0]?.message?.content || 'No reply';
    res.json({ reply });

  } catch (error) {
    console.error('Groq error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Groq API error' });
  }
});

moongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log("db connected");
  
}).catch((err)=>{
  console.log(err);
  
})


app.use('/data',datarouter);

app.use('/form',formrouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

