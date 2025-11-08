// index.js

// Importar el cliente de Supabase
const { createClient } = require('@supabase/supabase-js');

// URL y clave de API de tu proyecto Supabase
const supabaseUrl = 'https://pxtxnhknnqtboolcegrr.supabase.co'; // Reemplaza con tu URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4dHhuaGtubnF0Ym9vbGNlZ3JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2MjI2NzQsImV4cCI6MjA3ODE5ODY3NH0.jMD54eoiTKLfdqbR12m2_63Jrmvnj8muuQsSqOdrAyo';  // Reemplaza con tu clave de API
const supabase = createClient(supabaseUrl, supabaseKey);

// Prueba de conexión con la base de datos
async function testConnection() {
    const { data, error } = await supabase
        .from('participante')  // Asegúrate de que esta tabla exista en Supabase
        .select('*');
    
    if (error) {
        console.error('Error al conectar con Supabase:', error);
    } else {
        console.log('Datos de Participante:', data);
    }
}

testConnection();
