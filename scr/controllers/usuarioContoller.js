// usuario controller recebe o usuario model e o express
exports.default = (app, usuarioModel) => {

    app.get('/usuario', (req, res) => {
        usuarioModel.find({}, (err, data) => {
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json(data);
            }
        });
    });
 
    app.post('/usuario', (req, res) => {
        let usuario = new usuarioModel(req.body);
        usuario.save((err, data) => {
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json(data);
            }
        });
    });
    
    app.put('/usuario/:id', (req, res) => {
        let id = req.params.id;
        usuarioModel.findByIdAndUpdate(id, req.body, (err, data) => {
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json(data);
            }
        });
    });
  
    app.delete('/usuario/:id', (req, res) => {
        let id = req.params.id;
        usuarioModel.findByIdAndDelete(id, (err, data) => {
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json(data);
            }
        });
    });
}