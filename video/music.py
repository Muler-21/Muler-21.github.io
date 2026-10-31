"""Royalty-free music made from scratch with numpy (no samples, no outside recordings).
  python music.py out.wav                          gentle lesson bed: marimba-like plucks over a soft pad, 96 bpm
  python music.py song <bpm> <seconds> <seed> out.wav
                                                   eskista dance groove in 12/8: kebero-style drum, claps,
                                                   shaker, bass and a krar-like plucked pentatonic riff"""
import numpy as np, wave, sys
sr = 48000
A = lambda m: 440 * 2 ** ((m - 69) / 12)

def save(out, fn):
    out = out / np.max(np.abs(out)) * .6; f = int(sr * .05); out[:f] *= np.linspace(0, 1, f); out[-f:] *= np.linspace(1, 0, f)
    d = (np.stack([out, out * .97], 1) * 32767).astype(np.int16)
    w = wave.open(fn, 'wb'); w.setnchannels(2); w.setsampwidth(2); w.setframerate(sr); w.writeframes(d.tobytes()); w.close()

def bed(fn):
    bpm = 96; beat = 60 / bpm; bars = 16; L = int(sr * beat * 4 * bars); out = np.zeros(L)
    def note(f, start, d, amp, kind):
        i0 = int(start * sr); n = min(int(d * sr), L - i0)
        if n <= 0: return
        tt = np.arange(n) / sr
        if kind == 'pluck': w = (np.sin(2 * np.pi * f * tt) + .35 * np.sin(2 * np.pi * 4 * f * tt) * np.exp(-tt * 18)) * np.exp(-tt * 5.5)
        elif kind == 'bass': w = np.sin(2 * np.pi * f * tt) * np.exp(-tt * 2.2)
        else: w = (np.sin(2 * np.pi * f * tt) + .5 * np.sin(2 * np.pi * 2.003 * f * tt)) * np.minimum(1, tt / .6) * np.minimum(1, (d - tt) / .8)
        out[i0:i0 + n] += amp * w
    chords = [[60, 64, 67], [57, 60, 64], [53, 57, 60], [55, 59, 62]]
    penta = [72, 74, 76, 79, 81, 84]; rng = np.random.default_rng(4)
    for bar in range(bars):
        ch = chords[bar % 4]; s0 = bar * 4 * beat
        for m in ch: note(A(m), s0, 4 * beat, .05, 'pad')
        note(A(ch[0] - 24), s0, 2 * beat, .22, 'bass'); note(A(ch[0] - 24), s0 + 2 * beat, 2 * beat, .18, 'bass')
        for k in range(8):
            if rng.random() < .72:
                m = rng.choice([x for x in penta if (x % 12) in [c % 12 for c in ch] + [2, 9]]); note(A(m), s0 + k * beat / 2, beat * 1.2, .12, 'pluck')
    save(out, fn)

def song(bpm, seconds, seed, fn):
    beat = 60 / bpm; step = beat / 3; barL = 4 * beat
    bars = int(np.ceil(seconds / barL)) + 1; L = int(sr * bars * barL); out = np.zeros(L)
    rng = np.random.default_rng(seed)
    def add(w, t, amp):
        i0 = int(t * sr); n = min(len(w), L - i0)
        if n > 0: out[i0:i0 + n] += amp * w[:n]
    def krar(f, d):  # Karplus-Strong plucked string, computed one period at a time
        N = max(2, int(sr / f)); n = int(d * sr); y = np.zeros(n + N)
        y[:N] = rng.uniform(-1, 1, N); y[:N] -= y[:N].mean()
        for i in range(N, n + N, N):
            prev = y[i - N:i]; nxt = .5 * (prev + np.roll(prev, 1)) * .994
            y[i:i + N] = nxt[:len(y[i:i + N])]
        return y[N:] * np.exp(-np.arange(n) / sr * 1.5)
    tt = lambda d: np.arange(int(d * sr)) / sr
    def kick(): t = tt(.32); return np.sin(2 * np.pi * (55 * t + 90 * (1 - np.exp(-t * 30)) / 30)) * np.exp(-t * 11)
    def slap(): t = tt(.18); return (np.sin(2 * np.pi * 210 * t) * .7 + rng.uniform(-1, 1, len(t)) * .5) * np.exp(-t * 28)
    def clap():
        t = tt(.2); n = rng.uniform(-1, 1, len(t)); e = np.exp(-t * 30)
        for k in (.011, .022): e += np.exp(-np.maximum(t - k, 0) * 40) * (t > k) * .7
        return n * e * .8
    def shaker(): t = tt(.07); return rng.uniform(-1, 1, len(t)) * np.exp(-t * 70)
    def bass(f, d): t = tt(d); return (np.sin(2 * np.pi * f * t) + .25 * np.sin(4 * np.pi * f * t)) * np.exp(-t * 3) * np.minimum(1, t / .01)
    def pad(f, d): t = tt(d); return (np.sin(2 * np.pi * f * t) + .4 * np.sin(2 * np.pi * 1.5 * f * t)) * np.minimum(1, t / .3) * np.minimum(1, (d - t) / .3)
    prog = [48, 53, 55, 48]                 # C  F  G  C
    scale = [0, 2, 4, 7, 9]                  # major pentatonic (tizita-like, bright for children)
    def pick(root, k): return 60 + (root % 12) + scale[k % 5] + 12 * (k // 5)
    riffs = [[rng.integers(0, 7) if rng.random() < .8 else None for _ in range(12)] for _ in range(2)]
    for b in range(bars):
        t0 = b * barL; root = prog[b % 4]; first = b == 0
        for s in range(12):
            t = t0 + s * step
            if not first:
                if s in (0, 4, 6, 10): add(kick(), t, .9 if s in (0, 6) else .55)
                if s in (3, 9): add(slap(), t, .55); add(clap(), t, .45)
                add(shaker(), t, .16 if s % 3 == 0 else .08)
            if s in (0, 6, 10): add(bass(A(root - 12 + (7 if s == 6 else 0)), step * 2.5), t, .55)
            r = riffs[(b // 2) % 2][s]
            if r is not None and (s % 3 != 1 or rng.random() < .5):
                add(krar(A(pick(root, int(r))), step * 3), t, .5 if s % 3 == 0 else .32)
        add(pad(A(root + 12), barL), t0, .07); add(pad(A(root + 16), barL), t0, .05)
    save(out[:int(seconds * sr)], fn)

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == 'song':
        song(float(sys.argv[2]), float(sys.argv[3]), int(sys.argv[4]), sys.argv[5])
    else:
        bed(sys.argv[1] if len(sys.argv) > 1 else 'music.wav')
