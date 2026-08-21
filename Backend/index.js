document.addEventListener('DOMContentLoaded', () => {
        const serviceKeys = {
            "Full Engine Service": "full-engine",
            "Wheel Alignment": "wheel-alignment",
            "AC Repair": "ac-repair",
            "Premium Car Cleaning": "car-cleaning"
        };

        document.querySelectorAll('.service-card').forEach(card => {
            const titleElement = card.querySelector('h3');
            const button = card.querySelector('.service-button');
            if (titleElement && button) {
                const titleText = titleElement.textContent.trim();
                const key = serviceKeys[titleText] || "full-engine";
                button.href = `serviceDetails.html?service=${key}`;
            }
        });
    });