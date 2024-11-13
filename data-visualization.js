// Meditation Data: Timeline Events (with popularity over time)
const meditationHistory = [
    { year: -3000, event: "Ancient Meditation Practices in India", popularity: 10, era: "ancient" },
    { year: -500, event: "Buddha Introduces Meditation as a Path to Enlightenment", popularity: 15, era: "ancient" },
    { year: 500, event: "Meditation Spreads Through China and Japan", popularity: 30, era: "medieval" },
    { year: 1500, event: "Renaissance Europe Begins Embracing Eastern Practices", popularity: 25, era: "medieval" },
    { year: 1900, event: "Modern Mindfulness Meditation Becomes Popular in the West", popularity: 50, era: "modern" },
    { year: 2020, event: "Meditation Practices Spread Through Apps and Online Platforms", popularity: 90, era: "modern" }
];

// Prepare Data for Chart.js
const getChartData = (eraFilter) => {
    let filteredData = meditationHistory;
    if (eraFilter !== 'all') {
        filteredData = meditationHistory.filter(item => item.era === eraFilter);
    }

    return {
        labels: filteredData.map(item => item.year),
        datasets: [{
            label: 'Popularity of Meditation Over Time',
            data: filteredData.map(item => item.popularity),
            fill: false,
            borderColor: '#4a3a52',
            tension: 0.1
        }]
    };
};

// Initialize Chart
let chart = new Chart(document.getElementById('meditationTimeline').getContext('2d'), {
    type: 'line',
    data: getChartData('all'),
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    title: function (tooltipItem) {
                        const item = meditationHistory.find(event => event.year === tooltipItem[0].label);
                        document.getElementById("eraTitle").textContent = `Event: ${item.event}`;
                        document.getElementById("eraDescription").textContent = `Year: ${item.year}, Popularity: ${item.popularity}`;
                    }
                }
            }
        },
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Year'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Popularity'
                }
            }
        }
    }
});

// Filter Data based on Selected Era
function filterData() {
    const eraFilter = document.getElementById('eraFilter').value;
    chart.data = getChartData(eraFilter);
    chart.update();
}

