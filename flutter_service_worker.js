'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"ahmed_mabrouk_portfolio_image.png": "e9dc33ab7bfa9822d971839db4b14ad5",
"assets/AssetManifest.bin": "8908a45467970b578b5811529630c18d",
"assets/AssetManifest.bin.json": "25c4dab9eff3a3b8b039ea37bddceec2",
"assets/AssetManifest.json": "7629ebdafae89f0e31dff0c52665c756",
"assets/assets/fonts/Inter-VariableFont_opsz,wght.ttf": "0a77e23a8fdbe6caefd53cb04c26fabc",
"assets/assets/fonts/Nunito-VariableFont_wght.ttf": "ea0ad4c72a135f9a43ec7bb83f2469aa",
"assets/assets/fonts/Preahvihear-Regular.ttf": "b728ff1cdead5239b67535d2073baf70",
"assets/assets/fonts/ReadexPro-VariableFont_HEXP,wght.ttf": "3c83e886a6a771b836d7a52cfdce469d",
"assets/assets/icons/ahmed_mabrouk_portfolio_image.png": "e9dc33ab7bfa9822d971839db4b14ad5",
"assets/assets/icons/arrow_left_circle.svg": "7d12d8ddae8776ff58b17f99bbb358b1",
"assets/assets/icons/arrow_right_circle.svg": "85a4c3ab519080d22a2921e7ea0ab1eb",
"assets/assets/icons/contact/call_icon.svg": "d2ef879ccdd290ad29cfe1bff9c29872",
"assets/assets/icons/contact/email_icon.svg": "be8b6f87d0ccdc5d81378bf187178b46",
"assets/assets/icons/contact/github_icon.svg": "10ce92e73e068a78b9c2c51ce725c4eb",
"assets/assets/icons/contact/gmail_icon.svg": "a41f5855956310b6ccdf33170def19da",
"assets/assets/icons/contact/linkedIn_icon.svg": "6e47b1d9e20c15dd9ee6c5a05f1e549c",
"assets/assets/icons/contact/telegram_icon.svg": "212a61b3d26d01793079bd39ccb2277e",
"assets/assets/icons/contact/whatsapp_icon.svg": "290d6340d2670bbedec5b38c6e81c3ce",
"assets/assets/icons/download_icon.svg": "387703f27ab3fc73a5d7d552f06e8b20",
"assets/assets/icons/info_icon.svg": "1c173c1b57ec21f84ebf37c58dd3f1ac",
"assets/assets/icons/menu_icon.svg": "f8c3e4b202c0ae592f71a9499c88de9e",
"assets/assets/icons/skills/c++_logo_icon.svg": "829ef7097e66b66ea40fab691c5a9eb7",
"assets/assets/icons/skills/c_language_icon.svg": "357f91c9d3631593eae404aca3f74301",
"assets/assets/icons/skills/dart_logo_icon.svg": "63a1fa89591745e789e439a1f2d1abf1",
"assets/assets/icons/skills/figma_logo_icon.svg": "76b1326d4149fc87c1b3647e6c3a8345",
"assets/assets/icons/skills/flutter_logo_icon.svg": "faf8f499559f6b2f815f454a5794eae3",
"assets/assets/icons/skills/github_logo_icon.svg": "496903c9a4dc89a3015d9bc9d7664da9",
"assets/assets/icons/skills/git_logo_icon.svg": "f7287ff316e284af16ce082c870c478f",
"assets/assets/icons/skills/java-script_logo_icon.svg": "66c0dc0b03baf6c081d035f40132a0e4",
"assets/assets/icons/skills/node-js_logo_icon.svg": "73dbb25fa5bed04b15f1d8b1f5b1102f",
"assets/assets/icons/skills/postman_icon.svg": "9f7a40b53b8c885e84db950b87e57fac",
"assets/assets/icons/skills/python_logo_icon.svg": "d424b39372d99aaa850612002ed4a6e1",
"assets/assets/images/error_connection_image.png": "1f30794a28e2fc0cc4b87711dd256a87",
"assets/assets/images/image_energy-management_logo.jpg": "25d4112466441c1e283a63e791de42e8",
"assets/assets/images/image_ti_logo.png": "bb6d92c89ef6f484d1892f866b023234",
"assets/assets/images/laptop_hero_section_image.png": "f26de0ed3ceb892a1d5064da6570674a",
"assets/assets/images/mobile_hero_image.png": "60b604300cf79baf4af7f28466ec21b5",
"assets/assets/images/no_image_project_image.png": "f1b7e19cbac41757397f8e50b67406b2",
"assets/assets/images/section_background_image.svg": "a7aa642a21a05497f79e4eb72e8017f9",
"assets/assets/images/splash_screen_logo_image.png": "1d56e991426a01e76fc3adc13c7715cd",
"assets/assets/json/metadata_portfolio_v01_response.json": "51310a00fef150824ebaf42d9ce6260e",
"assets/assets/json/portfolio_v01_response.json": "ffb9249eb092b96537c9d80397798735",
"assets/FontManifest.json": "0c1cf8dd59ce19330ab752c4fc74cb09",
"assets/fonts/MaterialIcons-Regular.otf": "ed52a59698e120c80fc2e50d100ef162",
"assets/NOTICES": "4c9fbd21c9795ee59abc5649b70854fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
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
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "63dc84e5cac41a72b3f04a2f42100515",
"icons/ahmed_mabrouk_portfolio_image.png": "e9dc33ab7bfa9822d971839db4b14ad5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "448a667c2deb0c8b483691454844b2f1",
"/": "448a667c2deb0c8b483691454844b2f1",
"main.dart.js": "ab6e31bc3d63aa0aadc419ace5f48881",
"manifest.json": "c6cf4a4cb90860061436d8a19b253d75",
"version.json": "eda633352d09a8894aa8e644fcd8ed1f"};
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
