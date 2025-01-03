import express from 'express';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

const supabase = createClient<Database>(
  "https://mgdkoltzkakqquyohwkx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nZGtvbHR6a2FrcXF1eW9od2t4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4MDA2MjksImV4cCI6MjA1MTM3NjYyOX0.fmTXPQYB32FtAeX14J5APMaaFv8k82h3CMv1w--bKsw"
)

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.post('/po', async (req, res) => {
    const { error } = await supabase
        .from('movies')
        .insert({ id: 1, name: 'Denmark' })
    
    res.json({
        message: "Hello World!",
        error: error
     });

})

app.get('/', async (req, res) => {

    const { data, error } = await supabase
        .from('movies')
        .select()

    res.json({
        message: "Hello World!",
        data: data
     });
    
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})

export default app;