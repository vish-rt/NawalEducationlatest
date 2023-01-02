const mongoose = require("mongoose");
const conn_str = "mongodb+srv://admin:admin@cluster0.awxdryi.mongodb.net/users?retryWrites=true&w=majority";
mongoose.connect(conn_str, { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
});

const User = mongoose.model('user', userSchema);

exports.User = User;