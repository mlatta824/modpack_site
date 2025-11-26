import { useState } from 'react'
import './App.css'
import PackList from './pack_list/page.tsx'

function App() {

  const [currentPage, setCurrentPage] = useState('home')

  const forgeLogo = '/packs/curseforge.svg';
  const minecraftLogo = '/packs/minecraft.svg';

  if (currentPage === 'packs') {
    return(
      <div>
        <button onClick={() => setCurrentPage('home')} style = {{marginBottom: '2rem'}}>
          &larr; Back to Home
        </button>
        <PackList />
      </div>
    )
  }

  return (
    <>
      <div>
        <a href="https://www.curseforge.com/download/app" target="_blank">
          <img src={forgeLogo} className="logo" alt="CurseForge logo" />
        </a>
        <a href="https://www.minecraft.net" target="_blank">
          <img src={minecraftLogo} className="logo minecraft" alt="Minecraft logo" />
        </a>
      </div>
      <h1>Latta Modpacks</h1>
      <div className="card">
        <button onClick={() => setCurrentPage('packs')}>
          Browse Packs
        </button>
        <p>
          Custom Modpacks for Minecraft
        </p>
      </div>
      <p className="read-the-docs">
        Created by Matthew Latta
      </p>
    </>
  )
}

export default App
