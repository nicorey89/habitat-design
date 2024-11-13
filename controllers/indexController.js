const controller ={
    index: (req, res) => {
        res.render("index")
    },
    search: (req,res) => {
        res.render("cocinas")
    },
    categoria: (req,res) => {
        res.render("living")
    },
    categorias: (req,res) => {
        res.render("vestidores")
    },
    subcategoria: (req,res) => {
        res.render("office")
    },
    sobreNosotros: (req,res) => {
        res.render("sobre-nosotros")
    },
    
}

module.exports = controller;