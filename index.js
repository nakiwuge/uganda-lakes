const  getLakes = require('./data')

/**
 * Handles getting a lake by name
 * @function
 * 
 * @name getLake
 *
 * @param {string} lake
 *
 * @returns {Object} object of the lake
 * */
const getLake =(lake)=>{
    if (typeof lake !=="string"){
        throw new Error('Invalid string parameter')
    }

    if(lake.length==0 | lake.trim().length==0 ){
       throw new Error('Invalid string parameter')
    }

    const data = getLakes.filter(result => result.name.toLowerCase() === lake.trim().toLowerCase());

    return data[0]
}

module.exports ={
    getLake,
    getLakes
}
