const expect = require('chai').expect;
const Negociation = require('../js/models/negociation');
const DateHelper = require('../js/helpers/DateHelper');

let negociation = '';

beforeEach(() => {
    negociation = new Negociation(DateHelper.convertStringToDate('2018-01-02'), 2, 10);
});

afterEach(() => {
    negociation = '';
});

describe('Negociation', () => {

    describe('Testing method get date', () => {
        it('should return new Date when the get date is called', () => {
            strDate = '2018-01-02';
            expect(negociation.date).to.be.eql(new Date(strDate.split('-')));
        });
    });

    describe('Testing method get quantity', () => {
        it('should return 2 when the get quantity is called', () => {
            expect(negociation.quantity).to.be.eql(2);
        });
    });

    describe('Testing method get value', () => {
        it('should return 10 when the get value is called', () => {
            expect(negociation.value).to.be.eql(10);
        });
    });

    describe('Testing method get total', () => {
        it('should return 20 when the get total is called', () => {
            expect(negociation.total).to.be.eql(negociation.quantity * negociation.value);
        });
    });
});