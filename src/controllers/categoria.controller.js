import Categorias from '../models/Categorias.model'

export const findAllCategorias = async (req, res) => {
    try {
        const clientes = await Categorias.find();
        res.json(clientes);
    } catch (error) {
        res.status = 500;
        res.json({
            message: "Something goes wrang creating the categoria"
        })
    }
}

export const createCategoria = async (req, res) => {
    const categoria = new Categorias({ codigo: req.body.codigo, nombre: req.body.nombre })
    const categoriaSave = await categoria.save();
    res.json(categoriaSave);
}

export const findOneCategoria = async (req, res) => {
    const categoria = await Categorias.findById(req.params.id)
    res.json(categoria)
}

export const deleteCategoria = async (req, res) => {
    await Categorias.findByIdAndDelete(req.params.id)
    res.json({
        message: `${req.params.id} were deleted successfully`
    })
}

export const updateCategoria = async (req, res) => {
    const updatedcategoria = await Categorias.findByIdAndUpdate(req.params.id, req.body)
    res.json({ updatedcategoria })
}