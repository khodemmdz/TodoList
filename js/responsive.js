function responsiveMobile() {
    if (window.innerWidth <= 970) {
        $.body.innerHTML = `
        <div class="terminal-loader">
            <div class="terminal-header">
                <div class="terminal-title">Status</div>
                <div class="terminal-controls">
                <div class="control close"></div>
                <div class="control minimize"></div>
                <div class="control maximize"></div>
                </div>
            </div>
            <div class="content">
                <div class="text">Currently not available for mobile phones!</div>
            </div>
        </div>
        `
    }
}

responsiveMobile()

window.addEventListener('resize', responsiveMobile)