// FRAG 6/6 - App.tsx - une todo
import { useState } from 'react';
import { LEFT, RIGHT } from './data/bandoneonMap';
import { playReed } from './engine/audioEngine';
import { getMidi, getNote } from './data/bandoneonMap';
import './App.css';

export default function App(){
 const [bell,setBell]=useState<'A'|'C'>('A');
 return(
  <div className="wrap">
   <h1>Bandonegro ELA - Tu bottonera</h1>
   <button onClick={()=>setBell(bell==='A'?'C':'A')}>
    Fuelle: {bell==='A'?'Abriendo (A->)':'Cerrando (C->)'}
   </button>
   <div className="board">
    <div className="left">
     {LEFT.map(b=>(
      <button key={b.id} id={b.id} className="bando-btn"
       onClick={()=>{
        playReed(getMidi(b,bell),bell);
        const el=document.getElementById(b.id);
        el?.classList.add('sunk');
        setTimeout(()=>el?.classList.remove('sunk'),150);
       }}>
       {getNote(b,bell)}
       <small>{b.id}</small>
      </button>
     ))}
    </div>
    <div className="right">
     {RIGHT.map(b=>(
      <button key={b.id} id={b.id} className="bando-btn"
       onClick={()=>{
        playReed(getMidi(b,bell),bell);
        const el=document.getElementById(b.id);
        el?.classList.add('sunk');
        setTimeout(()=>el?.classList.remove('sunk'),150);
       }}>
       {getNote(b,bell)}
       <small>{b.id}</small>
      </button>
     ))}
    </div>
   </div>
  </div>
 );
}
