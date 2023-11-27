import { Router } from 'express'
import *as usuarioCtrl from '../controllers/SesionUsuarios.controller';

const router = Router();

router.post('/', usuarioCtrl.createUsuario);
router.get('/userOne/:usuario/:contrasenha', usuarioCtrl.findOneUsuario);
router.get('/userAll', usuarioCtrl.verifyToken, usuarioCtrl.findAllUsuario);
router.delete('/', usuarioCtrl.verifyToken, usuarioCtrl.deleteUsuario);
router.put('/', usuarioCtrl.updateUsuario);

export default router;