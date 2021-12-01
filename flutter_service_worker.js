'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "84a83b28a61085d4f5e75d3db304e3c0",
"index.html": "d034a4995cfdedb53e0f980d31aacad1",
"/": "d034a4995cfdedb53e0f980d31aacad1",
"main.dart.js": "e3fc3287e597db736706cbaca3ba295f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2d8633ef4b6487355259541dfdf621ac",
"assets/images/fluttericon.png": "58c2bb5f534b6a171df2529092770e92",
"assets/images/login.png": "b6e7eb23f3c332c99169cf3189708330",
"assets/images/Facebook_Logo.png": "eee81b3d50f6217eca0d39ba4f6d647e",
"assets/images/welcome2.png": "29f4c46889c20ebb5b1dd01ce61093bc",
"assets/images/youtubesq.png": "0c12201270a41d46260cfbd39a8a28a9",
"assets/images/flutterdev2.png": "ef86469d26140dffd0ebcecc06a406cd",
"assets/images/flutterdev1.png": "fc2328290a3ade052b2a7b8bf1b3bbf6",
"assets/images/twitter.png": "88aa93c7d7d0b4f3bb45a0c7ad8f9a4b",
"assets/images/youtube.png": "090daea33cd0d47dab065800d9e55334",
"assets/images/Google.png": "e402f2a54b61c2f95f2f074ee9ce3d2b",
"assets/images/facebook.png": "583b4888262afc257f42c998f62bc53b",
"assets/images/flow.png": "d525adb94a3beb811d8f77afb65682ab",
"assets/images/welcome.png": "8d86c1afd0da53a15dc86c852f9f4b51",
"assets/images/BandM/raspberry.png": "e44a0cba775ca5227a5e720d08fbc682",
"assets/images/BandM/B_A_M_Logo.png": "4af36c1acfdc3454537a9c73f6f4eafb",
"assets/images/BandM/whole_milk.png": "549f93de3d01806670f426c1523a17ed",
"assets/images/BandM/almond_milk.png": "7a13ac9efa266653a92706713ccec758",
"assets/images/BandM/cia_seeds.png": "4ad347d7e7666235064f0108707bc4ac",
"assets/images/BandM/soy_milk.png": "8737b8c19d8246bb944968ba3e5beeaf",
"assets/images/BandM/vanilla_extract.png": "fee5690ffce3312da7b937d1a281b103",
"assets/images/BandM/greek_yogurt.png": "fb9cfbfa503cf952a9e7815751849f27",
"assets/images/BandM/blueberry.png": "fe8052dc5cc060926f5c827c0bf98092",
"assets/images/BandM/Pineapple.png": "dba6b6cdb0bf5389394b5534ffdba7f4",
"assets/images/BandM/mango.png": "ae4403f68d5b7d59426a9b7cbf71bd6e",
"assets/images/BandM/ice_cubes.png": "541389b76d350d6af0d086fbd3a7f377",
"assets/images/BandM/mint.png": "d3ea78eafbfc22cbac50e3da796443db",
"assets/images/BandM/Straw.png": "3b5ec92538d07f954c93a4b21c5b1e20",
"assets/images/BandM/chocosmoothie.png": "1a3bff733721c9d9caee931ad6e3ea61",
"assets/images/BandM/blackberry.png": "4ab38695be4675fbe888e43a529a8e27",
"assets/images/BandM/almond_butter.png": "7c6f6dde031823fc1fd95a927e2468d6",
"assets/images/BandM/oat_milk.png": "2ea3d2e9a5982a38b3bdf18be8d09e0d",
"assets/images/BandM/banana.png": "f9089680c9cc549b72830f0af04319b9",
"assets/images/BandM/fruit.png": "939c554d305337b7d3ecf9b678ae7190",
"assets/images/BandM/fruit_button.png": "45ad93603e149222f2d559e0dd5879c9",
"assets/images/BandM/spinach.png": "aea4eb47b813f4126d679b6be92ff4c6",
"assets/images/BandM/strawberry.png": "17dcd31bd54ec989481c141d235119ec",
"assets/images/BandM/peanut_butter.png": "4eb744f6746150f953520c8a5fe908e2",
"assets/images/BandM/protein_powder.png": "29c3d8c946a6d8023efffa24d437ef49",
"assets/images/BandM/clementines.png": "bb863019e34ccd198f9b77267c248117",
"assets/images/BandM/flax_seeds.png": "bd32abbea85c22caf8305f9858260ea6",
"assets/AssetManifest.json": "3bae0a09cced7b658a8850258503dd24",
"assets/NOTICES": "140161e63cedf8df20754d89b6146a6f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/share_everywhere/icons/twitter.png": "a4dfaf020789cbf745fa5c916e3a107e",
"assets/packages/share_everywhere/icons/linkedin.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/packages/share_everywhere/icons/facebook.png": "c22a4ee32b54d42a6f5599a866b84ba8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/placeholders/empty_image.png": "d3a5d04d776f546dd2477f4faca5d5c4",
"assets/assets/bootcamps/heart.gif": "5f53b377ae57c3729b67ee51ef7eb3d0",
"assets/assets/bootcamps/walking.gif": "fa115637e773f5dd9bd43634e9c93054",
"assets/assets/bootcamps/beach.gif": "9836f9cf921e7ac81144af8790248609",
"assets/assets/bootcamps/interview.gif": "62a5517a6b912b32318487dafb681e3a",
"assets/assets/bootcamps/airplane.gif": "86363db320ba8f319cef80441297ae3e",
"assets/assets/bootcamps/persuade.png": "29f4350335aa664a13a8652d02bb5dcc",
"assets/assets/bootcamps/lovelanguage.png": "22aec21afbf358102fed4fc4798ee46c",
"assets/assets/bootcamps/See%2520your%2520completed%2520Bootcamps.png": "1f57d71f156176f3464890a0dde9b3d0",
"assets/assets/bootcamps/videogame.gif": "19e7173af0c6f553da384b6f85f535ba",
"assets/assets/bootcamps/Alternative%2520movie%2520endings.png": "3c9e39f32273fe66f700659e8cd3c22e",
"assets/assets/bootcamps/reading.gif": "07faaff1e7aa82b7e22af08a996d6ad2",
"assets/assets/bootcamps/Get%2520to%2520know%2520your%2520neighbor.png": "7c4d1af398bb9be7d14f88456f046461",
"assets/assets/bootcamps/Make%2520your%2520favorite%2520game%2520even%2520better.png": "27ff4060a88974f2b5343dc60ac17254",
"assets/assets/bootcamps/Practice%2520winning%2520friends.png": "6f51f3813077bb79db7135e16eab32e4",
"assets/assets/bootcamps/please.gif": "19b3517d45f233245d06f00abfd20ad8",
"assets/assets/bootcamps/movie.gif": "d02cae9cb2d7f12060b5045c68dfb25f",
"assets/assets/bootcamps/Different%2520ways%2520to%2520move.png": "5ebb92860dc8e82e9eb881fe2f492fa9",
"assets/assets/bootcamps/Your%2520favorite%2520fictional%2520character.png": "05535c491dc73dee7461ea97336006cc",
"assets/assets/bootcamps/videogame.png": "c7d798bb56c25b1e606e8b8165cbb16e",
"assets/assets/bootcamps/Discover%2520your%2520families%2520love%2520languages.png": "4384c5c01af7e74d3e87e9f7683c801f",
"assets/assets/bootcamps/Write%2520about%2520a%2520family%2520vacation.png": "ff7cef12e181b1e5a55dc795f9db5585",
"assets/assets/bootcamps/Practice%2520winning%2520friendspng.png": "6f51f3813077bb79db7135e16eab32e4",
"assets/assets/bootcamps/Write%2520About%2520Your%2520Favorite%2520Memory.png": "be5a3779522ec2b6d47d0456947b8090",
"assets/assets/bootcamps/Get%2520what%2520I%2520want%2520from%2520my%2520parents.png": "2e301f2981c6212250e316b625f4ca5b",
"assets/assets/bootcamps/umbrella.gif": "695d4d22fbbef6c380a29d7efaa410f2",
"assets/assets/logo.png": "c7fb8ab9da1ecae5e84c4d8c18829d14",
"assets/assets/icons/wequil_school_logo.svg": "edc4e05e886bf71854372010df756286",
"assets/assets/icons/projects_tab_icon.svg": "aa24918d36e78a1a8fb2ffc7644d7595",
"assets/assets/icons/explore_tab_icon.svg": "7fab348f950cceeee99feb49db28e043",
"assets/assets/icons/getting_started_tab_icon.svg": "0d57795dd9f8735ba26f1e73783a9a7a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
