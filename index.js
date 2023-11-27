import app from './src/app';
import './src/js/Conexion';

app.listen(app.get('PORT'), ()=>{
    console.log(`Servidor corriendo en el puerto: ${app.get('PORT')}`)
})