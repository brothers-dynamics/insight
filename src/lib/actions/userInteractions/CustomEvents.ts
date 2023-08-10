/**
 * `outClick` is a custom Svelte action that triggers a callback when a mouse up event
 * occurs outside of the associated component. This is useful for scenarios such as closing
 * a dropdown menu or modal when the user clicks anywhere else on the page.
 *
 * @param {HTMLElement} node - The DOM node to which this action is attached.
 * @param {() => void} callback - The callback function to be executed when a mouse up event occurs outside the node.
 *
 * @returns {Object} An object with a `destroy` method that removes the event listener when the action is unbound.
 *
 * @example
 * <div use:outClick="{handleClickOutside}">
 *   <!-- your component code here -->
 * </div>
 *
 * <script>
 *   import { outClick } from './actions/outClick.js';
 *
 *   function handleClickOutside() {
 *     // your logic here
 *   }
 * </script>
 */
export function outClick(node: HTMLElement, callback: () => void) {
  const handleClick = (event: MouseEvent) => {
    if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
      setTimeout(() => {
        callback();
      }, 0);
    }
  };

  document.addEventListener('mouseup', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('mouseup', handleClick, true);
    }
  };
}

/**
 * `inView` triggers a callback when the element becomes visible in the viewport
 *
 * @param {HTMLElement} node - The node to monitor
 * @param {() => void} callback - Callback when node is in view
 *
 * @returns {{destroy: () => void}}
 */
export function inView(node: HTMLElement, callback: () => void) {
  const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && callback(), {
    threshold: 0
  });

  observer.observe(node);
  return {
    destroy(): void {
      observer.unobserve(node);
    }
  };
}

/**
 * `longPress` triggers a callback after a sustained touch/click of 500ms
 *
 * @param {HTMLElement} node - The node to attach touch/click handler
 * @param {() => void} callback - Callback after sustained touch/click
 *
 * @returns {{destroy: () => void}}
 */
export function longPress(node: HTMLElement, callback: () => void) {
  let timer: ReturnType<typeof setTimeout>;

  function startPress(e: MouseEvent | TouchEvent) {
    if (e.type === 'click' && (e instanceof MouseEvent &&  e.button !== 0)) return;

    timer = setTimeout(callback, 500);
  }

  function cancelPress() {
    clearTimeout(timer);
  }

  node.addEventListener('mousedown', startPress);
  node.addEventListener('touchstart', startPress);

  node.addEventListener('mouseup', cancelPress);
  node.addEventListener('mouseleave', cancelPress);
  node.addEventListener('touchend', cancelPress);

  return {
    destroy(): void {
      node.removeEventListener('mousedown', startPress);
      node.removeEventListener('touchstart', startPress);

      node.removeEventListener('mouseup', cancelPress);
      node.removeEventListener('mouseleave', cancelPress);
      node.removeEventListener('touchend', cancelPress);
    }
  };
}
