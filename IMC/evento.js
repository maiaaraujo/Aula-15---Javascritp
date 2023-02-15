function calcularIMC(){
    event.preventDefault();
    let mPeso = Number(peso.value);
    let mAltura = Number(altura.value);
    let imc = (mPeso / (mAltura * mAltura)).toFixed(1);
    alert(imc);
}