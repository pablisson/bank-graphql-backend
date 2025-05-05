import mongoose from 'mongoose' // ODM para MongoDB, permite trabalhar com models

export const connectDatabase = async () => {
  // Pega a URI do Mongo do .env ou usa uma URI padrão local
  const mongoUri =
    process.env.MONGO_URI || 'mongodb://localhost:27017/backend-relay'

  try {
    // Tenta conectar com o banco de dados
    await mongoose.connect(mongoUri)
    console.log('MongoDB conectado com sucesso.')
  } catch (error) {
    // joga o erro no console caso conexão falhe
    console.error('Erro na conexão com o MongoDB:', error)
    process.exit(1) // Encerra o processo com erro
  }
}
