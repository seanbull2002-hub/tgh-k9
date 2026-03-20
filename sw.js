var CACHE='tgh-k9-v2';
var FILES=['.','index.html','manifest.json','icon-192.png','icon-512.png'];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(FILES);}));
  self.skipWaiting();
});
self.addEventListener('activate',function(e){e.waitUntil(clients.claim());});
self.addEventListener('fetch',function(e){
  if(e.request.url.includes('firestore.googleapis.com')||e.request.url.includes('firebase')){
    return;
  }
  e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request);}));
});
