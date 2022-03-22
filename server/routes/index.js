const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../../database');

// GET all Employees
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM cargos', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET An Employee
router.get('/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM cargos WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE An Employee
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM usuarios WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Employee Deleted'});
    } else {
      console.log(err);
    }
  });
});

// INSERT An Employee
router.post('/', (req, res) => {
  const {nombre, apellido, cedula, sexo, departamento_id, equipo_id, cargo_id} = req.body;
  console.log(nombre, apellido, cedula, sexo, departamento_id, equipo_id, cargo_id);
  const query = `
    SET @nombre = ?;
    SET @apellido = ?;
    SET @cedula = ?;
    SET @sexo = ?;
    SET @departamento_id = ?;
    SET @equipo_id = ?;
    SET @cargo_id = ?;
    CALL userAddOrEdit(@nombre, @apellido, @cedula, @sexo, @departamento_id, @equipo_id, @cargo_id);
  `;
  mysqlConnection.query(query, [nombre, apellido, cedula, sexo, departamento_id, equipo_id, cargo_id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Usuario Saved'});
    } else {
      console.log(err);
    }
  });

});

router.put('/:id', (req, res) => {
  const { name, salary } = req.body;
  const { id } = req.params;
  const query = `
    SET @id = ?;
    SET @name = ?;
    SET @salary = ?;
    CALL employeeAddOrEdit(@id, @name, @salary);
  `;
  mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Employee Updated'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;