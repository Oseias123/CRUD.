const express = require('express');
const { normalize } = require('path');

const serve = express();

serve.use(express.json());

const cursos = ['FullStack Master', 'Desenvolvimento de Games', 'Viver de Youtube']

// Retornar um curso
serve.get('/cursos/:index', (req, res) => {
        const {index} = req.params;

        return res.json(cursos[index]);
})

// Retornar todos os recursos
serve.get('/cursos/:index', (req, res) => {
    return res.json(cursos);
})

//Criar um novo Recurso
serve.post('/cursos/',(req, res) => {
   const { name } = req.body;
    cursos.push(name)

    return res.json(cursos);
})

//Atualizar um curso
serve.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body

cursos[index] = name;


return res.json(cursos);
})

//Deletar um curso
serve.delete('/cursos/:index',(req, res) => { 
    const { index } = req.params;

    cursos.splice(index, 1);
    return res.json({ message:" O curso foi deletado"});
});


serve.listen(3000);


