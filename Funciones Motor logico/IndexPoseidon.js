import { serviciosHistoricos,
        vehiculos,  
        tipoServicio, 
        prompts

 } from "./Db._dicionarios.js";  


import {
    filtrarXdatos, 
    categoriaEstrella
} from "./AnalisisSetMap.js" 


while(true){ 

    console.log(` 
        
        -1 filtro por categoria en historico     

        -2 Categoria con mas venta

        -0 cerrar programa
    
        `)


    let opMotorLogico

    while (true){ 

        opMotorLogico= Number(prompts("Ingrese numero de opcion deseada ")) 

        if(opMotorLogico<0 || opMotorLogico>5 || !Number.isInteger(opMotorLogico)){
            console.log("opcion inexistente") 
            continue
        } 

        break

    } 


    if(opMotorLogico == 1){ 
        filtrarXdatos()
        continue
    } 

    else if(opMotorLogico == 2){  
        categoriaEstrella()
        continue
    } 
    else if(opMotorLogico == 3){ 
        continue
    }
    else if(opMotorLogico == 4){ 
        continue
    }
    else if(opMotorLogico == 5){ 
        continue
    }
    else if(opMotorLogico == 0){ 
        break
    }

}