import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="bg-black text-white ">this is heading</h1>
      <div className='flex-col flex-wrap'>
      <div className='mb-30'><label  htmlFor="name">Name:</label></div>
      <input className="placeholder:italic placeholder:text-slate-400  bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" placeholder='yourname' id="name" />
        </div>





    </div>
  );
}

export default App;
