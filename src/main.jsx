import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Clock from './Clock'
import ApiData from './Apidata'
import "./App.css";
import Form from './Form'
import Important from './Important'
import Sample from './Sample'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App />
  <Clock />
  <ApiData />
  <Form />
  <Important />
  <Sample />
 
  </StrictMode>,
)
