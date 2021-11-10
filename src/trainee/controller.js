const pool = require('../../db')
const consultas = require('./consultas')

const getApirestnode = (req,res) =>{
    pool.query(consultas.getApirestnode, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
    //console.log('getting apirestnode')
}

const getTraineeById = (req,res) =>{
    const id = parseInt(req.params.id);
    pool.query(consultas.getTraineeById,[id],(error,results) =>{
        if (error) throw error;
        res.status(200).json(results.rows);

    })
}
const addTrainee = (req,res) =>{
    const{nome, email, idade, nascimento} = req.body;

    //Verificar se o email exists  Check if email exists
    pool.query(consultas.checkEmailExists,[email], (error, results) => {
        if(results.rows.length){
            res.send('Email already exists')
        }

        //add trainee to db
        pool.query(consultas.addTrainee,[nome, email, idade, nascimento],(error,results)=>{
            if(error) throw error;
            res.status(201).send('Trainee created successfull!')
            console.log('Trainee created')
        })
    })
}

const removeTrainee = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(consultas.getTraineeById, [id], (error, results) => {
        const noTraineeFound = !results.rows.length;
        //!significa não ou don't
        if (noTraineeFound){
            res.send('Trainee does not exist in the database');
        } 
        
        pool.query(consultas.removeTrainee, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send('Trainee removed successfully.')
        })
    })
}

const updateTrainee = (req, res) => {
    const id = parseInt(req.params.id)
    const {nome} = req.body;

    pool.query(consultas.getTraineeById, [id], (error, results) => {
        const noTraineeFound = !results.rows.length;
        if (noTraineeFound) {
            res.send('Trainee does not exist in the database');
        }

        pool.query(consultas.updateTrainee, [nome, id], (error, results) => {
            if (error) throw error;
            res.status(200).send('Trainee updated successfully')
        })
    })

}

module.exports = {
    getApirestnode,
    getTraineeById,
    addTrainee,
    removeTrainee,
    updateTrainee,
}