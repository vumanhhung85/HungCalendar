/**
 * Service worker tối thiểu — chỉ để Chrome/Android công nhận trang đủ điều kiện
 * "Cài đặt app". KHÔNG cache bất cứ gì, luôn lấy dữ liệu mới nhất từ mạng,
 * tránh tình trạng cài app xong lại thấy bản Dashboard cũ.
 */
self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  e.respondWith(fetch(e.request));
});
