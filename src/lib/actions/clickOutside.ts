/** Dispatch event on click outside of node */
export function clickOutside(node: HTMLElement) {
  const handleClick = (event: MouseEvent) => {
    if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
      setTimeout(() => {
        node.dispatchEvent(new CustomEvent('clickOutside', { detail: node }));
      }, 0);
    }
  };

  document.addEventListener('mouseup', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('mouseup', handleClick, true);
    }
  };
}
