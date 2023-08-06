import type { Writable } from 'svelte/store';
import { onMount } from 'svelte';

export enum DropDirectionType {
  UP = 'up',
  DOWN = 'down'
}

export function dropdownDirection(
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
