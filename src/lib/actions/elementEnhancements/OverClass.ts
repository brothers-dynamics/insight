/***********************
 * Dependencies
 ***********************/

/* 3rd party libraries */
import { twMerge } from 'tailwind-merge';

/***********************
 * Implementation
 ***********************/

/**
 * Binds a dynamic class to an element.
 * Useful for declaratively overwriting existing classes.
 *
 * @param {HTMLElement} node - The target node
 * @param {string} classnames - The class to bind
 *
 * @returns {{update: (newClass: string) => void}}
 */
export function overClass(node: HTMLElement, classnames: string) {
  let currentClass = node.className;

  function updateClass(newClasses: string) {
    const mergedClasses = twMerge(currentClass, newClasses);
    node.className = mergedClasses;
    currentClass = mergedClasses;
  }

  updateClass(classnames);

  return {
    update(newClasses: string): void {
      updateClass(newClasses);
    }
  };
}
