const Agente = require('../models/agente');
const agenteCtrl = {};

agenteCtrl.getAgentes = async(req, res)=>{
    var agentes = await Agente.find();
    res.json(agentes);
}

agenteCtrl.getAgentesActivos = async(req, res)=>{
    var criteria = {'estado': true};
    var agentes = await Agente.find(criteria);
    res.json(agentes);
}

agenteCtrl.createAgente = async(req, res)=>{
    var agente = new Agente(req.body);
    try{
        await agente.save();
        res.json({
            'status': '1',
            'msg': 'Agente creado'
        })
    } catch (error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error creando agente.'
        })
    }
}

agenteCtrl.getAgente = async(req, res)=>{
    const agente = await Agente.findById(req.params.id);
    res.json(agente);
}

agenteCtrl.editAgente = async(req, res)=>{
    const oldAgente = new Agente(req.body);
    try{
        await Agente.updateOne({_id: req.body._id}, oldAgente);
        res.json({
            'status': '1',
            'msg': 'Agente editado.'
        })
    } catch (error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error editando agente.'
        })
    }
}

agenteCtrl.deleteAgente = async(req, res)=>{
    try{
        await Agente.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
            'msg': 'Agente eliminado.'
        })
    } catch (error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error eliminando agente.'
        })
    }
}

module.exports = agenteCtrl;