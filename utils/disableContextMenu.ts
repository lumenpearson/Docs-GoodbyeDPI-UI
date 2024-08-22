/**
 * Disables the context menu (right-click menu) on elements with the specified class name.
 *
 * This function adds an event listener to the document that prevents the default context menu
 * from appearing when the user right-clicks on elements that have the specified class name.
 *
 * @param {string} className - The class name of the elements for which the context menu should be disabled.
 * @example
 * // Disable context menu on elements with class 'no-context-menu'
 * disableContextMenu('no-context-menu');
 */
export const disableContextMenu = (className: string): void => {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target instanceof HTMLElement && target.classList.contains(className)) {
            event.preventDefault();
        }
    });
};
