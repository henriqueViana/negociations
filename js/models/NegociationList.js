class NegociationList{

	constructor(){
		this._negociations = [];
	}

	add(negociation){
		this._negociations.push(negociation);
	}

	get list(){
		return this._negociations;
	}
}