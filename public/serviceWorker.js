console.log("Service Worker Loaded...");

self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log("Push Recieved...");
});
