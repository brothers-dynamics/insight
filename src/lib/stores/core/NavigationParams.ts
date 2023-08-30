/***********************
 * Dependencies
 ***********************/

/* Stores */
import SuperStore from '../SuperStore';

/***********************
 * Implementation
 ***********************/

/**
 * Store to manage state of navigation parameters.
 *
 * @extends {SuperStore}
 */
class NavigationParams extends SuperStore<StateType> {
  /**
   * Create the store with initial state.
   */
  constructor() {
    super({});
  }

  /**
   * Clear the store state.
   */
  clear() {
    this.value = {};
  }
}

/**
 * Type for store state.
 *
 * @property {any} value - The value of the store state.
 */
type StateType = any;

/**
 * Exported singleton instance of store.
 */
export default new NavigationParams();
