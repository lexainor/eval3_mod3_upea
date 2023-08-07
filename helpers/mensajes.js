const { read } = require('fs');
const { stdin } = require('process');

require('colors');

const mostrarMenu=()=>{
    return new Promise(resolve=>{
        console.clear();
        console.log('======================='.green);
        console.log('Seleccione una opcion'.white );
        console.log('=======================\n'.green);

        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar Tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar Tareas pendientes`);
        console.log(`${'5.'.green} Ccompletar tarea(s)`);
        console.log(`${'6.'.green} Borrar Tareas`);
        console.log(`${'0.'.green} Salir`);

        const readline = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
        readline.question('Seleccione una opcion: ',(opt)=>{
        readline.close();


        resolve(opt);
        });
    });
}

const pausa = ()=>{
    const readline = require('readline').createInterface({
        input:process.stdin,
        output:process.stdout
    });
    readline.question(`\nPresione ${'Enter'.green} para continuar\n`,(opt)=>{
        readline.close();
    });
}

module.exports={
    mostrarMenu,
    pausa
}