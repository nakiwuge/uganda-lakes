const assert = require('assert')
require('chai').should();

const {getLakes,getLake}=require('../index')

describe('getLakes', ()=>{
    it('Should have length 27', () => {
        assert.equal(getLakes.length==27, true);
    })

    it('Should have property name, location', () => {
        getLakes.map((lake)=>{
        lake.should.have.property('name')
        lake.should.have.property('location')
        })
    })

    it('Should have property lat, long', () => {
        getLakes.map((lake)=>{
        lake.location.should.have.property('lat')
        lake.location.should.have.property('long')
        })
    })
})

describe('getLake', ()=>{
    it('Should return  a lake if lake exists', () => {
        const lake = getLake('Victoria')
        assert.equal(lake.name, 'victoria');
    })

    it('Should be undefined  if lake does not exist', () => {
        const lake = getLake('Victo')
        assert.equal(lake, undefined);
    })

    it('Should throw an error if parameter is not a string', () => {
        (()=>getLake(23)).should.throw(Error, 'Invalid string parameter');;
    })


    it('Should throw an error if empty string is passed', () => {
        (()=>getLake(' ')).should.throw(Error, 'Invalid string parameter');
    })
})
