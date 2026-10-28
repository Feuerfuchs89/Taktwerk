/* Taktwerk / Poi-Studio – Offline-Speicher.
   Eigene Dateien: erst Netz (damit Updates sofort ankommen), sonst aus dem Speicher.
   Fremde Dateien (Schriften, Video-Umwandler): einmal geladen, danach aus dem Speicher. */
const CACHE='taktwerk-v1';
const CORE=['./','index.html','poi.html','manifest.webmanifest','manifest-poi.webmanifest','icon.svg','poi-icon.svg',
  'icon-192.png','icon-512.png','poi-icon-192.png','poi-icon-512.png','favicon-32.png','poi-favicon-32.png','apple-touch-icon.png','poi-apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||r.headers.has('range'))return;const u=new URL(r.url);
  if(u.origin===location.origin){
    e.respondWith(fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp));}return res;})
      .catch(()=>caches.match(r,{ignoreSearch:true}).then(m=>m||caches.match('index.html'))));return;}
  if(/fonts\.(googleapis|gstatic)\.com|cdn\.jsdelivr\.net/.test(u.host)){
    e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{if(res.ok||res.type==='opaque'){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp));}return res;})));}
  /* alles andere (z. B. Gemini) geht direkt ins Netz */
});
