/***********************
 * Dependencies
 ***********************/

/* Stores */
import SuperStore from '../SuperStore';

/***********************
 * Implementation
 ***********************/

/**
 * Represents a notification.
 */
class Notification implements NotificationType {
  private timerId: ReturnType<typeof setInterval> | null = null;
  private currentTime = 0;

  /**
   * Creates a new notification.
   *
   * @param {NotificationType['type']} type - The type of notification ('Error' or 'Success').
   * @param {string} message - The message content of the notification.
   * @param {number} TTL - The time-to-live for the notification (defaults to 5000 milliseconds).
   */
  constructor(
    public type: NotificationType['type'],
    public message: string,
    public TTL: number = 5000
  ) {
    Singleton.value.list = [...Singleton.value.list, this];
    this.startTimer();
  }

  private startTimer() {
    this.timerId = setInterval(() => {
      this.currentTime += 50;
      Singleton.update((r) => r);
      if (this.currentTime >= this.TTL + 50) {
        this.close();
      }
    }, 50);
  }

  /**
   * Returns the remaining percentage of time before the notification closes.
   *
   * @returns {number} The remaining percentage of time.
   */
  getRemainingPercentage(): number {
    return (1 - this.currentTime / this.TTL) * 100;
  }

  /**
   * Closes the notification by removing it from the list and stopping the timer.
   */
  close() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
    Singleton.value.list = Singleton.value.list.filter((notification) => notification !== this);
  }
}

/**
 * Store to manage the state of a command palette UI component.
 *
 * @extends {SuperStore}
 */
class NotificationsStateManagerStore extends SuperStore<StateType> {
  /**
   * Create the store with initial state.
   */
  constructor() {
    super({ list: [] });
  }

  /**
   * Adds a new notification to the list.
   *
   * @param {Omit<NotificationType, 'close'>} notification - The notification to add.
   */
  notify(notification: Omit<NotificationType, 'close'>) {
    this.value.list = [
      ...this.value.list,
      new Notification(notification.type, notification.message, notification.TTL)
    ];
  }
}

/**
 * Singleton instance of the NotificationsStateManagerStore.
 */
const Singleton = new NotificationsStateManagerStore();

/**
 * Represents a notification type.
 */
type NotificationType = {
  type: 'Error' | 'Success';
  message: string;
  TTL?: number;
  close: () => void;
};

/**
 * Type for store state.
 */
type StateType = {
  list: Array<Notification>;
};

/**
 * Exported singleton instance of the store.
 */
export default Singleton;
