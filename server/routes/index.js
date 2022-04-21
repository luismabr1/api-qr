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


router.get('/listarUsuarios', (req, res) => {
  mysqlConnection.query('SELECT * FROM usuarios', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

router.get('/listarUsuario/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM usuario WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

router.get('/listarEquipos', (req, res) => {
  mysqlConnection.query('SELECT * FROM equipos', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});


// GET An equipo by ID
router.get('/listarEquipo/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM equipos WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

router.get('/listarCargos', (req, res) => {
  mysqlConnection.query('SELECT * FROM cargos', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

router.get('/listarDepartamentos', (req, res) => {
  mysqlConnection.query('SELECT * FROM departamentos', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET An Employee
router.get('/listarDepartamento/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM departamentos WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log("Fetch Error :-S", err)
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
router.post('/usuarios', async (req, res) => {
  const {nombre, apellido, cedula, sexo, departamento_id, equipo_id, cargo_id} = req.body;
  console.log(nombre, apellido, cedula, sexo, departamento_id, equipo_id, cargo_id);
  const query = 'INSERT INTO `usuarios`(`nombre`, `apellido`, `cedula`, `sexo`, `departamento_id`, `equipo_id`, `cargo_id`) VALUES (?,?,?,?,?,?,?)'
   mysqlConnection.query(query, [nombre, apellido, cedula, sexo, departamento_id, equipo_id, cargo_id],(err, rows, fields) => {
    if(!err) {
      //rescupero el id de la transaccion hecha
      //crear relacion de usuario-cargo
      console.log(rows.insertId);
      const usuario_id = rows.insertId
      const queryCargo = 'INSERT INTO `usuarios_cargos`(`id_usuario`, `id_cargo`) VALUES (?,?)'
      mysqlConnection.query(queryCargo, [usuario_id, cargo_id],(err, rows, fields) => {
        if (err) throw err;
  });
      //crear relacion de usuario-equipo
      console.log(rows.insertId);
      const queryEquipo = 'INSERT INTO `usuarios_equipos`(`id_equipo`, `id_usuario`) VALUES (?,?)'
      mysqlConnection.query(queryEquipo, [usuario_id, equipo_id],(err, rows, fields) => {
        if (err) throw err;
  });
      //crear relacion de usuario-departamento
      const query = 'INSERT INTO `usuarios_departamentos`(`id_departamento`, `id_usuario`) VALUES (?,?)'
      mysqlConnection.query(query, [departamento_id, usuario_id],(err, rows, fields) => {
        if(!err) {        
          res.json(
            {
              status: 'Usuario y Relaciones Saved',
            });
        } else {
          console.log(err);
        }
  });

    } else {
      console.log(err);
    }
  });

});

// INSERT An Employee
router.post('/cargos', async (req, res) => {
  const {nombre, departamento_id} = req.body;
  console.log(nombre, departamento_id);
  const query = 'INSERT INTO `cargos`(`nombre`, `departamento_id`) VALUES (?,?)'
   mysqlConnection.query(query, [nombre, departamento_id],(err, rows, fields) => {
    if(!err) {
      console.log(rows.insertId);
      const cargo_id = rows.insertId
      //agregar relacion
      const queryDepartamentoCargos = 'INSERT INTO `departamentos_cargos`(`id_departamento`, `id_cargos`) VALUES (?,?)'
      mysqlConnection.query(queryDepartamentoCargos, [departamento_id, cargo_id],(err, rows, fields) => {
        if(!err) {        
          res.json(
            {
              status: 'Relacion Departamento-Cargo y Cargo Saved',
            });
        } else {
          console.log(err);
        }
  });
/*       res.json(
        {
          status: 'Cargo Saved',
        }); */

    } else {
      console.log(err);
    }
  });
        

});

// INSERT An Employee
router.post('/departamentos', async (req, res) => {
  const {nombre} = req.body;
  console.log(nombre);
  const query = 'INSERT INTO `departamentos`(`nombre`) VALUES (?)'
   mysqlConnection.query(query, [nombre],(err, rows, fields) => {
    if(!err) {
      //rescupero el id de la transaccion hecha
      console.log(rows.insertId);
      res.json(
        {
          status: 'Departamento Saved',
        });
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