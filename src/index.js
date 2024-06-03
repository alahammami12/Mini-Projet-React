import { createRoot } from 'react-dom/client'; // Importez createRoot depuis react-dom
import App from './components/App';

// Utilisez createRoot pour rendre votre composant principal
const root = createRoot(document.getElementById('root')); // Remplacez ReactDOM.render par createRoot
root.render(<App />);

