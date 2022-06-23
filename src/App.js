import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
	// Masukkan Header dan Contact ke dalam div App
	console.log(contacts);
	return (
		<div class='App'>
			<Header></Header>
			<Contact data={contacts[0]}></Contact>
			<Contact data={contacts[1]}></Contact>
			<Contact data={contacts[2]}></Contact>
			<Contact data={contacts[3]}></Contact>
			<Contact data={contacts[4]}></Contact>
			<Contact data={contacts[5]}></Contact>
		</div>
	);
};

export default App;
