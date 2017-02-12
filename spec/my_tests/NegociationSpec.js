describe("Negociation" , function(){

	var Negociation = require('../../js/models/Negociation.js');

	it("Verify date" , function(){
		var negociation = new Negociation(new Date(), 5 , 700);

		expect(negociation.date).toEquals(new Date());
	});
});