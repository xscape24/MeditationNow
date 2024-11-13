const data = {
    "ancient": [
        { year: 3000, event: "First recorded meditation", popularity: 10 },
        { year: 1000, event: "Meditation in early Buddhism", popularity: 30 },
        { year: 500, event: "Meditation spread in India", popularity: 40 },
    ],
    "medieval": [
        { year: 1000, event: "Buddhism spreads to China", popularity: 60 },
        { year: 1200, event: "Zen Buddhism in Japan", popularity: 70 },
        { year: 1500, event: "Spread of meditation to Europe", popularity: 50 },
    ],
    "modern": [
        { year: 1900, event: "Mindfulness introduced in the West", popularity: 80 },
        { year: 1950, event: "Meditation becomes mainstream", popularity: 90 },
        { year: 2024, event: "Meditation apps gain popularity", popularity: 100 },
    ]
};

// Function to update the timeline based on the selected era
function updateTimeline() {
    const era = document.getElementById("eraFilter").value;
    const eraData = data[era];

    // Get the canvas element
    const ctx = document.getElementById("meditationTimeline").getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Create or update the chart with the new data for the selected era
    const chartData = {
        labels: eraData.map(item => item.year),
        datasets: [{
            label: 'Meditation Popularity',
            data: eraData.map(item => item.popularity),
            backgroundColor: '#d0bcdc', // Light lavender
            borderColor: '#5b4c63', // Dark purple
            borderWidth: 1
        }]
    };

    if (window.timelineChart) {
        // Update the existing chart
        window.timelineChart.data = chartData;
        window.timelineChart.update();
    } else {
        // Create a new chart if one does not exist yet
        window.timelineChart = new Chart(ctx, {
            type: 'line',
            data: chartData,
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Popularity'
                        },
                        min: 0,
                        max: 100
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
}

// Call the function once to load the initial data (Ancient Era by default)
updateTimeline();
