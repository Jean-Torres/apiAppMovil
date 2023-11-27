import { Router } from "express";

import * as categoriaCtrl from '../controllers/categoria.controller'

const router = Router();

router.post('/', categoriaCtrl.createCategoria);

router.get('/', categoriaCtrl.findAllCategorias);

router.get('/:id', categoriaCtrl.findOneCategoria )

router.delete('/:id', categoriaCtrl.deleteCategoria)

router.put('/:id', categoriaCtrl.updateCategoria)

export default router;