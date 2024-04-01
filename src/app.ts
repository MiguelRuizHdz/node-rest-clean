import { Server } from "./server";

(() => {
  main();
})();

async function main() {
  // TODO:  await base de datos

  // TODO: inicio de nuestro server
  console.log("main");
  new Server({
    port: 4200
  })
    .start();
}
