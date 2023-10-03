/* componentes */
import Show from './components/Show';
import Menu from './components/Menu';
/* css */
import './components/all.css';
function App() {
  return (
    <div className="flex  md:flex-col lg:flex-row h-screen">
      <Menu />
      <Show />
    </div>
  );
}

export default App;
