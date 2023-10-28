/**
 * `draggable` is a custom action for Svelte components that makes an element movable by drag and drop.
 *
 * @param {HTMLElement} node - The element to which this action is attached.
 *
 * @example
 * <div use:draggable style="position: fixed; top: 50px; left: 50px; background-color: lightblue; width: 100px; height: 100px;">
 *   Drag me!
 * </div>
 *
 * <script>
 *   import { draggable } from './actions/draggable.js';
 * </script>
 */
export function draggable(node: HTMLElement) {
  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;

  function handleMouseDown(event: MouseEvent) {
    isDragging = true;
    offsetX = event.clientX - node.offsetLeft;
    offsetY = event.clientY - node.offsetTop;

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }

  function handleMouseMove(event: MouseEvent) {
    if (isDragging) {
      const newX = event.clientX - offsetX;
      const newY = event.clientY - offsetY;

      node.style.left = `${newX}px`;
      node.style.top = `${newY}px`;
    }
  }

  function handleMouseUp() {
    isDragging = false;

    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  }

  function handleTouchStart(event: TouchEvent) {
    event.stopPropagation();
    isDragging = true;
    const touch = event.touches[0];
    offsetX = touch.clientX - node.offsetLeft;
    offsetY = touch.clientY - node.offsetTop;

    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  }

  function handleTouchMove(event: TouchEvent) {
    event.stopPropagation();
    if (isDragging) {
      const touch = event.touches[0];
      const newX = touch.clientX - offsetX;
      const newY = touch.clientY - offsetY;

      node.style.left = `${newX}px`;
      node.style.top = `${newY}px`;
    }
  }

  function handleTouchEnd() {
    isDragging = false;

    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  }

  node.addEventListener('mousedown', handleMouseDown);
  node.addEventListener('touchstart', handleTouchStart);

  return {
    // Clean up event listeners when component is destroyed
    destroy() {
      node.removeEventListener('mousedown', handleMouseDown);
      node.removeEventListener('touchstart', handleTouchStart);
    }
  };
}
