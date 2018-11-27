module.exports = function (sequelize, DataTypes) {
    return sequelize.define('films',{
        title:[],
        episode_id:[],
        opening_crawl:[],
        director:[],
        producer:[],
        release_date:[],
        characters:[],
        planets:[],
        starships:[],
        vehicles:[],
        species:[],
        created:[],
        edited:[],
        url:[]
    })
}