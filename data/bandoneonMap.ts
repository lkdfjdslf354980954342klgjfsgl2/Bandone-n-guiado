// FRAG 1/3 - BandoGuide - no se corta
export type Bellows='A'|'C';
export type Hand='L'|'R';
export interface Btn{
 id:string;hand:Hand;x:number;y:number;
 A:string;C:string;mA:number;mC:number;
}
// FRAG 2/3 - IZQUIERDA 35 - de tu imagen HD
export const LEFT:Btn[]=[
 {id:'1/4+',hand:'L',x:0.42,y:0.08,A:'F#4',C:'F#4',mA:66,mC:66},
 {id:'0/0',hand:'L',x:0.48,y:0.08,A:'A#4',C:'F#4',mA:70,mC:66},
 {id:'G-G',hand:'L',x:0.56,y:0.12,A:'G4',C:'G4',mA:67,mC:67},
 {id:'G#-G#',hand:'L',x:0.64,y:0.12,A:'G#4',C:'G#4',mA:68,mC:68},
 {id:'A-A',hand:'L',x:0.72,y:0.14,A:'A4',C:'A4',mA:69,mC:69},
 {id:'3/5+',hand:'L',x:0.18,y:0.22,A:'C4',C:'C4',mA:60,mC:60},
 {id:'1/1',hand:'L',x:0.28,y:0.24,A:'F#3',C:'A3',mA:54,mC:57},
 {id:'1/A',hand:'L',x:0.38,y:0.26,A:'A3',C:'D4',mA:57,mC:62},
 {id:'2/G',hand:'L',x:0.48,y:0.28,A:'G3',C:'A#3',mA:55,mC:58},
 {id:'3/CB',hand:'L',x:0.58,y:0.28,A:'C4',C:'B3',mA:60,mC:59},
 {id:'4/CE',hand:'L',x:0.66,y:0.30,A:'E4',C:'D4',mA:64,mC:62},
 {id:'4/0A',hand:'L',x:0.76,y:0.32,A:'C#5',C:'F4',mA:73,mC:65},
 {id:'2/2+',hand:'L',x:0.28,y:0.38,A:'D#4',C:'D#3',mA:63,mC:51},
 {id:'5/DG',hand:'L',x:0.36,y:0.40,A:'D4',C:'G3',mA:62,mC:55},
 {id:'6/GE',hand:'L',x:0.48,y:0.42,A:'G#3',C:'E3',mA:56,mC:52},
 {id:'7/BA',hand:'L',x:0.56,y:0.44,A:'B3',C:'A3',mA:59,mC:57},
 {id:'8/DC#',hand:'L',x:0.66,y:0.44,A:'D#4',C:'C#4',mA:63,mC:61},
 {id:'9/F#',hand:'L',x:0.76,y:0.42,A:'F#4',C:'E4',mA:66,mC:64},
 {id:'8/3+',hand:'L',x:0.18,y:0.52,A:'D3',C:'D4',mA:50,mC:62},
 {id:'5/0',hand:'L',x:0.28,y:0.56,A:'G#3',C:'B3',mA:56,mC:59},
 {id:'10/E',hand:'L',x:0.36,y:0.58,A:'E3',C:'B3',mA:52,mC:59},
 {id:'11/F',hand:'L',x:0.48,y:0.60,A:'F4',C:'F4',mA:65,mC:65},
 {id:'12/E',hand:'L',x:0.58,y:0.60,A:'E4',C:'D#4',mA:64,mC:63},
 {id:'12cc',hand:'L',x:0.66,y:0.60,A:'D#4',C:'D#4',mA:63,mC:63},
 {id:'14/F',hand:'L',x:0.78,y:0.60,A:'F4',C:'F4',mA:65,mC:65},
 {id:'16/A#',hand:'L',x:0.88,y:0.58,A:'A4',C:'G#4',mA:69,mC:68},
 {id:'4/4+',hand:'L',x:0.18,y:0.78,A:'C#4',C:'C#3',mA:61,mC:49},
];
// FRAG 3/3 - DERECHA 37 - acá era donde se cortaba [0.74,
export const RIGHT:Btn[]=[
 {id:'4/4',hand:'R',x:0.34,y:0.10,A:'C#5',C:'C#5',mA:73,mC:73},
 {id:'0/0G',hand:'R',x:0.48,y:0.12,A:'G4',C:'G4',mA:67,mC:67},
 {id:'1/1F#',hand:'R',x:0.58,y:0.14,A:'F#4',C:'A#4',mA:66,mC:70},
 {id:'2/2E',hand:'R',x:0.68,y:0.12,A:'E5',C:'C5',mA:76,mC:72},
 {id:'3/3D#',hand:'R',x:0.78,y:0.18,A:'D#5',C:'D#5',mA:75,mC:75},
 {id:'0/0A',hand:'R',x:0.88,y:0.20,A:'A4',C:'G5',mA:69,mC:79},
 {id:'10/CD',hand:'R',x:0.22,y:0.28,A:'C5',C:'D5',mA:72,mC:74},
 {id:'6/0B',hand:'R',x:0.16,y:0.42,A:'B4',C:'B4',mA:71,mC:71},
 {id:'4/0F',hand:'R',x:0.30,y:0.36,A:'F5',C:'F5',mA:77,mC:77},
 {id:'2/0A#',hand:'R',x:0.38,y:0.34,A:'A#4',C:'A#4',mA:70,mC:70},
 {id:'3/0G#',hand:'R',x:0.50,y:0.36,A:'G#5',C:'A5',mA:80,mC:81},
 {id:'5/BC#',hand:'R',x:0.60,y:0.38,A:'B4',C:'C#5',mA:71,mC:73},
 {id:'7/DE',hand:'R',x:0.70,y:0.40,A:'D5',C:'E5',mA:74,mC:76},
 {id:'2/C',hand:'R',x:0.74,y:0.35,A:'C5',C:'C5',mA:72,mC:72},
 {id:'3/4D',hand:'R',x:0.82,y:0.38,A:'D5',C:'D5',mA:74,mC:74},
 {id:'15/F#',hand:'R',x:0.92,y:0.36,A:'F5',C:'F#5',mA:77,mC:78},
 {id:'8/0A',hand:'R',x:0.12,y:0.56,A:'A4',C:'A4',mA:69,mC:69},
 {id:'4/0F2',hand:'R',x:0.28,y:0.56,A:'F5',C:'F5',mA:77,mC:77},
 {id:'8/0D#',hand:'R',x:0.36,y:0.54,A:'D#5',C:'D#5',mA:75,mC:75},
 {id:'10/D#',hand:'R',x:0.52,y:0.56,A:'D#5',C:'D#5',mA:75,mC:75},
 {id:'11/F#G#',hand:'R',x:0.62,y:0.58,A:'F#5',C:'G#5',mA:78,mC:80},
 {id:'12/B',hand:'R',x:0.72,y:0.60,A:'B4',C:'B4',mA:71,mC:71},
 {id:'13/C#E',hand:'R',x:0.82,y:0.64,A:'C#5',C:'E5',mA:73,mC:76},
 {id:'14ccF',hand:'R',x:0.90,y:0.70,A:'F5',C:'F5',mA:77,mC:77},
];

export const BANDONEON_ELA=[...LEFT,...RIGHT];
export const getNote=(b:Btn,bel:Bellows)=>bel==='A'?b.A:b.C;
export const getMidi=(b:Btn,bel:Bellows)=>bel==='A'?b.mA:b.mC;
