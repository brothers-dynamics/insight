/***********************
 * Dependencies
 ***********************/

/* Stores */
import SuperStore from '../SuperStore';

/***********************
 * Implementation
 ***********************/

/**
 * Store to manage state of a lockdown modal UI component.
 *
 * @extends {SuperStore}
 */
class LockDownModalStateManagerStore extends SuperStore<StateType> {
  /**
   * Create the store with initial state.
   */
  constructor() {
    super({ visible: false });
  }
  /**
   * Open the lockdown modal.
   */
  open(): void {
    this.value = {
      visible: true
    };
  }
  /**
   * Close the lockdown modal.
   */
  close(): void {
    this.value = {
      visible: false
    };
  }
}

/**
 * Type for store state.
 *
 * @property {boolean} visible - Whether palette is visible.
 */
type StateType = {
  visible: boolean;
};

/**
 * Exported singleton instance of store.
 */
export default new LockDownModalStateManagerStore();
