const  getLakes = require('./data')

/** @function
 * @name getLake
 *
 * @param {string} lake
 *
 * */
const getLake =(lake)=>{
    if (typeof lake !=="string"){
        throw new Error('Invalid string parameter')
    }

    if(lake.length==0 | lake.trim().length==0 ){
       throw new Error('Invalid string')
    }

    const data = Lakes.filter(result => result.name === lake.trim().toLowerCase());

    return data[0]
}

module.exports ={
    getLake,
    getLakes
}
