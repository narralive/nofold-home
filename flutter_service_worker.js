'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c4bc0397ebc89a0fc13957786518ba98",
"assets/AssetManifest.bin.json": "b4ab4b7a701d104660754a3031985dfe",
"assets/AssetManifest.json": "66282f9533b207a0610f005f1c9e2a19",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0e6b016990cf441cfe619c31ae763c16",
"assets/images/bg-gradient-2.png": "38b2f546426fed227ac4da7ca45f0ce4",
"assets/images/bg-gradient.png": "b25774437e6cb4fc3045717eed1a3b88",
"assets/images/bg.png": "0a443a5fa45cd34a70ab1dd5d652087b",
"assets/images/comingsoon.png": "009fe3a5343e618738ed3c7de6440841",
"assets/images/comingsoon_2.png": "8d2b5bf49403d7b41f04895208bf58ed",
"assets/images/create-1.png": "0e607da06cffc9d6e7ebaa57d90bd4a8",
"assets/images/create-2.png": "1971899e954f41df8ec5e7fe50dd053f",
"assets/images/create-3.png": "ea0209ad202904669eb48d4375bc363a",
"assets/images/create-4.png": "db3e38206f75dec5564cc036c3c6bfc9",
"assets/images/create-5.png": "28de23aa974687156c4d4f0d1131b674",
"assets/images/create-6.png": "1967c6e795dd68f3587e5276d0d91588",
"assets/images/create-7.png": "4abdb575ca16bc1b6fa8326ee52a3e0b",
"assets/images/create-header.png": "11ed2ef403dd580ecfece941c1aae1d8",
"assets/images/create-header2.png": "380c8e8ecc5f1a1dacc219201546b773",
"assets/images/create-header3.png": "465d45dd0186f56746ffb5b63c05fd8b",
"assets/images/divider.png": "52d129c8701414aaca1b88669cad7d20",
"assets/images/footer.png": "17c2be90ad0adf35d38ad8d4884ceaae",
"assets/images/header-mobile-v2.png": "205374350296cfbb2b79bfc1e3d48903",
"assets/images/header-mobile-v3.png": "4f5c174adaf3f1583622750b03c055a4",
"assets/images/header-mobile.png": "3c18c3745461127ed911cef1a299be78",
"assets/images/header.png": "e364546e6a396cd1b2e969cbfa401891",
"assets/images/logo.png": "140fb39d7408ab461283c0ed99a963e5",
"assets/images/mr-app-short.png": "d3015c4d1206862832bfe5d0ca540062",
"assets/images/mr-app.png": "7ff99e7db80744d93b38fd23c380057f",
"assets/images/mr-photos.png": "ae09543837266dc9425ea4e25b402db6",
"assets/images/MR-text.png": "d3eb163c9e9f988aabc460487f6a26e1",
"assets/images/nofold-banner.png": "27dafe6adbeb29ae5621aec1c3026c63",
"assets/images/nofold-white-headsets-text.png": "4aa0cf8dc5a49416d27db6d803d7f1f1",
"assets/images/nofold-white-headsets.png": "ffae50148b1e0fb7bacc424a02d9745e",
"assets/images/nofold-white.png": "f44b8e0de8e8e77dbf35ceac62c0c76d",
"assets/images/play-hands.png": "b6963b892a1938f397d6eb71ddb422f9",
"assets/images/play-header.png": "3422ffd0b2b933580ff912010b96ca88",
"assets/images/play-library.png": "753b9dbc08f2e5053b98bdc3b9dd213d",
"assets/images/play-physics.png": "e7cc45167c87750537e5c10160131b8c",
"assets/images/play.png": "27e3b6d0f84e4bdf4a7cff340a301fe9",
"assets/images/share-1.png": "9a7f9e65a19f748398b320e006dce971",
"assets/images/share-2.png": "1f784a5391ec238e6505fa21e1cd9a1c",
"assets/images/share-3.png": "5736627ef382ff57def1bb2e554b5af6",
"assets/images/share-4.png": "bbb4208b4c1e781e4792d707ba9415f2",
"assets/images/share-header.png": "d292cc30c840918767719a141bb97817",
"assets/images/vr-app-short.png": "67350d4c3af53be24f5afd858a3a0762",
"assets/images/vr-app.png": "abf39d4594a05fd9d1c2c5ff723753c7",
"assets/images/vr-photos.png": "7e92d5cbfb32ef5883436d306f7680ef",
"assets/images/VR-text.png": "dedaa6d34b26d8e21ead62b6ae09962f",
"assets/NOTICES": "208bbe6d330065a98e4dd58206c0fb2b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "bbff02a9b918d1ab3e99b1c59ba2521b",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "b70f0e87169fcc1fc6bf66004be387df",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d212582b33513dee37808cc03bb208a3",
"/": "d212582b33513dee37808cc03bb208a3",
"main.dart.js": "3377278080dcea4afefee82e85a03ffe",
"manifest.json": "bffa35fa8aac46c4753512703568f378",
"version.json": "ab3a1dda27ac45571e65ee2e7c406e96"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
