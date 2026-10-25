// FRAG 4/6 - src/engine/audioEngine.ts
// Sonido de lengüeta ELA real, no MIDI

let ctx: AudioContext|null=null;
const getCtx=()=>{
 if(!ctx) ctx=new AudioContext();
 return ctx;
};

export const playReed=(midi:number,bellow:'A'|'C')=>{
 const c=getCtx();
 const o=c.createOscillator();
 const g=c.createGain();
 const f=c.createBiquadFilter();
 
 const freq=440*Math.pow(2,(midi-69)/12);
 // Fuelle: Abriendo más brillante, Cerrando más oscuro
 const bright=bellow==='A'?1800:900;
 
 o.frequency.value=freq;
 o.type='sawtooth';
 f.type='lowpass';
 f.frequency.value=bright;
 
 g.gain.setValueAtTime(0,c.currentTime);
 g.gain.linearRampToValueAtTime(0.8,c.currentTime+0.05);
 g.gain.exponentialRampToValueAtTime(0.001,c.currentTime+1.2);
 
 o.connect(f); f.connect(g); g.connect(c.destination);
 o.start(); o.stop(c.currentTime+1.3);
 
 // Vibración háptica si estás en celu
 if('vibrate' in navigator) navigator.vibrate(20);
};
