/***********************
 * Dependencies
 ***********************/

/* Stores */
import SuperStore from '../SuperStore';

/***********************
 * Implementation
 ***********************/

/**
 * Store to manage state of a text prompt modal component.
 *
 * @extends {SuperStore}
 */
class TextPromptModalStateManagerStore extends SuperStore<StateType> {
  /**
   * Create the store with initial state.
   */
  constructor() {
    super({
      visible: false,
      text: '',
      message: '',
      type: 'Short'
    });
  }

  /**
   * Open the text prompt modal.
   *
   * @param {Pick<StateType, 'type' | 'message'>} param - Object containing the 'type' and 'message' properties.
   * @returns {Promise<string | boolean>} A promise that resolves to the entered text or false if canceled.
   */
  async prompt({ type, message }: Pick<StateType, 'type' | 'message'>): Promise<string | boolean> {
    this.value = {
      visible: true,
      text: '',
      message,
      type
    };
    return new Promise<string | boolean>((resolve) => {
      const unsubscriber = this.subscribe((value) => {
        if (value.visible === false) {
          if (!value.canceled) {
            resolve(value.text);
          } else {
            resolve(false);
          }
          unsubscriber();
        }
      });
    });
  }

  /**
   * Submit and close the prompt.
   */
  submit() {
    this.value.canceled = false;
    this.close();
  }

  /**
   * Cancel and close the prompt.
   */
  cancel() {
    this.value.canceled = true;
    this.close();
  }

  /**
   * Close the text prompt modal.
   */
  close() {
    this.value.visible = false;
    this.set(this.value);
  }
}

/**
 * Type for store state.
 *
 * @property {boolean} visible - Whether the text prompt modal is visible.
 * @property {string} text - The text in the prompt.
 * @property {string} message - Additional message in the prompt.
 * @property {'Short' | 'Long'} type - The type of prompt (Short or Long).
 * @property {boolean} canceled - Whether the prompt was canceled.
 */
type StateType = {
  visible: boolean;
  text: string;
  message: string;
  type: 'Short' | 'Long';
  canceled?: boolean;
};

/**
 * Exported singleton instance of store.
 */
export default new TextPromptModalStateManagerStore();
