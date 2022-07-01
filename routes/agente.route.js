const agenteCtrl = require('./../controllers/agente.controller');
const express = require ('express');
const router = express.Router();

router.get('/', agenteCtrl.getAgentes);
router.get('/activos', agenteCtrl.getAgentesActivos);
router.post('/', agenteCtrl.createAgente);
router.get('/:id', agenteCtrl.getAgente);
router.put('/:id', agenteCtrl.editAgente);
router.delete('/:id', agenteCtrl.deleteAgente);

module.exports = router;