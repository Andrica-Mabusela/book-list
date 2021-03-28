// add books to the list
const addBtn = document.querySelector('#add-book');
const list = document.querySelector('#book-list-wrapper ul');
const addForm = document.forms['add-form'];
const addBookField = addForm.querySelector('input');

const lis = document.querySelectorAll('li');
let lisArray = Array.from(lis);


addBtn.addEventListener('click', (e) => {
	e.preventDefault();
	
	const bookname = addBookField.value;
	
	if(lisArray.length > 0){

		let doesExist = false;

		lisArray.forEach( (item) => {
			// check for same book
			
			let x = item.firstElementChild.textContent;
			if( x == bookname){
				console.log('They are equal');
				doesExist = true;
			}
		});

		// add list item
		if(doesExist){
			console.log('it does exist');
			document.querySelector('#message-section').innerHTML = "<p>Book already exists</p>";

		}else{
			console.log('does not exist');
			// create elements
			const li = document.createElement('li');
			const span1 = document.createElement('span');
			const span2 = document.createElement('span');

			// attach classes
			span1.classList.add('book-title');
			span2.classList.add('delete');

			// insert data
			span1.textContent = bookname;
			span2.textContent = 'delete';

			// append elements
			li.appendChild(span1);
			li.appendChild(span2);

			if(bookname == ''){
				document.querySelector('#message-section').innerHTML = "<p>Enter Book Name</p>";
			}else{
				list.appendChild(li);
				lisArray.push(li);
				document.querySelector('#message-section').innerHTML = "<p>Book is added successfully</p>";
			}
			

		}

		console.log(lisArray);

	}else{

		// create elements
			const li = document.createElement('li');
			const span1 = document.createElement('span');
			const span2 = document.createElement('span');

			// attach classes
			span1.classList.add('book-title');
			span2.classList.add('delete');

			// insert data
			span1.textContent = bookname;
			span2.textContent = 'delete';

			// append elements
			li.appendChild(span1);
			li.appendChild(span2);
			
			if(bookname == ''){
				document.querySelector('#message-section').innerHTML = "<p>Enter Book Name</p>";
			}else{
				list.appendChild(li);
				lisArray.push(li);
				document.querySelector('#message-section').innerHTML = "<p>Book is added successfully</p>";
			}
	}
})

// Remove a book
list.addEventListener('click', (e) => {
	if(e.target.className == 'delete'){
		let deletedBook = e.target.previousElementSibling;
		let bookpos = lisArray.indexOf(deletedBook);

		document.querySelector('#message-section').innerHTML = deletedBook.textContent+ " is deleted successfully";
		list.removeChild(e.target.parentElement);

		lisArray.splice(bookpos, 1);

	}
})

// Hide All the books
const checkbox = document.querySelector('#checkbox');

checkbox.addEventListener('change', (e) => {
	if( e.target.checked){
		list.style.display = "none";
		document.querySelector('#checkbox-text').textContent = "Books are hidden, click to show them";
	}else{
		list.style.display = "block";
		document.querySelector('#checkbox-text').textContent = "Books are hidden, click to show them";
	}
})



// search for books
const searchbar = document.querySelector('#searchbar');

searchbar.addEventListener('keyup', (e) => {
	const searchValue = (searchbar.value).toLowerCase();

	lisArray.forEach( (item) => {
		let book = item.firstElementChild.textContent;

		if( book.toLowerCase().indexOf(searchValue) != -1 ){
			item.style.display = "flex";
		}else{
			item.style.display = "none";
		}

	})

})