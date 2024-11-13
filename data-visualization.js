// Data for the timeline
const meditationData = [
    { era: "Ancient", year: -500, description: "Meditation practices begin in ancient India and China, with roots in Hinduism and Taoism." },
    { era: "Ancient", year: 400, description: "Buddhist meditation practices spread across Asia, focusing on mindfulness and concentration." },
    { era: "Medieval", year: 1200, description: "Meditation gains prominence in Christian and Sufi traditions in the Middle East and Europe." },
    { era: "Modern", year: 1960, description: "Meditation enters the Western mainstream, influenced by Eastern teachers and scientific interest in mindfulness." },
    { era: "Modern", year: 2000, description: "Meditation practices become widely popularized through apps, wellness programs, and scientific studies." }
];

// Initialize the timeline chart
const ctx = document.getElementById('meditationTimeline').getContext('2d');
const timelineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: meditationData.map(point => point.year),
        datasets: [{
            label: 'Popularity of Meditation Over Time',
            data: meditationData.map(point => ({ x: point.year, y: Math.random() * 100 })),
            borderColor: '#5b4c63',
            fill: false,
            pointRadius: 6,
            pointHoverRadius: 8
        }]
    },
    options: {
        scales: {
            x: { type: 'linear', title: { display: true, text: 'Year' }},
            y: { title: { display: true, text: 'Popularity Score' }}
        },
        onClick: (e, elements) => {
            if (elements.length > 0) {
                const index = elements[0].index;
                showDetails(meditationData[index]);
            }
        }
    }
});

// Filter function for eras
function filterData() {
    const era = document.getElementById('eraFilter').value;
    const filteredData = era === "all" ? meditationData : meditationData.filter(data => data.era === era);
    
    // Update chart with filtered data
    timelineChart.data.labels = filteredData.map(point => point.year);
    timelineChart.data.datasets[0].data = filteredData.map(point => ({ x: point.year, y: Math.random() * 100 }));
    timelineChart.update();
}

// Show details function
function showDetails(dataPoint) {
    document.getElementById('eraTitle').innerText = `${dataPoint.era} Era - Year ${dataPoint.year}`;
    document.getElementById('eraDescription').innerText = dataPoint.description;
}
