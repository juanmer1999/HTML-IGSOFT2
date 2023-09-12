function configurarCampoCantidad(selectId, inputId) {
    const select = document.getElementById(selectId);
    const input = document.getElementById(inputId);
  
    select.addEventListener("change", function () {
      if (select.value === "sin-sopa" || select.value === "sin-jugo" || select.value === "sin-gas" || select.value === "sin-hel") {
        input.disabled = true;
        input.value = 0;
      } else {
        input.disabled = false;
        input.value = 1;
      }
    });
  }
  
  // Configura el campo de cantidad para sopas
  configurarCampoCantidad("sop", "cantidad-sopa");
  
  // Configura el campo de cantidad para bebidas
  configurarCampoCantidad("jug", "cantidad-jugos");
  // Configura el campo de cantidad para bebidas
  configurarCampoCantidad("gas", "cantidad-gas");


    // Configura el campo de cantidad para helado
  configurarCampoCantidad("hel", "cantidad-hel");

  
  const selectSopa = document.getElementById('sop');
  const selectGas = document.getElementById('gas');
  const selectJug = document.getElementById('jug');
  const selectHel = document.getElementById('hel');


  const inputCantidadSopa = document.getElementById('cantidad-sopa');
  const inputCantidadGas = document.getElementById('cantidad-gas');
  const inputCantidadJug = document.getElementById('cantidad-jugos');
  const inputCantidadHel = document.getElementById('cantidad-hel');

  
  const spanTotal = document.getElementById('total');

  function calculateTotal() {

    const preciosSopas = {
        'sin-sopa': 0,
        'costilla': 5000,
        'mondongo': 5000,
        'mote': 5000
      };

    const preciosgaseo = {
        'sin-gas': 0,
        'coca-cola': 2500,
        'manzana': 2500,
        'sprite': 2500
      };
      const preciosjugos = {
        'sin-jugo':0,
        'maracuya':2000,
        'fresa':2000,
        'mora':2000
      };
  
      const precioshelados = {
        'sin-hel':0,
        'vainilla':3000,
        'chocolate':3000,
        'fresa':3000
      };

    

    const cost_pollito = 10000;
    const cost_oing = 12000;
    const cost_lomito= 15000;

    const sopaSeleccionada = selectSopa.value;
    const cantidad_s = parseInt(inputCantidadSopa.value) || 0;

    const gaseosaSeleccionada = selectGas.value;
    const cantidad_g = parseInt(inputCantidadGas.value) || 0;


    const jugoSeleccionada = selectJug.value;
    const cantidad_j = parseInt(inputCantidadJug.value) || 0;

    const heladoSeleccionada = selectHel.value;
    const cantidad_h = parseInt(inputCantidadHel.value) || 0;
  

    //costosopa
    const costoTotal_s = preciosSopas[sopaSeleccionada] * cantidad_s;

     //costogaseosa
     const costoTotal_g = preciosgaseo[gaseosaSeleccionada] * cantidad_g;

      //costosjugo
    const costoTotal_j = preciosjugos[jugoSeleccionada] * cantidad_j;

     //costoshelado
     const costoTotal_h = precioshelados[heladoSeleccionada] * cantidad_h;
    


    const cant_pollito = parseFloat(document.getElementById("pol").value) || 0;
    const cant_oing = parseFloat(document.getElementById("ced").value) || 0;
    const cant_lomito = parseFloat(document.getElementById("lm").value) || 0;
    
    const costoTotal_pollito = cant_pollito * cost_pollito;
    const costoTotal_oing = cant_oing * cost_oing ;
    const costoTotal_lomito = cant_lomito * cost_lomito;

 
    

    const totalCost = costoTotal_pollito + costoTotal_oing + costoTotal_lomito + costoTotal_s + costoTotal_g + costoTotal_j + costoTotal_h ;

 

    document.getElementById("total-cost").textContent = `Costo total: $${totalCost.toFixed(2)}`;
    document.getElementById("modal-total-cost").textContent = `Costo total: $${totalCost.toFixed(2)}`;
  showModal();
}

function showModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  
  function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

