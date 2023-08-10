/***********************
 * Dependencies
 ***********************/

/* Stores */
import SuperStore from '../SuperStore';

/***********************
 * Implementation
 ***********************/

/**
 * Store to manage state of a command palette UI component.
 *
 * @extends {SuperStore}
 */
class CommandPaletteStateManagerStore extends SuperStore<StateType> {
  /**
   * Create the store with initial state.
   */
  constructor() {
    super({ visible: false });
  }
  /**
   * Toggle visibility state of palette.
   */
  toggle(): void {
    this.value = {
      visible: !this.value.visible
    };
  }
  /**
   * Open the command palette.
   */
  open(): void {
    this.value = {
      visible: true
    };
  }
  /**
   * Close the command palette.
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
export default new CommandPaletteStateManagerStore();
