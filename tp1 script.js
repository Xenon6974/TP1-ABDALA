function EsAbundante(num){
    let flag = 'No es abundante';
    let suma = 0;
        for(let i = 1; i < num; i++){
             if(num%i == 0){
                    suma += i;
            }
        }
            if(suma > num){
                    flag = 'Es abundante';
            }
                return flag;
            }

            let numero = parseInt(prompt('ingrese numero', ''));
            document.write(EsAbundante(numero));
