// Meditation History Data
const meditationHistory = [
    { year: -3000, event: "Ancient Meditation Practices in India", era: "Ancient" },
    { year: -500, event: "Buddha Introduces Meditation as a Path to Enlightenment", era: "Ancient" },
    { year: 500, event: "Meditation Spreads Through China and Japan", era: "Classical" },
    { year: 1500, event: "Renaissance Europe Begins Embracing Eastern Practices", era: "Classical" },
    { year: 1900, event: "Modern Mindfulness Meditation Becomes Popular in the West", era: "Modern" },
    { year: 2020, event: "Meditation Practices Spread Through Apps and Online Platforms", era: "Modern" }
];

// Set up the SVG container for the timeline
const margin = { top: 20, right: 30, bottom: 40, left: 40 };
const width = 800 - margin.left - margin.right;
const height = 200 - margin.top - margin.bottom;

const svg = d3.select("#timeline")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Define the scale for the x-axis (years)
const x = d3.scaleTime()
    .domain([new Date(-3500, 0, 1), new Date(2024, 0, 1)]) // Start and end dates
    .range([0, width]);

// Define the axis
const xAxis = d3.axisBottom(x).ticks(d3.timeYear.every(500));

// Add x-axis to the timeline
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

// Function to update the timeline based on selected era
function updateTimeline(filteredData) {
    // Clear existing markers
    svg.selectAll(".event").remove();
    svg.selectAll(".label").remove();

    // Add event markers to the timeline
    svg.selectAll(".event")
        .data(filteredData)
        .enter().append("circle")
        .attr("class", "event")
        .attr("cx", d => x(new Date(d.year, 0, 1)))
        .attr("cy", height / 2)
        .attr("r", 8)
        .style("fill", "#4a3a52")
        .on("mouseover", function (event, d) {
            d3.select(this).style("fill", "#8a6d7f");
            alert(d.event); // Drilldown feature (shows event name)
        })
        .on("mouseout", function () {
            d3.select(this).style("fill", "#4a3a52");
        });

    // Add labels for each event
    svg.selectAll(".label")
        .data(filteredData)
        .enter().append("text")
        .attr("class", "label")
        .attr("x", d => x(new Date(d.year, 0, 1)))
        .attr("y", height / 2 - 15)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#4a3a52")
        .text(d => d.year);
}

// Initial render with all data
updateTimeline(meditationHistory);

// Filter data when the user selects an era
d3.select("#eraFilter").on("change", function () {
    const selectedEra = d3.select(this).property("value");
    let filteredData;

    if (selectedEra === "all") {
        filteredData = meditationHistory;
    } else {
        filteredData = meditationHistory.filter(d => d.era === selectedEra);
    }

    updateTimeline(filteredData);
});
