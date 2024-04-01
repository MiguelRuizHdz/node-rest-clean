import { envs } from "./config";
import { Server } from "./server";

(() => {
  main();
})();

async function main() {
  // TODO:  await base de datos

  // TODO: inicio de nuestro server
  console.log("main");
  new Server({
    port: envs.PORT,
  })
    .start();
}
