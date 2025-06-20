let workFromAnyWhere = document.getElementById("workFromAnyWhere");
workFromAnyWhere.style.cursor = "pointer";
workFromAnyWhere.addEventListener("click", function () {
  workFromAnyWhere.style.display = "none";
});



document.addEventListener("DOMContentLoaded", function () {
  const bars = document.querySelectorAll("rect");
  const tooltip = document.getElementById("tooltip");

  bars.forEach((bar) => {
    // Mouse enters the bar
    bar.addEventListener("mouseenter", function (e) {
      const value = this.getAttribute("data-value");
      const rect = this.getBoundingClientRect();

      // Position the tooltip above the bar
      tooltip.textContent = value;
      tooltip.style.display = "block";
      tooltip.style.left = `${
        rect.left + window.scrollX - tooltip.offsetWidth / 2 + rect.width / 2
      }px`;
      tooltip.style.top = `${
        rect.top + window.scrollY - tooltip.offsetHeight - 5
      }px`;
    });

    // Mouse leaves the bar
    bar.addEventListener("mouseleave", function () {
      tooltip.style.display = "none";
    });
  });

  // Update tooltip position on mouse move for smoother follow (optional)
  bars.forEach((bar) => {
    bar.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      tooltip.style.left = `${e.clientX - tooltip.offsetWidth / 2}px`;
      tooltip.style.top = `${
        rect.top + window.scrollY - tooltip.offsetHeight - 5
      }px`;
    });
  });
});

const featureBoxes = document.querySelectorAll(".feature-box");
const featureImage = document.getElementById("feature-image");


featureBoxes.forEach((box) => {
  box.addEventListener("click", function () {
    // Remove active class from all
    featureBoxes.forEach((item) => item.classList.remove("active"));
    // Add active to clicked
    this.classList.add("active");

    // Get new image path
    const newImgSrc = this.getAttribute("data-img");

    // Fade out current image
    featureImage.classList.add("fade-out");

    // Wait for fade-out to complete
    setTimeout(() => {
      featureImage.src = newImgSrc;
      featureImage.classList.remove("fade-out");
    }, 300);
  });
});

  document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-left');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.2,
    });

    animatedElements.forEach(el => observer.observe(el));
  });

function showMoreBlogs() {
  const additionalBlogs = document.getElementById('additional-blogs');
  const moreBlogsBtn = document.getElementById('moreBlogsBtn');

  if (!additionalBlogs.classList.contains('active')) {
    additionalBlogs.classList.add('active');
    moreBlogsBtn.innerHTML = 'Show Less <i class="fas fa-arrow-up ms-2"></i>';
  } else {
    additionalBlogs.classList.remove('active');
    moreBlogsBtn.innerHTML = 'More Blogs <i class="fas fa-arrow-right ms-2"></i>';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const allLinks = document.querySelectorAll("a");
  allLinks.forEach(link => {
    if (
      !link.hasAttribute("target") &&
      link.id !== "aloneAnchor"
    ) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});


