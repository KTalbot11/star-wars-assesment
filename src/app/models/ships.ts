module.exports = function (sequelize, DataTypes) {
    return sequelize.define('ships',{
       name:[],
       model:[],
       manufacturer:[],
       cost_in_credits:[],
       length:[],
       max_atmosphering_speed:[],
       crew:[],
       passengers:[],
       cargo_capacity:[],
       consumables:[],
       hyperdrive_rating:[],
       MGLT:[],
       starship_class:[],
       pilots:[],
       films:[],
       created:[],
       edited:[],
       url:[]
    })
}