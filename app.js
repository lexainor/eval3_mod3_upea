require('colors');
console.clear();

const { guardarBD, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, mostrarListadoChecklist, listadoTareasBorrar } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async()=>{
    let opt='';
    const tareas = new Tareas();
    const tareasDB = leerDB();
    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    }
    
    do{

        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                    //crear opcion
                    const desc=await leerInput('Descripcion: ');
                    tareas.crearTarea(desc);
                    console.log(desc);
                break;
            case '2':
                    tareas.listadoCompleto();
                break;
            case '3':
                    tareas.listarPendientesCompletadas(true);
                break;
            case '4':
                    tareas.listarPendientesCompletadas(false);
                break;
            case '5':
                    const ids = await mostrarListadoChecklist(tareas.listadoArr);
                    tareas.toggleCompletadas(ids);
                break;
            case '6':
                    const id = await listadoTareasBorrar(tareas.listadoArr);
                    tareas.borrarTarea(id);
                break;
            case '0':
                
                break;
                
        }
        await pausa();
        guardarBD(tareas.listadoArr); //guardado en todo momento
    }while(opt !== '0');
}

main();