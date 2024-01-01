import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import GlobalStyles from './styles/globalStyles.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <><GlobalStyles /><App /></>
)
