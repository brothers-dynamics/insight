/***********************
 * Dependencies
 ***********************/

/* Svelte built-in libraries */
import type { ComponentType } from 'svelte';

/* Stores */
import SuperStore from '../SuperStore';

/***********************
 * Implementation
 ***********************/

/**
 * Store to manage state of a blank modal component.
 *
 * @extends {SuperStore}
 */
class BlankModalStateManagerStore extends SuperStore<StateType> {
  /**
   * Create the store with initial state.
   */
  constructor() {
    super({
      visible: false,
      width: 400
    });
  }

  /**
   * Open the blank modal.
   *
   * @param {ComponentType} body - The body component to display in the modal.
   */
  open(body: ComponentType) {
    this.value.visible = true;
    this.value.body = body;
    this.set(this.value);
  }

  /**
   * Close the blank modal.
   */
  close() {
    this.value.visible = false;
    this.set(this.value);
  }
}

/**
 * Type for store state.
 *
 * @property {boolean} visible - Whether the blank modal is visible.
 * @property {ComponentType | undefined} body - The body component displayed in the modal.
 * @property {number} width - The width of the modal.
 */
type StateType = {
  visible: boolean;
  body?: ComponentType;
  width: number;
};

/**
 * Exported singleton instance of store.
 */
export default new BlankModalStateManagerStore();
