const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 0', function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!')
}, 20000)

const regras = new schedule.RecurrenceRule()
regras.dayOfWeek = [new schedule.Range(0,5)] //De domingo(0) à sexta (5)
regras.hour = 22
regras.second = 30

const tarefa2 = schedule.scheduleJob(regras, function(){
    console.log('Executando tarefa 2!', new Date().getSeconds())
})

//Outras opções disponíveis:
// setImmediate
// setInterval