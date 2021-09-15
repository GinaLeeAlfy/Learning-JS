class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
		console.log(this.favoriteBooks);
	}

	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}
	}
	printFavoriteBooks() {
		console.log(`Favorite Books: ${this.favoriteBooks.length+""}`);
		for (let bookName of this.favoriteBooks) {
			console.log(bookName);
		}
	}
}




function loadBooks(bookShelfBooksAreBeingLoadedInto) {
	let callBackFunction = function(listOfBooks) {
		for (let book of listOfBooks) {
			bookShelfBooksAreBeingLoadedInto.addFavoriteBook(book);
		}
		bookShelfBooksAreBeingLoadedInto.printFavoriteBooks();
	}
	fakeAjax(BOOK_API, callBackFunction);
	
}

var BOOK_API = "https://some.url/api";

const MyFavoriteBookshelf = new Bookshelf();
loadBooks(MyFavoriteBookshelf);

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
