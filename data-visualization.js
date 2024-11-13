<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Visualization</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <nav>
        <button class="button" onclick="location.href='about.html'">About Me</button>
        <button class="button" onclick="location.href='contact.html'">Contact Info</button>
        <button class="button" onclick="location.href='data-visualization.html'">Data Visualization</button>
        <button class="button" onclick="location.href='interactive.html'">Interactive Meditation</button>
    </nav>

    <header>
        <div class="logo">
            <img src="671f019d2ab34a139398f8d2847ef111-free (1).png" alt="Meditation Now Logo" style="width: 300px; height: auto;" />
        </div>
    </header>
    
    <div class="container">
        <h1>Meditation History: Popularity Over Time</h1>
        <label for="eraFilter">Select Era:</label>
        <select id="eraFilter" onchange="updateTimeline()">
            <option value="ancient">Ancient</option>
            <option value="medieval">Medieval</option>
            <option value="modern">Modern</option>
        </select>
        <canvas id="meditationTimeline" width="400" height="200"></canvas>
    </div>
    
    <footer>
        <p>&copy; 2024 Meditation Now. All Rights Reserved.</p>
    </footer>

    <script src="data-visualization.js"></script>
</body>
</html>
