"""Gentle royalty-free music bed made from scratch (no samples): marimba-like plucks over a soft pad, pentatonic, 96 bpm."""
import numpy as np, wave, sys
sr=48000; bpm=96; beat=60/bpm; bars=16; L=int(sr*beat*4*bars)
out=np.zeros(L)
def note(f,start,d,amp,kind):
    i0=int(start*sr); n=min(int(d*sr),L-i0)
    if n<=0: return
    tt=np.arange(n)/sr
    if kind=='pluck': w=(np.sin(2*np.pi*f*tt)+.35*np.sin(2*np.pi*4*f*tt)*np.exp(-tt*18))*np.exp(-tt*5.5)
    elif kind=='bass': w=np.sin(2*np.pi*f*tt)*np.exp(-tt*2.2)
    else: w=(np.sin(2*np.pi*f*tt)+.5*np.sin(2*np.pi*2.003*f*tt))*np.minimum(1,tt/.6)*np.minimum(1,(d-tt)/.8)
    out[i0:i0+n]+=amp*w
A=lambda m:440*2**((m-69)/12)
chords=[[60,64,67],[57,60,64],[53,57,60],[55,59,62]]
penta=[72,74,76,79,81,84]; rng=np.random.default_rng(4)
for bar in range(bars):
    ch=chords[bar%4]; s0=bar*4*beat
    for m in ch: note(A(m),s0,4*beat,.05,'pad')
    note(A(ch[0]-24),s0,2*beat,.22,'bass'); note(A(ch[0]-24),s0+2*beat,2*beat,.18,'bass')
    for k in range(8):
        if rng.random()<.72:
            m=rng.choice([x for x in penta if (x%12) in [c%12 for c in ch]+[2,9]]); note(A(m),s0+k*beat/2,beat*1.2,.12,'pluck')
out=out/np.max(np.abs(out))*.6; f=int(sr*.05); out[:f]*=np.linspace(0,1,f); out[-f:]*=np.linspace(1,0,f)
d=(np.stack([out,out*.97],1)*32767).astype(np.int16)
w=wave.open(sys.argv[1] if len(sys.argv)>1 else 'music.wav','wb'); w.setnchannels(2); w.setsampwidth(2); w.setframerate(sr); w.writeframes(d.tobytes()); w.close()
