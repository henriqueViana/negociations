class DateHelper{

	constructor(){
		throw new Error("Class DateHelper can not be instantiated");
	}
	
	static convertStringToDate(str){
		if(!/\d{4}-\d{2}-\d{2}/.test(str)) throw new Error("Format date is invalid, this format is yyyy-mm-dd");

		return new Date(str.split('-'));
	}

	static convertDateToString(date){
		return `${date.getDate()}/${DateHelper._extractMonthFormat(date.getMonth() + 1)}/${date.getFullYear()}`; 
	}

	static _extractMonthFormat(month){
		return (month < 10) ? '0' + month : month;  
	}
}

module.exports = DateHelper;