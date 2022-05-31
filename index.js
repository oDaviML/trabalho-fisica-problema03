
let coeficiente_M1El = document.querySelector("#coeficiente-M1");
let coeficiente_M2El = document.querySelector("#coeficiente-M2");

let coeficiente_T1El = document.querySelector("#coeficiente-T1");
let coeficiente_T2El = document.querySelector("#coeficiente-T2");

let coeficienteM11El = document.querySelector('#coeficiente-M1-1');  
let coeficienteM22El = document.querySelector('#coeficiente-M2-2');  

let teEl = document.querySelector('#resultado-TE');

let botaoresolverEl = document.querySelector("#botaoresolver");

let resultado_TEEl = document.querySelector("#resultado-TE");


coeficiente_M1El.addEventListener("change", () => {
  let M1 = coeficiente_M1El.value;
  coeficienteM11El.value = M1;
});

coeficiente_M2El.addEventListener("change", () => {
  let M2 = coeficiente_M2El.value;
  coeficienteM22El.value = M2;
});

botaoresolverEl.addEventListener("click", () => {
  
  let M1 = coeficiente_M1El.value;
  let M2 = coeficiente_M2El.value;

  let T1 = coeficiente_T1El.value;
  let T2 = coeficiente_T2El.value;
  
    if ((T1 >= 0 && T2 >= 0 ) && (T1 <= 100 && T2 <= 100)) 
    {

    let TE = 0;

    let massaT = 0;

    M1 = parseInt(M1);
    M2 = parseInt(M2);

    massaT = M1 + M2;

    let mt1 = M1 * T1;

    let mt2 = M2 * T2;

    TE = mt1 + mt2;

    TE = TE / massaT;
    TE = TE.toFixed(2);
    resultado_TEEl.value = TE;
    }

    else 
    {
        window.alert('T1 e T2 apenas no intervalo de 0°C a 100°C');
        coeficiente_T1El.value = 0;
        coeficiente_T2El.value = 0;
    }
}); 


// explica o parseInt agr que nn sei oq é, DAVIIII
/*
  isso foi o mais próximo que consegui, fiz as constas separadas e tinha dado, só que as vezes falhava

  let massaT = 0;

  M1 = parseInt(M1);
  M2 = parseInt(M2);

  massaT = M1 + M2;

  let mt1 = M1 * T1;

  let mt2 = M2 * T2;

  TE = mt1 + mt2;

  TE = TE / massaT;

  resultado_TEEl.value = TE;
*/