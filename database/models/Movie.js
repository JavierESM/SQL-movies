module.exports = function(sequelize, datatypes){
    const cols = {
        id : {
            type : datatypes.INTEGER.UNSIGNED,
            autoIncrement : true,
            primaryKey : true
        },
        title : {
            type : datatypes.STRING
        },
        rating : {
            type : datatypes.DECIMAL(3, 1)
        },
        awards : {
            type : datatypes.INTEGER
        },
        release_date : {
            type : datatypes.DATE
        },
        length : {
            type : datatypes.INTEGER.UNSIGNED

        }
    }
    let movie = sequelize.define(
        "Movies", cols, {
            timestamps : false
        }
    )
    return movie
}