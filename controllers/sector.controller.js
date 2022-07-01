const Sector = require('../models/sector');
const sectorCtrl = {};

sectorCtrl.getSectores = async(req, res)=>{
    var sectores = await Sector.find().populate('responsable');
    res.json(sectores);
}

sectorCtrl.createSector = async(req, res)=>{
    var sector = new Sector(req.body);
    try{
        await sector.save();
        res.json({
            'status': '1',
            'msg': 'Sector creado'
        })
    } catch (error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error creando sector.'
        })
    }
}

sectorCtrl.getSector = async(req, res)=>{
    const sector = await Sector.findById(req.params.id);
    res.json(sector);
}

sectorCtrl.editSector = async(req, res)=>{
    const oldSector = new Sector(req.body);
    try{
        await Sector.updateOne({_id: req.body._id}, oldSector);
        res.json({
            'status': '1',
            'msg': 'Sector editado.'
        })
    } catch (error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error editando sector.'
        })
    }
}

sectorCtrl.deleteSector = async(req, res)=>{
    try{
        await Sector.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
            'msg': 'Sector eliminado.'
        })
    } catch (error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error eliminando sector.'
        })
    }
}

module.exports = sectorCtrl;