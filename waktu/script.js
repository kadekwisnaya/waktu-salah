document.addEventListener("DOMContentLoaded", function() {
    var music = document.getElementById('backgroundMusic');
    var toggleButton = document.getElementById('toggleMusic');

    // Function to play music
    function playMusic() {
        music.play();
        localStorage.setItem('isPlaying', 'true');
        toggleButton.textContent = 'Play lagunya disini';
    }

    // Function to pause music
    function pauseMusic() {
        music.pause();
        localStorage.setItem('isPlaying', 'false');
        toggleButton.textContent = 'Play lagi';
    }

    // Check if music should be playing
    if (localStorage.getItem('isPlaying') === 'true') {
        playMusic();
    } else {
        pauseMusic(); // Ensure music starts paused if not playing
    }

    // Toggle music play/pause
    toggleButton.addEventListener('click', function() {
        if (music.paused) {
            playMusic();
        } else {
            pauseMusic();
        }
    });

    // Automatically play music on page load if previously playing
    window.onload = function() {
        if (localStorage.getItem('isPlaying') === 'true' && music.paused) {
            playMusic();
        }
    };

    // Ensure music continues to play between page loads
    window.addEventListener('load', function() {
        if (localStorage.getItem('isPlaying') === 'true') {
            music.play();
        }
    });

    // Automatically play music on page load if not explicitly paused
    window.onload = function() {
        if (localStorage.getItem('isPlaying') !== 'false') {
            music.play();
        }
    };
});
