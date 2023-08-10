/**
 * `autoFocus` is a custom action for Svelte components that automatically sets focus on an element when it is mounted.
 *
 * @param {HTMLElement} node - The element to which this action is attached.
 *
 * @example
 * <input use:autoFocus type="text" placeholder="Focus will be set on this input when it mounts." />
 *
 * <script>
 *   import { autoFocus } from './actions/autoFocus.js';
 * </script>
 */
export function autoFocus(node: HTMLElement) {
  // The setTimeout ensures that the focus is set after Svelte completes the initial update cycle,
  // after the element has been inserted into the DOM.
  setTimeout(() => {
    node.focus();
  }, 0);

  return {
    // No cleanup necessary
  };
}
