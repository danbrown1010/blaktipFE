/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
 // console.info('Blaktip Service worker disabled for development, will be generated at build time.');
// var CACHE_NAME = 'blaktip-site-cache-v1';
// var urlsToCache = [
//   '/',
//   '404.hmtl'
// ];

// self.addEventListener('activate', function(event) {
//   console.log('Blaktip Service WWorker Finally active. Ready to start serving content!');  
// });

//  self.addEventListener('install', function(event) {
//   // Perform install steps
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function(cache) {
//         console.log('Opened Blaktip cache...');
//         return cache.addAll(urlsToCache);
//       })
//   );
// });

var CACHE_NAME = 'blaktip-site-cache-v1';
var urlsToCache = [
  '/',
  '/images/reef4.png',
  '/images/apple-icon.png',
  '/images/reef5.png'
];

self.addEventListener('push', function(event) {  
  console.log('Received a push message', event);

  var title = 'Yay a message.';  
  var body = 'We have received a push message.';  
  var icon = '/images/icon-192x192.png';  
  var tag = 'simple-push-demo-notification-tag';

  event.waitUntil(  
    self.registration.showNotification(title, {  
      body: body,  
      icon: icon,  
      tag: tag  
    })  
  );  
});

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );  
});

self.addEventListener('activate', function(event) {
  console.log('Finally active. Ready to start serving content!');  
});