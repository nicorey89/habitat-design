const controller ={
    index: (req, res) => {
        res.render("index")
    },
    search: (req,res) => {
        res.render("cocinas")
    },
    categoria: (req,res) => {
        res.render("accesorios")
    },
    categorias: (req,res) => {
        res.render("vestidores")
    },
    subcategoria: (req,res) => {
        res.render("nuestros-trabajos")
    },
    sobreNosotros: (req,res) => {
        res.render("sobre-nosotros")
    },
    
}

module.exports = controller;