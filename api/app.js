const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => { res.json({ message: "welcome2redipollApi" }) });

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Sunucu port ${PORT} 'de çalışıyor.`);
});