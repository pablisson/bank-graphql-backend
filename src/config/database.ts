import mongoose from "mongoose"; // ODM para MongoDB, permite trabalhar com models

export const connectDatabase = async () => {
  const mongoUri =
    process.env.MONGO_URI || "mongodb://localhost:27017/backend-relay";
  // Pega a URI do Mongo do .env ou usa uma URI padrão local

  try {
    await mongoose.connect(mongoUri); // Tenta conectar com o banco de dados
    console.log("MongoDB conectado com sucesso.");
  } catch (error) {
    console.error("Erro na conexão com o MongoDB:", error); // Loga erro caso conexão falhe
    process.exit(1); // Encerra o processo com erro
  }
};
