const expect = require('chai').expect;
const Negociation = require('../js/models/Negociation');
const NegociationList = require('../js/models/NegociationList');
const DateHelper = require('../js/helpers/DateHelper');

let negociation = '';
let negociationList = '';

beforeEach(() => {
    negociation = new Negociation(DateHelper.convertStringToDate('2018-01-02'),2,10);
    negociationList = new NegociationList();
});

afterEach(() => {
    negociation = '';
    negociationList = '';
});

describe('NegociationList', () => {

    describe('method add', () => {
        it('should add a negociation in the list and list size should more one', () => {
            const list = negociationList.list;
            negociationList.add(negociation);

            expect(list).to.have.lengthOf(1);
        });
    });

    describe('method list', () => {
        context('Testing the init size of list of negociations', () => {
            it('should size list to be equal 0', () => {
                const list = negociationList.list;
                expect(list).to.have.lengthOf(0);
            });
        });
    });

    describe('Testing if list if an array', () => {
        it('should the list is an array', () => {
            const list = negociationList.list;
            expect(list).to.be.a('Array');
        });
    });
});
