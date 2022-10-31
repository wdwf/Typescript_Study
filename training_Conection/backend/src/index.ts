import "reflect-metadata";
import { app, port } from './app';
import { AppDataSource } from './db';

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Conecção estabelecida...");
  
    app.listen(port, () => {
      console.log(`Api iniciada na porta http://localhost:${port}`)
    })
  } catch (error) { 
    console.error(error)
  }
}

main()


