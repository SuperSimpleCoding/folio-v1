// Create new file for animation reset utility
export const resetPageAnimations = () => {
  const selectors = [
    '.animate-body', 
    '[data-animate="true"]',
    '.animate-reset'
    // Removed heading-related classes
  ];

  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      element.classList.remove(selector.replace('.', ''));
      void (element as HTMLElement).offsetWidth; // Force reflow
      element.classList.add(selector.replace('.', ''));
    });
  });
}; 