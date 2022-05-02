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

router.get('/listarMarcas', (req, res) => {
  mysqlConnection.query('SELECT * FROM marcas', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

router.get('/listarTipos', (req, res) => {
  mysqlConnection.query('SELECT * FROM tipos', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

router.get('/listarModelos', (req, res) => {
  mysqlConnection.query('SELECT * FROM modelos', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

router.get('/listarRegistros', (req, res) => {
  mysqlConnection.query('SELECT * FROM registros', (err, rows, fields) => {
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

/* AQUI ESTA EL QUERY DEL REGISTRO QUE SE VA MOSTRAR EN PANTALLA UNA VEZ SE MANDE EL ID DEL EQUIPO*/

// GET An Employee
router.get('/listarRegistros/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT equipos.id AS equipo_id, equipos.serial, marcas.nombre AS marca, modelos.nombre AS modelo, tipos.nombre AS tipo, usuarios.nombre AS usuario, departamentos.nombre AS departamento, cargos.nombre AS cargo FROM equipos, usuarios, marcas, departamentos, cargos, modelos, tipos WHERE usuarios.id = equipos.usuario_id AND equipos.id = ? AND marcas.id = equipos.marca_id AND departamentos.id = usuarios.departamento_id AND cargos.id = usuarios.cargo_id AND tipos.id = equipos.tipo_id AND modelos.id = equipos.modelo_id', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log("Fetch Error :-S", err)
    }
  });
});

/*****************************************************************************************************/


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
  const query = 'INSERT INTO `usuarios`(`nombre`, `apellido`, `cedula`, `sexo`, `departamento_id`, `cargo_id`) VALUES (?,?,?,?,?,?,?)'
   mysqlConnection.query(query, [nombre, apellido, cedula, sexo, departamento_id, cargo_id],(err, rows, fields) => {
    if(!err) {
      //rescupero el id de la transaccion hecha
      //crear relacion de usuario-cargo
      console.log(rows.insertId);
      const usuario_id = rows.insertId
      const queryCargo = 'INSERT INTO `usuarios_cargos`(`id_usuario`, `id_cargo`) VALUES (?,?)'
      mysqlConnection.query(queryCargo, [usuario_id, cargo_id],(err, rows, fields) => {
        if (err) throw err;
  });
 /*      //crear relacion de usuario-equipo
      console.log(rows.insertId);
      const queryEquipo = 'INSERT INTO `usuarios_equipos`(`id_equipo`, `id_usuario`) VALUES (?,?)'
      mysqlConnection.query(queryEquipo, [usuario_id, equipo_id],(err, rows, fields) => {
        if (err) throw err;
  }); */
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

// INSERT An Employee
router.post('/tipos', async (req, res) => {
  const {nombre} = req.body;
  console.log(nombre);
  const query = 'INSERT INTO `tipos`(`nombre`) VALUES (?)'
   mysqlConnection.query(query, [nombre],(err, rows, fields) => {
    if(!err) {
      //rescupero el id de la transaccion hecha
      console.log(rows.insertId);
      res.json(
        {
          status: 'Tipo Saved',
        });
    } else {
      console.log(err);
    }
  });

});

// INSERT An Employee
router.post('/modelos', async (req, res) => {
  const {usuario_id, marca_id, modelo_id, serial} = req.body;
  console.log(nombre);
  const query = 'INSERT INTO `modelos`(`nombre`, `marca_id`) VALUES (?,?)'
   mysqlConnection.query(query, [nombre, marca_id],(err, rows, fields) => {
    if(!err) {
      //rescupero el id de la transaccion hecha
      console.log(rows.insertId);
      const modelo_id = rows.insertId
      //agregar relacion
      const queryEquiposModelos = 'INSERT INTO `marcas_modelos`(`id_marca`, `id_modelo`) VALUES (?,?)'
      mysqlConnection.query(queryEquiposModelos, [marca_id, modelo_id],(err, rows, fields) => {
        if (err) throw err;
  });
/*       res.json(
        {
          status: 'Tipo Saved',
        }); */
    } else {
      console.log(err);
    }
  });

});

// INSERT An Employee
router.post('/equipos', async (req, res) => {
  const {usuario_id, marca_id, modelo_id, serial, tipo_id} = req.body;
  console.log(usuario_id);
  const query = 'INSERT INTO `equipos`(`usuario_id`, `marca_id`, `modelo_id`, `serial`, `tipo_id`) VALUES (?,?,?,?,?)'
  console.log(query);
   mysqlConnection.query(query, [usuario_id, marca_id, modelo_id, serial, tipo_id],(err, rows, fields) => {
    if(!err) {
      //rescupero el id de la transaccion hecha
      console.log(rows.insertId);
      const equipo_id = rows.insertId
      //agregar relacion
       //agregar relacion
       const queryEquiposModelos = 'INSERT INTO `equipos_modelos`(`modelo_id`, `equipo_id`) VALUES (?,?)'
       mysqlConnection.query(queryEquiposModelos, [modelo_id, equipo_id],(err, rows, fields) => {
         if (err) throw err;});
 
       //agregar relacion
       const queryEquiposUsuarios = 'INSERT INTO `equipos_usuarios`(`id_equipo`, `id_usuario`) VALUES (?,?)'
       mysqlConnection.query(queryEquiposUsuarios, [equipo_id, usuario_id],(err, rows, fields) => {
         if (err) throw err;});
 
       //agregar relacion
       const queryEquiposMarcas = 'INSERT INTO `equipos_marcas`(`id_equipo`, `id_marca`) VALUES (?,?)'
       mysqlConnection.query(queryEquiposMarcas, [equipo_id, marca_id],(err, rows, fields) => {
         if (err) throw err;});

         //agregar relacion
       const queryEquiposTipos = 'INSERT INTO `equipos_tipos`(`id_equipo`, `id_tipo`) VALUES (?,?)'
       mysqlConnection.query(queryEquiposTipos, [equipo_id, tipo_id],(err, rows, fields) => {
         if (err) throw err;});

            //agregar relacion
       const queryEquiposRegistros = 'INSERT INTO `registros`(`equipo_id`) VALUES (?)'
       mysqlConnection.query(queryEquiposRegistros, [equipo_id],(err, rows, fields) => {
        const registro_id = rows.insertId
            console.log(registro_id)
            const queryEquiposRegistros = 'INSERT INTO `equipos_registros`(`id_equipo`, `id_registro`) VALUES (?,?)'
          mysqlConnection.query(queryEquiposRegistros, [equipo_id, registro_id],(err, rows, fields) => {
            if (err) throw err;});
         if (err) throw err;});

     } else {
      console.log(err);
    }
    });
    });

    
// INSERT An Employee
router.post('/registros', async (req, res) => {
  const {equipo_id} = req.body;
  console.log(equipo_id);
  const query = 'INSERT INTO `registros`(`equipo_id`) VALUES (?)'
   mysqlConnection.query(query, [equipo_id],(err, rows, fields) => {
    if(!err) {
      //rescupero el id de la transaccion hecha
      console.log(rows.insertId);
      res.json(
        {
          status: 'Registro Saved',
        });
    } else {
      console.log(err);
    }
  });
});


// INSERT An Employee
router.post('/marcas', async (req, res) => {
  const {nombre} = req.body;
  console.log(nombre);
  const query = 'INSERT INTO `marcas`(`nombre`) VALUES (?)'
   mysqlConnection.query(query, [nombre],(err, rows, fields) => {
    if(!err) {
      //rescupero el id de la transaccion hecha
      console.log(rows.insertId);
      res.json(
        {
          status: 'Marca Saved',
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