document.getElementById("meditationQuiz").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from reloading the page

    let mood = document.querySelector('input[name="mood"]:checked') ? document.querySelector('input[name="mood"]:checked').value : '';
    let guidance = document.querySelector('input[name="guidance"]:checked') ? document.querySelector('input[name="guidance"]:checked').value : '';
    let duration = document.querySelector('input[name="duration"]:checked') ? document.querySelector('input[name="duration"]:checked').value : '';

    let meditationType = '';
    let reasoning = '';

    // Check if all fields are selected
    if (!mood || !guidance || !duration) {
        alert("Please answer all the questions.");
        return;
    }

    // Meditation recommendation logic
    if (mood === "anxious" && guidance === "guided" && duration === "short") {
        meditationType = "Loving Kindness Meditation";
        reasoning = "This type of meditation is great for calming anxiety and fostering positive emotions, especially when you’re short on time.";
    } else if (mood === "stressed" && guidance === "self-directed" && duration === "long") {
        meditationType = "Open Awareness Meditation";
        reasoning = "Open awareness meditation is effective for reducing stress, especially when you have more time to dedicate to your practice.";
    } else {
        meditationType = "Guided Meditation";
        reasoning = "Guided meditation is great for beginners and those who want structured guidance in their practice.";
    }

    // Show recommendation
    document.getElementById("meditationType").textContent = meditationType;
    document.getElementById("reasoning").textContent = reasoning;
    document.getElementById("recommendation").classList.remove("hidden"); // Show the recommendation section
});
