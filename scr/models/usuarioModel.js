

 export default class UsuarioModel {
    constructor(mongoose) {
        this.mongoose = mongoose;
        this.schema = this.mongoose.Schema({
            nome: String,
            email: String,
            senha: String
        });
        this.model = this.mongoose.model('usuario', this.schema);
    }
    find(callback) {
        this.model.find({}, callback);
    }
    create(data, callback) {
        let usuario = new this.model(data);
        usuario.save(callback);
    }
    update(id, data, callback) {
        this.model.findByIdAndUpdate(id, data, callback);
    }
    delete(id, callback) {
        this.model.findByIdAndDelete(id, callback);
    }
 }