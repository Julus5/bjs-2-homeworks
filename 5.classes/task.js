class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, type = null){
		this.name= name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = type;
	}
    fix() {
		this.state = this.state * 1.5;
	}
    set state(mount) {
		if (mount < 0) {
			this._state = 0;
		}
		else if (mount > 100) {
			this._state = 100;
		}
		else {
			this._state = mount;
		}
    }
	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state){
		super(name, releaseDate, pagesCount, state);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state){
		super(name, releaseDate, pagesCount, state);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state){
		super(author, name, releaseDate, pagesCount, state);
		this.type = "novel";
	}
}
class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state){
		super(author, name, releaseDate, pagesCount, state);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state){
		super(author, name, releaseDate, pagesCount, state);
		this.type = "detective";
	}
}

class Library {
	constructor(name){
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		let findBook = this.books.find(book => book[type] === value);
		if (typeof findBook === 'object') {
			return findBook;
		} else {
			return null;
		}
	}
	giveBookByName(bookName) {
		let giveBook = this.books.find(book => book.name === bookName);
		if (typeof giveBook === 'object') {
			this.books.splice(this.books.indexOf(giveBook), 1);
			return giveBook;
		} else {
			return null;
		}
	}
}


class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }
	addMark (mark, subject) {
        if ((mark < 2) || (mark > 5)) {
            return this.marks;
        }
        if (this.marks.hasOwnProperty(subject) != true) {
            this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
    }
	getAverageBySubject(subject) {
		if (this.marks.hasOwnProperty(subject) != true) {
			return 0;
		}
		else {	
			return this.marks[subject].reduce(((acc, amount) => acc + amount / this.marks[subject].length),0);
		}
	}
	getAverage () {
        let marks = Object.keys(this.marks);
        if (marks.length > 0) {
			let sum = marks.reduce((acc, item) => acc +  this.getAverageBySubject(item), 0);
			return sum / marks.length;
        }
		else {
			return 0;
		}
        
	}

}




