//() []
//console.log("Bienvenido al juego!");
    let ppt=['piedra','papel','tijera'];
    let historial=[];
    let estadisticas=[];
    /**
     * 
     * @param ppt 
     * @returns -random,devuelve la jugada de la maquina
     */
    function elecc_maquina(ppt) {
        let random=Math.floor(Math.random()*3);
        let eleccion=ppt[random];
        return eleccion;
    }
    //console.log(elecc_maquina(ppt));
    console.log("Elige tu tirada...");
    console.log("Si quieres sacar piedra ESCRIBE ESTO: ");
    console.log("piedra();");
    //aqui poner algo q tarde en mostrar la info q se hace cn algo de window
    console.log("si quieres sacar papel copia y pega esto:");
    console.log("papel()"); 
    console.log("Si quieres sacar tijera copia y pega esto:");
    console.log("tijera()"); 
    /**
     * 
     */
    inicializarHistorial();//aqui lo inicializo
    function piedra(){
        let ganador0=null;
        let maquinita=elecc_maquina(ppt);
        console.log("Has elegido piedra");
        switch (maquinita) {
            case 'piedra':  
                ganador0='empate';
                console.log("Maquina ha sacado piedra");
                console.log(`Resultado de la partida: ${ganador0}`);
                break;
            case 'papel':
                //gana maquina
                ganador0='maquina';
                console.log("Maquina ha sacado papel");
                console.log(`Ganador: ${ganador0}`);
            break;
            case 'tijera':
                //gana jugador
                ganador0='jugador';
                console.log("Maquina ha sacado tijera");
                console.log(`Ganador: ${ganador0}`);
            break;
        }
        aniadir_historiall('piedra',maquinita,ganador0);
    }
    /**
     * 
     */
    function papel(){
        let maquinitaa=elecc_maquina(ppt);
        let ganador1=null;
        switch (maquinitaa) {
            case 'piedra':
                //empate
                console.log("Has ganao");
                ganador1='jugador';
                break;
            case 'papel':
                //gana maquina
                ganador1='empate';
            break;
            case 'tijera':
                //gana jugador
                ganador1='maquina';
            break;
        }
        aniadir_historiall('papel',maquinitaa,ganador1);
    }
    /**
     * 
     *  
     */
    function tijera(){
        let maquinitta=elecc_maquina(ppt);
        let ganador2=null;
        switch (maquinitta) {
            case 'piedra':
                //empate
                ganador2='jugador';
                break;
            case 'papel':
                //gana maquina
                ganador2='empate';
            break;
            case 'tijera':
                //gana jugador
                ganador2='maquina';
            break;
        }
        aniadir_historiall('tijera',maquinitta,ganador2);
    }
    //function etadisticas_winner(ganaor) {
    //}
    /**
     * 
     * @param sacao 
     * @param sacado 
     * @param gandador 
     */
    function inicializarHistorial() {
        if (localStorage.getItem("historial") === null) {
            localStorage.setItem("historial", JSON.stringify([])); //crear historial vacío si no existe
        }
    }
    function inicializarEstadisticas() {
        if (localStorage.getItem("estadisticas") === null) {
            localStorage.setItem("estadisticas", JSON.stringify([])); //crear historial vacío si no existe
        }
    }
    function aniadir_historiall(sacao,sacado,gandador) {
        let historial = JSON.parse(localStorage.getItem("historial"));

        let nuevaPartida = {
            jugador: sacao,
            maquina: sacado,
            ganador: gandador
        };

    
        historial.push(nuevaPartida);

    
        if (historial.length > 10) {
            historial.shift(); //elimino la partida más antigua
        }

        
        localStorage.setItem("historial", JSON.stringify(historial));//lo vuelvo a pasar cn jeison 
    }
    function mostrarHistorial() {
        inicializarHistorial();//REVISO SI HAY y si no lo creo vacioo
        let historial = JSON.parse(localStorage.getItem("historial")); //paso a array otra vez
        console.log("Historial:");
        for (let key in historial) {//recorro historial :) *)
            if (historial[key].ganador=="empate") {
                console.log( console.log(`Jugada ${key} , , Jugada de la maquina: ${historial[key].maquina} , Tu jugada: ${historial[key].ganador} ,Resultado de la partida: ${historial[key].ganador} `));
            }else{
                console.log(`Jugada ${key} , Jugada de la maquina: ${historial[key].maquina}, Tu jugada: ${historial[key].ganador} ,Ganador: ${historial[key].ganador}`);
            }
            
        }
    }
    
    /*
    function revisar_siyahasjugaoAntes() {
        let contenido=localStorage.length;//esto devuelve la cantida de claves q hay,osea como mi clav es historial,ps me devuelve 1
        console.log(contenido);
    }
    */
    function ver_estadisticass() {
        inicializarEstadisticas();
        let historialllll=null;
        let num_partidas=0;
        let contador_ganaciones=0;//inicializo a 0 mi contador
        let contador_perdidas=0;
        let contador_empatadas=0;
        let porcentaje=0;
        let ninguna_ganacion=null;
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //let ninguna_perdida=null;
        if (localStorage.getItem("historial") === null) {
            console.log("no se ha jugado todavia estpd"); //decir q todavia n se ha jugado todavia
        }else{
        
            historialllll = JSON.parse(localStorage.getItem("historial")); //paso a array otra vez
            for (let tt = 0; tt < historialllll.length; tt++) {//si empieza desde el 0 me muestra la ultima partida ,asi q para q me muestr el numero correcto inicializo mi num_partidas a 1 y le sumo el largo del array
                num_partidas+=tt;
            }

            //ALOMEJOR HACER ESTO EN UN SWITCH 
            for (let keynt of historialllll) {//recorro historial :) *)
                if (keynt.ganador=="jugador") {
                    contador_ganaciones++;//cada vez q encuentre q alguna ronda ha sido ganada por el jug incrementa 1 en el contador
                }
                if (keynt.ganador=="maquina") {
                    contador_perdidas++;
                }
                if(keynt.ganador=="empate"){
                    contador_empatadas++;
                }
    
            }
            console.log("-----------------------------------------PARTIDAS JUGADAS :----------------------------------------");
            console.log(`Partidas jugadas ${num_partidas+1}`);//MUESTRO NUMERO DE PARTIDAS 
    
            console.log("-----------------------PARTIDAS GANADAS :---------------------------------");
            if (contador_ganaciones==0) {//si mi contador esta vacio,significa q no has ganado na
                ninguna_ganacion="No has ganao na";
                console.log(ninguna_ganacion);//muestro mensaje de q n has ganado nada
            }else{
                console.log(`Numero de paridas ganadas ${contador_ganaciones}`);//si has ganado algo,sino muestro el contador
                porcentaje=(contador_ganaciones/num_partidas*100).toFixed(2);
            }
            console.log("------------------------PARTIDAS PERDIDAS :---------------------------------- ");
            if (contador_perdidas==0) {
                ninguna_ganacion="No has PERDIDO NINGUNA CAMPEON2";
                console.log(ninguna_ganacion);
            }else{
                console.log(`Partidas perdidas: ${contador_perdidas}`);
            }
            console.log("------------------------PARTIDAS EMPATADAS :----------------------------------- ");
            if (contador_empatadas==0) {
                ninguna_ganacion="No hay empates";
                console.log(ninguna_ganacion);
            }else{
                console.log(`Partidas empatadas: ${contador_empatadas}`);
            }
            console.log("------------------------PORCENTAJE DE VICTORIAS :------------------------------ ");
            console.log(`Porcentaje de partidas ganadas ${porcentaje}%`);
            
            //aqui actualiz mis estadisticas,y las muestro en el mismo metodo pq lo voy a tener q llamar cada vez q tires
            actl_estads(num_partidas,contador_ganaciones,contador_perdidas,contador_empatadas,porcentaje);
        }
        
    }
    
    function actl_estads(a,b,c,d,e) {
        localStorage.getItem("estadisticas"); //cojo las estadisticass
        let estadisticas = JSON.parse(localStorage.getItem("estadisticas"));
        estadisticas = {
            partidas_jugadas: a,
            ganadas: b,
            perdidas: c,
            empatadas: d,
            porcentaje_victorias: e
        };
        localStorage.setItem("estadisticas", JSON.stringify(estadisticas));

    }
    
