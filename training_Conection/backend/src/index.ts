import "reflect-metadata";
import { app, port } from './app';
import { AppDataSource } from './db';

//Tenta realizar a conexão com o BD com base no try catch
async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Conexão estabelecida...");
  
    app.listen(port, () => {
      console.log(`Api iniciada na porta http://localhost:${port}`)
    })
  } catch (error) { 
    console.error(error)
  }
}

main()


