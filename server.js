const express = require("express");

const app = express();
const PORT = process.env.PORT || 1000;

// API route
app.get("/info", (req, res) => {
    res.json({
        email: "blossomadikankwu@gmail.com.com",
        current_time: new Date().toISOString(),
        github_url: "https://github.com/blossomifeoma/HNGTask0"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
