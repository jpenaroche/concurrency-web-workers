importScripts("sync.js");

self.addEventListener(
  "message",
  function (e) {
    console.log("waiter started");
    // Deserialize data.
    const { swg, sc } = e.data;
    const wg = WaitGroup.connect(swg);
    const count = new Int32Array(sc);

    // Wait for workers to terminate.
    wg.wait();

    // The following lines will always execute last.
    console.log("final value:", count);
    console.log("waiter done");
  },
  false
);
