import './App.css';
import Hero from './Component/Hero/Hero';
import MoveList from './Component/MoveList/MoveList';
import Nav from './Component/Nav/Nav';


function App() {
  return (
    <div className="App">
      <div className='bg-gray-800 min-h-screen'>
     <div className='container mx-auto'>
     <Nav></Nav>
      <Hero></Hero>
     </div>
    <MoveList title="Your conent sort move" filter="sort_by-rating" carousel={true}></MoveList>
     <MoveList title="Your conent action move" filter="genre-action"></MoveList>
      </div>
      
    </div>
  );
}

export default App;
