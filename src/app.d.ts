// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface HTMLAttributes<T> extends Svelte.HTMLAttributes<T> {
      'on:clickOutside'?: CustomEvent<any>;
    }
  }
}

export {};
