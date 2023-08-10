/***********************
 * Dependencies
 ***********************/

/* Svelte built-in libraries */
import type { Writable } from 'svelte/store';
import { onMount } from 'svelte';

/***********************
 * Implementation
 ***********************/

/**
 * dropdownDirection action
 *
 * Sets the direction of a dropdown component based on available space
 *
 * @param {HTMLElement} node - The dropdown component DOM node
 * @param {Object} options
 * @param {number} [options.threshold=300] - Pixel threshold to toggle direction
 * @param {Writable<DropDirectionType>} options.direction - Writable store to set direction
 *
 * @returns {{destroy: () => void}} Destroy function to detach listeners
 *
 * @example
 *
 * <script>
 *   import { dropdownDirection } from './actions.js'
 *   import { writable } from 'svelte/store'
 *
 *   const direction = writable('down')
 * </script>
 *
 * <div use:dropdownDirection={{threshold: 400, direction}}>
 *   <!-- dropdown content -->
 * </div>
 */
export function dropdownDirector(
  node: HTMLElement,
  { threshold = 300, direction }: { threshold?: number; direction: Writable<DropDirectionType> }
) {
  // Function to check the dropdown direction
  function checkDirection() {
    const rect = node.getBoundingClientRect();
    if (window.innerHeight - rect.bottom < threshold) {
      direction.set(DropDirectionType.UP);
    } else {
      direction.set(DropDirectionType.DOWN);
    }
  }

  // Check the direction on mount and whenever the window is resized
  onMount(checkDirection);
  const resizeObserver = new ResizeObserver(checkDirection);
  resizeObserver.observe(node);

  // Clean up
  return {
    destroy() {
      resizeObserver.unobserve(node);
    }
  };
}

/**
 * Enumeration of drop direction types.
 *
 * @enum {string}
 */
export enum DropDirectionType {
  /**
   * Drop element above target.
   */
  UP = 'up',

  /**
   * Drop element below target.
   */
  DOWN = 'down'
}
