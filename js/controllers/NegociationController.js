class NegociationController{

	constructor(){
		this._date 		= document.querySelector('.date');
		this._quantity 	= document.querySelector('.quantity');
		this._price 	= document.querySelector('.price');

		this._negociationList = new NegociationList();
	}

	insertAction(event){
		
		event.preventDefault();

		let negociation = new Negociation(DateHelper.convertStringToDate(this._date.value) , this._quantity.value, this._price.value);
		
		this._negociationList.add(negociation);

		console.log(this._negociationList.list);
	}
}