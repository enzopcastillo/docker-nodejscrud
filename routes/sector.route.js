const sectorCtrl = require('./../controllers/sector.controller');
const express = require ('express');
const router = express.Router();

router.get('/', sectorCtrl.getSectores);
router.post('/', sectorCtrl.createSector);
router.get('/:id', sectorCtrl.getSector);
router.put('/:id', sectorCtrl.editSector);
router.delete('/:id', sectorCtrl.deleteSector);

module.exports = router;