const argv = require('./config/yargs').argv;
const colors = require('colors');
//const colors = require('colors/safe');
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');
//const { listarArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listar');
        listarArchivo(argv.base, argv.limite)

        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado : ${archivo}`))
            //          .then(archivo => console.log(`archivo creado : colors.green(archivo))
            .catch(err => console.log(err));
        break;

    default:
        console.log('comando no reconocido');
}


//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]
//let data = '';
//for (let i = 1; i < 11; i++) {
//let mult = base * i;
//    console.log(`2* ${i} : ${mult}`);
//    data += `${base}*${i}= ${base*i}\n`;
//}
//fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//    if (err) throw err;
//    console.log(`el archivo tabla-${base}.txt ha sido creado`);
//});

//crearArchivo(base)
//    .then(archivo => console.log(`archivo creado : ${archivo}`))
//    .catch(err => console.log(err));
//console.log('limite', argv.limite)