const form = document.getElementById('form')

form.addEventListener('submit', function (event){
    event.preventDefault();

    var veloS = document.getElementById("KmH").value;
    var velo = Number(veloS);

    var value = document.getElementById("value");
    let description = "";

    document.getElementById("infos").classList.remove('hidden');

    if(velo <= 60){
        value.classList.add('abaixo');
        description = "Voce estava abaixo do limite de velocidade!";
    }else if(velo > 60 && velo <= 100){
        value.classList.add('pouco-acima');
        description = "Voce estava um pouco acima do limite de velocidade! MULTA DE 80R$"; 
    }else if(velo > 100 && velo <= 200){
        value.classList.add('acima');
        description = "Voce acima do limite de velocidade! MULTA DE 130R$"; 
    }else{
        value.classList.add('acima');
        description = "Voce estava um muito acima do limite de velocidade! MULTA DE 500R$"; 
    }
    value.textContent = (`${velo}KmH`);
    document.getElementById('description').textContent = description;
})