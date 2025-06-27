/**
 * popupManager - Simple Popup Message Controller
 * Author: IlReDelTrucco
 * License: Custom
 */

const popupManager = {
    /**
     * Displays a popup message on the screen.
     * @param {string} message - The message to display.
     * @param {number} [duration=3000] - Duration in milliseconds before the popup disappears.
     */
    show(message, duration = 3000) {
        if (typeof message !== 'string' || message.trim() === '') {
            console.error('[popupManager] Invalid message.');
            return;
        }

        const popup = document.createElement('div');
        popup.textContent = message;
        popup.style.position = 'fixed';
        popup.style.top = '20px';
        popup.style.left = '50%';
        popup.style.transform = 'translateX(-50%)';
        popup.style.backgroundColor = '#333';
        popup.style.color = '#fff';
        popup.style.padding = '10px 20px';
        popup.style.borderRadius = '5px';
        popup.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
        popup.style.zIndex = '1000';
        popup.style.fontFamily = 'Arial, sans-serif';
        popup.style.fontSize = '14px';

        document.body.appendChild(popup);

        setTimeout(() => {
            document.body.removeChild(popup);
        }, duration);
    }
};

// Example usage:
// popupManager.show('Operation completed successfully.', 2500);

module.exports = popupManager;
