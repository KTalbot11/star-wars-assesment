module.exports = function (sequelize, DataTypes) {
    return sequelize.define('people',{
        name:[],
        height:[],
        mass:[],
        hair_color:[],
        skin_color:[],
        eye_color:[],
        birth_year:[],
        gender:[],
        homeworld:[],
        films:[],
        species:[],
        vehicles:[],
        starships:[],
        created:[],
        edited:[],
        url:[]
    })
}