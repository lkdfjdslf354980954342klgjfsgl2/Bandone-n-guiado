// FRAG 5/6 - ButtonReal.tsx - botón que se hunde
import { playReed } from '../../engine/audioEngine';
import { Btn, getMidi } from '../../data/bandoneonMap';

export const ButtonReal=({btn,bellow}:{btn:Btn,bellow:'A'|'C'})=>{
 const onPress=()=>{
  const midi=getMidi(btn,bellow);
  playReed(midi,bellow);
  // clase sunk para hundir 6px
  const el=document.getElementById(btn.id);
  el?.classList.add('sunk');
  setTimeout(()=>el?.classList.remove('sunk'),150);
 };
 return(
  <button id={btn.id} onClick={onPress} className="bando-btn">
   {btn.A}/{btn.C}
  </button>
 );
};
