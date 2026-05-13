let contador1 = 0;
let contador2 = 0;
let contador3 = 0;

/* ========================= */
/* RESPUESTA INCORRECTA */
/* ========================= */

function incorrecta(btn){

    btn.classList.add("wrong");

    setTimeout(() => {

        btn.classList.remove("wrong");

    },1000);

}

/* ========================= */
/* SCREEN 1 */
/* ========================= */

function correcta1(btn){

    if(!btn.classList.contains("correct")){

        contador1++;

        btn.classList.add("correct");

        verificar1();

    }

}

function correcta2(btn){

    if(!btn.classList.contains("correct")){

        contador1++;

        btn.classList.add("correct");

        verificar1();

    }

}

function verificar1(){

    if(contador1 >= 2){

        document
        .getElementById("commit1")
        .classList
        .remove("hidden");

    }

}

function nextScreen1(){

    let check =
    document.getElementById("check1");

    if(check.checked){

        changeScreen("screen1","screen2");

        updateProgress(50);

        updateLevel("Level 2");

    }else{

        alert("⚠ Debes aceptar el compromiso");

    }

}

/* ========================= */
/* SCREEN 2 */
/* ========================= */

function correcta3(btn){

    if(!btn.classList.contains("correct")){

        contador2++;

        btn.classList.add("correct");

        verificar2();

    }

}

function correcta4(btn){

    if(!btn.classList.contains("correct")){

        contador2++;

        btn.classList.add("correct");

        verificar2();

    }

}

function verificar2(){

    if(contador2 >= 2){

        document
        .getElementById("commit2")
        .classList
        .remove("hidden");

    }

}

function nextScreen2(){

    let check =
    document.getElementById("check2");

    if(check.checked){

        changeScreen("screen2","screen3");

        updateProgress(75);

        updateLevel("Level 3");

    }else{

        alert("⚠ Debes aceptar el compromiso");

    }

}

/* ========================= */
/* SCREEN 3 */
/* ========================= */

function correcta5(btn){

    if(!btn.classList.contains("correct")){

        contador3++;

        btn.classList.add("correct");

        verificar3();

    }

}

function correcta6(btn){

    if(!btn.classList.contains("correct")){

        contador3++;

        btn.classList.add("correct");

        verificar3();

    }

}

function verificar3(){

    if(contador3 >= 2){

        document
        .getElementById("commit3")
        .classList
        .remove("hidden");

    }

}

function nextScreen3(){

    let check =
    document.getElementById("check3");

    if(check.checked){

        changeScreen("screen3","screen4");

        updateProgress(100);

        updateLevel("Level MAX");

    }else{

        alert("⚠ Debes aceptar el compromiso");

    }

}

/* ========================= */
/* CAMBIO DE PANTALLA */
/* ========================= */

function changeScreen(actual,siguiente){

    document
    .getElementById(actual)
    .classList
    .remove("active");

    document
    .getElementById(siguiente)
    .classList
    .add("active");

}

/* ========================= */
/* PROGRESS */
/* ========================= */

function updateProgress(valor){

    document
    .getElementById("progress-fill")
    .style.width = valor + "%";

    document
    .getElementById("progress-text")
    .innerText = valor + "%";

}

/* ========================= */
/* LEVEL */
/* ========================= */

function updateLevel(texto){

    document
    .getElementById("level-text")
    .innerText = texto;

}