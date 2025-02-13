/* function createCircle(event) {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  const x = event.clientX;
  const y = event.clientY;

  // Set the size and position of the circle
  circle.style.width = '25px';  // Set a size for the circle
  circle.style.height = '25px'; // Set a size for the circle
  circle.style.position = 'absolute'; // Ensure the circle is positioned correctly
  circle.style.left = `${x - 12.5}px`; // Center the circle on the click
  circle.style.top = `${y - 12.5}px`;  // Center the circle on the click

  // Append the circle to the container
  document.querySelector(".circleCont").appendChild(circle);

  // Remove the circle after the animation is done
  circle.addEventListener('animationend', () => {
      circle.remove();
  });
} */

  function createCircle(event) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
  
    const x = event.clientX;
    const y = event.clientY;
  
    // Set the size for the circle
    const circleSize = 25;
    const circleRadius = circleSize / 2;
    
    // Set the size and position of the circle
    circle.style.width = `${circleSize}px`;
    circle.style.height = `${circleSize}px`;
    circle.style.position = 'absolute';
  
    // Ensure the circle stays within the viewport horizontally
    let adjustedX = Math.max(circleRadius, Math.min(x - circleRadius, window.innerWidth - circleSize));
    // Ensure the circle stays within the viewport vertically
    let adjustedY = Math.max(circleRadius, Math.min(y - circleRadius, window.innerHeight - circleSize));
  
    circle.style.left = `${adjustedX}px`;
    circle.style.top = `${adjustedY}px`;
  
    // Append the circle to the container
    document.querySelector(".circleCont").appendChild(circle);
  
    // Remove the circle after the animation is done
    circle.addEventListener('animationend', () => {
        circle.remove();
    });
  }
