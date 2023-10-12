/* Svelte built-in libraries */
import { writable, get } from 'svelte/store';
import type { Writable, Subscriber, Invalidator, Unsubscriber } from 'svelte/store';

/***********************
 * Implementation
 ***********************/
export default class<T> {
  private store: Writable<T>;
  private _value: T;

  public subscribe: (this: void, run: Subscriber<T>, invalidate?: Invalidator<T>) => Unsubscriber;
  public update: (updater: (value: T) => T) => void;
  public set: (newValue: T) => void;

  constructor(initialValue: T) {
    this.store = writable(initialValue);
    this.subscribe = this.store.subscribe;
    this.update = this.store.update;
    this.set = this.store.set;
    this._value = initialValue;
  }

  get value(): T {
    return get(this.store);
  }

  set value(newValue: T) {
    this.store.set(newValue);
    this._value = newValue;
  }
}
