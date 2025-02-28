const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://shuambhore007:sMlJzPx2sUfT48Hn@devtindercluster.ip4al.mongodb.net/DevTinderCluster")
}

module.exports = connectDB;
