document.addEventListener("DOMContentLoaded", function () {
const tooltipTriggers = document.querySelectorAll('.has-tooltip');

tooltipTriggers.forEach(trigger => {
  trigger.addEventListener('click', function (event) {
    event.preventDefault(); 

    document.querySelectorAll('.tooltip_active').forEach(tooltip => {
      tooltip.classList.remove('tooltip_active');
    });

    const tooltip = this.nextElementSibling;

    if (tooltip) {
      tooltip.classList.add('tooltip_active');

      const triggerRect = this.getBoundingClientRect();
      tooltip.style.left = triggerRect.left + 'px';
      tooltip.style.top = triggerRect.bottom + 'px';
    }
  });
});

document.addEventListener('click', function (event) {
  if (!event.target.classList.contains('has-tooltip')) {
    document.querySelectorAll('.tooltip_active').forEach(tooltip => {
      tooltip.classList.remove('tooltip_active');
    });
  }
});

  });
  