cargarPreguntas();

function cargarPreguntas() {
  let ID = 0;
  let html = "";

  for (const p of baseDePreguntas) {
    let opciones = [...p.distractores];
    opciones.push(p.respuesta);
    for (let i = 0; i < 4; i++) {
      opciones.sort(() => Math.random() - 0.5);
    }
    html += `
     <div id="encabezado-pregunta">
          ${
            p.ayuda
              ? `
               <a class="btn btn-primary" onclick="
                    Swal.fire({
                         title: 'Ayuda',
                         html: '${p.ayuda}',
                         imageUrl: '${p.ayudaImg}',
                         imageHeight: 200,
                    })
               ">
                    Ayuda
               </a>
               `
              : ""
          }
          <div class="pregunta" id="pregunta" style="margin: 20px;">
               ${p.pregunta}
          </div>
          ${
            p.imagen
              ? `
               <img src="${p.imagen}" style="width: 90%;height: 200px;object-fit: contain;">
               `
              : ""
          }
      </div>

     <div>
          <input type="radio" name="opcion-${ID}" id="opcion1-${ID}">
          <label class="javob" for="opcion1-${ID}" id="label1-${ID}"> ${opciones[0]} </label>
     </div>
     <div>
          <input type="radio" name="opcion-${ID}" id="opcion2-${ID}">
          <label class="javob" for="opcion2-${ID}" id="label2-${ID}"> ${opciones[1]} </label>
     </div>
     <div>
          <input type="radio" name="opcion-${ID}" id="opcion3-${ID}">
          <label class="javob" for="opcion3-${ID}" id="label3-${ID}"> ${opciones[2]} </label>
     </div>
     <div>
          <input type="radio" name="opcion-${ID}" id="opcion4-${ID}">
          <label class="javob" for="opcion4-${ID}" id="label4-${ID}"> ${opciones[3]} </label>
     </div>
     `;
    ID++;
  }
  document.getElementById("contenedor").innerHTML = html;
}

async function heFinalizado() {
  let contadorPuntos = 0;
  let html = `<ol style="display: inline-block; text-align: center;">`;
  for (let i = 0; i < baseDePreguntas.length; i++) {
    p = baseDePreguntas[i];
    for (let j = 1; j <= 5; j++) {
      if (j == 5) {
        await Swal.fire({
          title: "Noto'g'ri",
          text: "Iltimos Hamma bo'limlarni to'ldiring",
          icon: "warning",
        });
        return;
      }
      if (document.getElementById(`opcion${j}-${i}`).checked) {
        let txt = document.getElementById(`label${j}-${i}`).innerHTML;
        if (p.respuesta.trim() == txt.trim()) {
          html += `<li>To'g'ri</li>`;
          contadorPuntos++;
        } else {
          html += `<li>Noto'g'ri</li>`;
        }
        break;
      }
    }
  }
  html += `</ol>`;
  puntaje = (100 * contadorPuntos) / baseDePreguntas.length;
  html = `<h1 style="text-align: center;">Bajarilgan: ${puntaje.toFixed(2)}%</h1>` + html;
  document.getElementById("resumen").innerHTML = html;
  swal.fire({
    title: "Natija",
    html,
    icon: puntaje < 60 ? "error" : "success",
  });
}


