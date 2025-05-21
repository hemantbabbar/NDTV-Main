document.addEventListener('DOMContentLoaded', function() {
    updateAllProgress();

    function updateAllProgress() {
        const progressBars = document.querySelectorAll('.RtngBr_wr');
        progressBars.forEach(bar => {
            updateProgress(bar);
        });
    }

    function updateProgress(bar) {
        const progressText = bar.querySelector('.RtngBr_tx').textContent.trim();
        const number = parseFloat(progressText);
        const percentage = (number / 10) * 100; // Convert number to percentage
        const totalLength = 248;
        const offset = totalLength - (totalLength * percentage / 100);
        bar.querySelector('.RtngBr_prgCl').style.strokeDashoffset = offset;
    }

    // Example: You can change the number by clicking somewhere or programmatically
    // For demonstration, clicking updates the number to a random value between 1 and 10
    document.querySelectorAll('.RtngBr_tx').forEach(tx => {
        tx.addEventListener('click', function() {
            const randomNumber = (Math.random() * 10).toFixed(1); // Generate a random number from 1 to 10 with one decimal
            tx.textContent = randomNumber;
            updateAllProgress(); // Update all progress circles based on the new numbers
        });
    });
});