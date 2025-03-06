//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const outputTable = document.getElementById("output");

  // Function to create a promise that resolves after a random time (1-3 seconds)
  function createPromise(index) {
    return new Promise((resolve) => {
      const timeTaken = (Math.random() * (3 - 1) + 1).toFixed(3);
      setTimeout(() => {
        resolve({ name: `Promise ${index + 1}`, time: timeTaken });
      }, timeTaken * 1000);
    });
  }

  // Create an array of 3 promises
  const promises = [createPromise(0), createPromise(1), createPromise(2)];

  // Wait for all promises to resolve
  Promise.all(promises).then((results) => {
    // Remove loading row
    outputTable.innerHTML = "";

    // Append resolved promises to the table
    results.forEach((result) => {
      const row = `<tr><td>${result.name}</td><td>${result.time}</td></tr>`;
      outputTable.innerHTML += row;
    });

    // Calculate the total time (maximum time taken)
    const totalTime = Math.max(...results.map((res) => parseFloat(res.time))).toFixed(3);
    const totalRow = `<tr><td><strong>Total</strong></td><td><strong>${totalTime}</strong></td></tr>`;
    outputTable.innerHTML += totalRow;
  });
});
