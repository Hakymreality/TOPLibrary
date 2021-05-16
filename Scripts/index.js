let myLibrary = [];

let bookName = document.getElementById('bookName');
let bookAuthor = document.getElementById('bookAuthor');
let numberOfPages = document.getElementById('numberOfPages');
let read = document.getElementById('read');
let addBook = document.getElementById('addBook');
let cardContainer = document.getElementById('cardContainer');

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addToLibrary() {
	let bookNameValue = bookName.value;
	let bookAuthorValue = bookAuthor.value;
	let numberOfPagesValue = numberOfPages.value;

	let newBook = new Book(
		bookNameValue,
		bookAuthorValue,
		numberOfPagesValue,
		read.checked
	);
	myLibrary.push(newBook);
	createCard(newBook);
	return myLibrary;
}
function createCard(book) {
	let div = document.createElement('div');
	div.classList.add('card');
		let ul = document.createElement('ul');
	for (prop in book) {
		let li = document.createElement('li');
		li.innerText = book[prop];
		ul.appendChild(li);
	}
	div.appendChild(ul);
	cardContainer.appendChild(div)
}
function clickHandler(ev) {
	ev.preventDefault();
	addToLibrary();
}
