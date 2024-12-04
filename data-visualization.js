// Meditation Data: Timeline Events
const meditationHistory = [
    { year: -3000, event: "Ancient Meditation Practices in India", popularity: 10, era: "ancient", description: "Meditation practices were rooted in early spiritual traditions in India." },
    { year: -500, event: "Buddha Introduces Meditation as a Path to Enlightenment", popularity: 20, era: "ancient", description: "Buddha’s teachings on meditation began to spread across Asia, emphasizing mindfulness." },
    { year: 500, event: "Meditation Spreads Through China and Japan", popularity: 40, era: "medieval", description: "Meditation practices are integrated into Chinese and Japanese Buddhist traditions." },
    { year: 1500, event: "Renaissance Europe Begins Embracing Eastern Practices", popularity: 30, era: "medieval", description: "European intellectuals begin to show interest in Eastern philosophy and meditation." },
    { year: 1900, event: "Modern Mindfulness Meditation Becomes Popular in the West", popularity: 50, era: "modern", description: "Mindfulness meditation starts gaining attention in the West as a form of stress management." },
    { year: 2020, event: "Meditation Practices Spread Through Apps and Online Platforms", popularity: 90, era: "modern", description: "Meditation apps like Headspace and Calm bring meditation practices to a global audience." }
];

// Prepare Chart Data
const getChartData = (eraFilter) => {
    let filteredData = meditationHistory;
    if (eraFilter !== 'all') {
        filteredData = meditationHistory.filter(item => item.era === eraFilter);
    }

    return {
        labels: filteredData.map(item => item.year),
        datasets: [{
            label: 'Popularity (%) of Meditation Practices Over Time',
            data: filteredData.map(item => item.popularity),
            fill: false,
            borderColor: '#4a3a52',
            tension: 0.4,
            pointBackgroundColor: '#6a4c6c',
            pointRadius: 6,
            pointHoverRadius: 8
        }]
    };
};

// Initialize Chart
let chart = new Chart(document.getElementById('meditationTimeline').getContext('2d'), {
    type: 'line',
    data: getChartData('all'),
    options: {
        responsive: true,
        onClick: function (event, elements) {
            if (elements.length > 0) {
                const index = elements[0].index;
                const selectedEvent = meditationHistory[index];

                document.getElementById("eraTitle").textContent = `Event: ${selectedEvent.event}`;
                document.getElementById("eraDescription").textContent = `${selectedEvent.description} Year: ${selectedEvent.year}, Popularity: ${selectedEvent.popularity}%`;
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    title: function (tooltipItem) {
                        const item = meditationHistory.find(event => event.year === tooltipItem[0].label);
                        return `Event: ${item.event}`;
                    },
                    afterLabel: function (tooltipItem) {
                        const item = meditationHistory.find(event => event.year === tooltipItem.label);
                        return `Description: ${item.description}`;
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
                min: 0,
                max: 100,
                title: {
                    display: true,
                    text: 'Popularity (%)'
                },
                ticks: {
                    stepSize: 10
                }
            }
        },
        title: {
            display: true,
            text: 'Meditation Practices Through History'
        }
    }
});

// Filter Data Based on Era
function filterData() {
    const eraFilter = document.getElementById('eraFilter').value;
    chart.data = getChartData(eraFilter);
    chart.update();
}
