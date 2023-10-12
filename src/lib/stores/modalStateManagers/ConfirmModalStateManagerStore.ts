/***********************
 * Dependencies
 ***********************/

/* Stores */
import SuperStore from '../SuperStore';

/***********************
 * Implementation
 ***********************/

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

/**
 * Store to manage state of a confirmation modal component.
 *
 * @extends {SuperStore}
 */
class ConfirmModalStateManagerStore extends SuperStore<StateType> {
  /**
   * Create the store with initial state.
   */
  constructor() {
    super({
      visible: false,
      accent: '',
      message: '',
      label: '',
      sensitive: false,
      confirmed: false
    });
  }

  /**
   * Open the confirmation modal.
   *
   * @param {Optional<Pick<StateType, 'message' | 'accent' | 'label' | 'sensitive'>>, 'accent' | 'label' | 'sensitive'>} - Object containing properties
   * @returns {Promise<boolean>} A promise that resolves to true if confirmed, false if canceled.
   */
  async prompt(
    options: Optional<
      Pick<StateType, 'message' | 'accent' | 'label' | 'sensitive'>,
      'accent' | 'label' | 'sensitive'
    >
  ): Promise<boolean> {
    const { message, accent = 'bg-accent-60', label = 'تایید', sensitive = false } = options;

    this.value = {
      visible: true,
      accent,
      message,
      label,
      sensitive,
      confirmed: false
    };

    return new Promise<boolean>((resolve) => {
      const unsubscriber = this.subscribe((value) => {
        if (value.visible === false) {
          resolve(value.confirmed);
          unsubscriber();
        }
      });
    });
  }

  /**
   * Confirm and close the prompt.
   */
  confirm() {
    this.value.confirmed = true;
    this.close();
  }

  /**
   * Cancel and close the prompt.
   */
  cancel() {
    this.value.confirmed = false;
    this.close();
  }

  /**
   * Close the confirmation modal.
   */
  close() {
    this.value.visible = false;
    this.set(this.value);
  }
}

/**
 * Type for store state.
 *
 * @property {boolean} visible - Whether the confirmation modal is visible.
 * @property {string} accent - The accent color of the modal.
 * @property {string} message - The message in the prompt.
 * @property {string} label - The label for the confirmation button.
 * @property {boolean} sensitive - Indicates if the action is sensitive (e.g., deleting something).
 * @property {boolean} confirmed - Whether the prompt was confirmed.
 */
type StateType = {
  visible: boolean;
  accent: string;
  message: string;
  label: string;
  sensitive: boolean;
  confirmed: boolean;
};

/**
 * Exported singleton instance of store.
 */
export default new ConfirmModalStateManagerStore();
