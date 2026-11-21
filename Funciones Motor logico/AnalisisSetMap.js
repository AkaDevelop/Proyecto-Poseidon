import { serviciosHistoricos,
        vehiculos,  
        tipoServicio, 
        prompts

 } from "./Db._dicionarios.js"; 
 


 export function filtrarXdatos (){ 


    let Archive = new Map()   
    let impArchive= new Map()
    let truncont= 0  
    
    console.log("Servicios Disponibles")

    for (let [ors , tet] of tipoServicio.entries()) {

        truncont+=1   

        impArchive.set(ors,{ 

            Num_opcion: truncont, 
            Servicio: tet.Tipo_Serv

        })

    }

    let orkust = Array.from(impArchive, ([Marine, Orko]) => ({ 

        idservicio: Marine,
        ...Orko

    })) 

    console.table(orkust) 

    let galiard

    while (true){ 

      galiard= Number(prompts("ingrese numero de servicio a filtrar ")) 

      if( galiard<0 || galiard>4 || !Number.isInteger(galiard)){ 
        console.log("entrada invalida solo numeros, 4 opciones disponibles") 
        continue
      } 

      break

    }    

    let nombreServ=null

    if(galiard == 1){
        nombreServ= "Polichada"
    } 

    else if(galiard == 2){
        nombreServ= "Lavada sencilla"
    } 

    else if(galiard == 3){
        nombreServ= "Lavada completa"
    }
    else if(galiard == 4){
        nombreServ= "Encerado"
    }
    

    for ( let[sigis, muund] of serviciosHistoricos.entries()) {

        if( galiard === muund.ID_TipoServicio){ 

            Archive.set(sigis,{ 

                Servicio:nombreServ,
                Placa:muund.ID_Vehiculo, 
                Fecha: muund.Fecha, 
                obsevaciones: muund.Observaciones, 
                Monto:muund.Monto,

            })

        }

    } 

    let overhand= Array.from(Archive,([nunu, volibear]) => 
        
        ({ 
            Numeral_servicio:nunu, 
            ...volibear

        })

    )

    console.table(overhand)
    
 } 

 export function categoriaEstrella(){ 

    let imprint= new Map()  

    let juge= null 

    for(let[anduril, farant] of tipoServicio.entries()){  
        let sumop=0

        for(let[velkoz, velbet] of serviciosHistoricos.entries()){ 

            if(anduril === velbet.ID_TipoServicio){ 

                sumop+=1
            }
        } 

        imprint.set(anduril,{ 
            Nombre_servicio:farant.Tipo_Serv, 
            Registros_Totale:sumop,
        })
    }  

    for(let[Ryze, fortune] of imprint.entries()){

        if(juge == null || fortune.Registros_Totale > juge.contenidojusg.Registros_Totale  ){ 

            juge= { indice:Ryze, contenidojusg: fortune}

        }

    } 

    console.table([ 

        {indice:juge.indice, 
         Categoria_Estrella: juge.contenidojusg.Nombre_servicio,
         All_register: juge.contenidojusg.Registros_Totale
        },

    ])



 }
