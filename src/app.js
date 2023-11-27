import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import categoriaRoutes from './router/categorias.routes';
import usuarioSesion from './router/SesionUsuarios.routes';
import serviciosRouter from './router/servicios.routes';

const app = express();

// seting
app.set('PORT', process.env.PORT || 8181);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my web aplication api' });
})

app.use('/api/categorias', categoriaRoutes);
app.use('/api/servicios', serviciosRouter);
app.use('/api/usuarioSesion', usuarioSesion);


export default app;