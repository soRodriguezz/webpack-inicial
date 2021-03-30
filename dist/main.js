(() => {
  "use strict";
  ((e) => {
    console.log("Creando etiqueta H1");
    const t = document.createElement("h1");
    (t.innerText = "Hola, Sebastian"), document.body.append(t);
  })();
})();
