/***********************
 * Dependencies
 ***********************/

/* Stores */
import SuperStore from '../SuperStore';

/***********************
 * Implementation
 ***********************/

/**
 * Store to manage state of a share UI component.
 *
 * @extends {SuperStore}
 */
class ShareStateManagerStore extends SuperStore<StateType> {
  /**
   * Create the store with initial state.
   */
  constructor() {
    super({
      visible: false,
      sharingDocumentId: undefined
    });
  }
  /**
   * Open the share UI for a document.
   *
   * @param {string} docId - ID of document being shared.
   */
  share(docId: string) {
    this.value = {
      visible: true,
      sharingDocumentId: docId
    };
  }
  /**
   * Close the share UI.
   */
  close() {
    this.value = {
      visible: false,
      sharingDocumentId: undefined
    };
  }
}

/**
 * Type for store state.
 *
 * @property {boolean} visible - Whether share UI is visible.
 * @property {string} sharingDocumentId - ID of document being shared.
 */
type StateType = {
  visible: boolean;
  sharingDocumentId: string | undefined;
};

/**
 * Exported singleton instance of store.
 */
export default new ShareStateManagerStore();
