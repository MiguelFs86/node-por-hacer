const descripcion = {
	demand: true,
	alias: 'd',
	desc: 'Descripción de la tarea por hacer'
}

const completado = {
	demand: true,
	alias: 'c',
	desc: 'Marca como completado o pendiente la tarea'
}

const completado_flag = {
	alias: 'f',
	desc: ' Filtra las tareas por pendiente/completada'
}

const argv = require('yargs')
			.command('listar', 'Lista todas las tareas',{
				completado: completado_flag
			})
			.command('crear', 'Crea una nueva tarea', {
				descripcion: descripcion
			})
			.command('actualizar', 'Actualiza una tarea', {
				descripcion: descripcion,
				completado: completado
			})
			.command('borrar', 'Borra una tarea', {
				descripcion: descripcion
			})
			.help()
			.argv;

module.exports = {
	argv: argv
}