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
        "#f7": "#t7",
        "#f8": "#t8",
        "#f9": "#t9",
        "#f10": "#t10",
        "#f11": "#t11",
        "#f12": "#t12",
        "#f13": "#t13",
        "#f14": "#t14",
        "#f15": "#t15",
        "#f16": "#t16",
        "#f17": "#t17",
        "#f18": "#t18",
        "#f19": "#t19",
        "#f20": "#t20",
        "#f21": "#t21",
        "#f22": "#t22",
        "#f23": "#t23",
        "#f24": "#t24",
        "#f25": "#t25",
        "#f26": "#t26",
        "#f27": "#t27",
        "#f28": "#t28",
        "#f29": "#t29",
        "#f30": "#t30",
        "#f31": "#t31",
        "#f32": "#t32",
        "#f33": "#t33",
        "#f34": "#t34",
        "#f35": "#t35",
        "#f36": "#t36",
        "#f37": "#t37",
        "#f38": "#t38",
        "#f39": "#t39",
        "#f40": "#t40",
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
