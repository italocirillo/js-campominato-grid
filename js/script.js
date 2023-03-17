// Dichiaro variabili
const quadratoGrande = document.querySelector(".quadrato-grande");
creaGriglie(100,quadratoGrande);

///////////////////////////
// FUNZIONI

// Funzione che crea la griglia
/**
 * Description
 * @param {number} numeroQuadrati   //Questo numero dice la griglia di quanto n * n deve essere
 * @param {Element} griglia         //Griglia in cui inserire i quadrati
 * @returns {Element} quadrato      //Ritorna il quadrato e lo inserisce nella griglia
 */
function creaGriglie(numeroQuadrati, griglia){
    for(let i=0;i<numeroQuadrati;i++){
        const quadrato = document.createElement("div");
        quadrato.classList.add("col");
        quadrato.innerHTML = `<span>${i+1}</span>`;
        griglia.append(quadrato);
    }
    console.log(griglia);
    return griglia;
}