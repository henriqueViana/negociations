/**
 * Regras de negócio
 * 1 - Após criada uma negociação, ela não deve ser alterada (imutável)
 * 2 - O total é o produto entre a quantidade e o valor da negociação 
 */

class Negociation{

	constructor(date, quantity, value){
		this._date 		= new Date(date.getTime());
		this._quantity 	= quantity;
		this._value 	= value;

		Object.freeze(this);
	}


	/**
	 * Método responsável por retornar a data da negociação
	 *  
	 * @return {date} por questões de segurança, o método retorna um novo objeto date com uma cópia do valor original 
	 */
	get date(){
		return new Date(this._date.getTime());
	}

	get quantity(){
		return this._quantity;
	}

	get value(){
		return this._value;
	}

	get total(){
		return this._quantity * this._value;
	}

}

module.exports = Negociation;