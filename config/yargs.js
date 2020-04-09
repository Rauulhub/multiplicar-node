const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    //    base: {
    //        demand: true,
    //        alias: 'b'
    //    },
    //    limite: {
    //        alias: 'l',
    //        default: 10
    //    }
    //})
    .command('crear', 'crea archivo de tabla de multiplicar', opts)
    //    base: {
    //        demand: true,
    //        alias: 'b'
    //    },
    //    limite: {
    //        alias: 'l',
    //        default: 10
    //    }
    //})
    .help()
    .argv;

module.exports = {
    argv
}