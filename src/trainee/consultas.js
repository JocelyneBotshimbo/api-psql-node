const getApirestnode = 'SELECT * FROM apirestnode';
const getTraineeById = 'SELECT * FROM apirestnode WHERE id = $1';
const checkEmailExists = 'SELECT s FROM apirestnode s WHERE s.email = $1';
const addTrainee = 'INSERT INTO apirestnode (nome, email, idade, nascimento) VALUES ($1, $2, $3, $4)';
const removeTrainee = 'DELETE FROM apirestnode WHERE id = $1';
const updateTrainee = 'UPDATE apirestnode SET nome = $1 WHERE id = $2';

module.exports = {
    getApirestnode,
    getTraineeById,
    checkEmailExists,
    addTrainee,
    removeTrainee,
    updateTrainee,
};

