(function () {
    // Setup CSS

    // Create panel
    const panel = document.createElement('div');
    panel.id = 'error-panel';
    panel.innerHTML = '<h3>console.error log</h3>';
    document.body.appendChild(panel);

    // Keep original console.error
    const originalConsoleError = console.error;

    console.error = function (...args) {
        // Log to browser console as usual
        originalConsoleError.apply(console, args);

        // Add to panel
        const entry = document.createElement('div');
        entry.className = 'error-entry';

        entry.textContent = args.map(arg => {
            if (arg instanceof Error) {
                return arg.stack || arg.message;
            }
            if (typeof arg === 'object') {
                try {
                    return JSON.stringify(arg, null, 2);
                } catch {
                    return String(arg);
                }
            }
            return String(arg);
        }).join(' ');

        panel.appendChild(entry);
        panel.scrollTop = panel.scrollHeight;
    };

    // Optional: catch uncaught errors
    window.addEventListener('error', function (event) {
        console.error('Uncaught Error:', event.message, event.filename + ':' + event.lineno);
    });

})();