document.addEventListener("DOMContentLoaded", function () {
    const footnoteContainer = document.querySelector(".footnote-content");
    
    // Load initial content (t0)
    fetch("text.html")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");
            const initialContent = doc.querySelector("#t0");
            if (initialContent) {
                footnoteContainer.innerHTML = initialContent.outerHTML;
            }
        });

    // Function to update footnote content on hover
    function updateFootnote(targetId) {
        fetch("text.html")
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, "text/html");
                const newContent = doc.querySelector(targetId);
                if (newContent) {
                    footnoteContainer.innerHTML = newContent.outerHTML;
                }
            });
    }

    // Assign hover events to corresponding spans
    const hoverMappings = {
        "#f0": "#t0",
        "#f1": "#t1",
        "#f2": "#t2",
        "#f3": "#t3",
        "#f4": "#t4",
        "#f5": "#t5",
        "#f6": "#t5",
        "#f7": "#t7"

    };

    Object.entries(hoverMappings).forEach(([spanId, targetId]) => {
        const spanElement = document.querySelector(spanId);
        if (spanElement) {
            spanElement.addEventListener("mouseenter", function () {
                updateFootnote(targetId);
            });
        }
    });

});
