import { Router } from "express";

import * as productosCtrl from '../controllers/servicios.controller'

const router = Router();

router.post('/', productosCtrl.createProducto);
router.get('/', productosCtrl.findAllProducto);
router.get('/:id', productosCtrl.findOneProducto);
router.delete('/:id', productosCtrl.deleteProducto);
router.put('/:id', productosCtrl.updateProducto);

export default router;