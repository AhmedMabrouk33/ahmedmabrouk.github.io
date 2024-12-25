window.onload = function () {
    // Simulate a loading delay (e.g., waiting for data to load or processing)
    setTimeout(function () {
        // Hide the loading screen
        document.getElementById("loading-screen").style.display = "none";
        // Show the main content
        document.getElementById("main-content").style.display = "block";
    }, 3000); // 3-second delay (adjust as needed)
};
