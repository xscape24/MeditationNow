document.getElementById("meditationQuiz").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from reloading the page

    // Always selects the first option for each question
    let mood = document.querySelector('input[name="mood"]:checked').value;
    let guidance = document.querySelector('input[name="guidance"]:checked').value;
    let duration = document.querySelector('input[name="duration"]:checked').value;

    let meditationType = '';
    let reasoning = '';

    // Meditation recommendation logic: if first option is selected for each
    if (mood === "anxious" && guidance === "guided" && duration === "short") {
        meditationType = "Loving Kindness Meditation";
        reasoning = "This type of meditation is great for calming anxiety and fostering positive emotions, especially when you’re short on time.";
    } else {
        // Default response if not all first options are selected (just for fallback)
        meditationType = "Guided Meditation";
        reasoning = "Guided meditation is great for beginners and those who want structured guidance in their practice.";
    }

    // Show recommendation
    document.getElementById("meditationType").textContent = meditationType;
    document.getElementById("reasoning").textContent = reasoning;
    document.getElementById("recommendation").classList.remove("hidden"); // Show the recommendation section
});
