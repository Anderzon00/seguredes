gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 }
});


 
        // Function to scroll vertically
        function scrollPage(direction) {
            const scrollSpeed = 10; // Adjust scroll speed as needed
            window.scrollBy(0, direction * scrollSpeed);
        }

        // Add event listener for keydown
        window.addEventListener('keydown', function(event) {
            switch(event.key) {
                case 'ArrowUp':
                    scrollPage(-1); // Scroll up when the 'Up' arrow key is pressed
                    break;
                case 'ArrowDown':
                    scrollPage(1); // Scroll down when the 'Down' arrow key is pressed
                    break;
            }
        });
  

        