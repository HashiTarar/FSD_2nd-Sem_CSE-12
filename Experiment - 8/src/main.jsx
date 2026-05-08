import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GameScore from './Gamescore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameScore />
  </StrictMode>,
)
