import './App.css';
import GenratePostForm from './components/GenratePostForm';
import FetchPosts from './components/FetchPosts';

function App() {
 return(
  <div className="App">
      <header className="App-header">
        <h1>Social Media Post Generator</h1>
      </header>
      <main className="App-main">
        <GenratePostForm />
        <FetchPosts />
      </main>
    </div>
 )
}

export default App;
