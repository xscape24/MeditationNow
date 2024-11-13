// Updated Data: Data for each era, now reflecting the key events in meditation history
const data = {
    "ancient": [
        { year: -3000, event: "First recorded meditation practices in India", popularity: 10 },
        { year: -500, event: "Meditation becomes integral to early Buddhism", popularity: 30 },
        { year: -100, event: "Meditation spreads throughout Asia", popularity: 40 },
    ],
    "medieval": [
        { year: 600, event: "Meditation spreads to China via Buddhism", popularity: 50 },
        { year: 1200, event: "Zen Buddhism spreads meditation to Japan", popularity: 60 },
        { year: 1500, event: "Meditation reaches Europe via trade routes", popularity: 45 },
    ],
    "modern": [
        { year: 1900, event: "Meditation introduced to the West with mindfulness", popularity: 60 },
        { year: 1950, event: "Counterculture movement embraces meditation", popularity: 70 },
        { year: 2000, event: "Meditation apps and platforms make meditation mainstream", popularity: 90 },
        { year: 2024, event: "Millions of meditation app users worldwide", popularity: 100 },
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
            label: 'Meditation Popularity Over Time',
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
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                const event = eraData[tooltipItem.dataIndex].event;
                                return `${event}: ${tooltipItem.raw}% popularity`;
                            }
                        }
                    }
                }
            }
        });
    }
}

// Call the function once to load the initial data (Ancient Era by default)
updateTimeline();
