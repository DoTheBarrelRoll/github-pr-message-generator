// content.js
(function () {
    // Avoid injecting multiple times
    if (document.getElementById('create-pr-message-btn')) return;

    // Helper to extract PR info
    function getPRInfo() {
        // PR number from URL or page
        const urlMatch = window.location.pathname.match(/\/pull\/(\d+)/);
        const prNumber = urlMatch ? "#" + urlMatch[1] : '';
        // PR title
        const titleElem = document.querySelector('h1[data-component="PH_Title"] .markdown-title');
        const prTitle = titleElem ? titleElem.textContent.trim() : '';
        // PR URL
        const prUrl = window.location.href;
        return { prNumber, prTitle, prUrl };
    }

    // Create button
    const btn = document.createElement('button');
    btn.id = 'create-pr-message-btn';
    btn.textContent = 'Copy PR message';
    btn.style.fontSize = '12px';
    btn.style.gap = 'var(--base-size-8, .5rem)';
    btn.style.height = 'var(--control-medium-size, 2rem)';
    btn.style.padding = '0 var(--control-medium-paddingInline-normal, .75rem)';
    btn.style.appearance = 'none';
    btn.style.border = 'var(--borderWidth-thin, .0625rem) solid';
    btn.style.borderColor = 'var(--button-default-borderColor-rest, var(--color-btn-border))';
    btn.style.borderRadius = 'var(--borderRadius-medium, .375rem)';
    btn.style.color = 'var(--button-default-fgColor-rest, var(--color-btn-text))';
    btn.style.cursor = 'pointer';
    btn.style.fontFamily = 'inherit';
    btn.style.fontWeight = 'var(--base-text-weight-medium, 500)';
    btn.style.alignItems = 'center';
    btn.style.minWidth = 'max-content';
    btn.style.textAlign = 'center';
    btn.style.userSelect = 'none';
    btn.style.backgroundColor = 'var(--button-default-bgColor-rest,var(--color-btn-bg))';
    btn.style.justifyContent = 'space-between';
    btn.style.textDecoration = 'none';
    btn.style.lineHeight = '19.5px';
    btn.style.transition = 'color 80ms cubic-bezier(.65, 0, .35, 1), fill 80ms cubic-bezier(.65, 0, .35, 1), background-color 80ms cubic-bezier(.65, 0, .35, 1), border-color 80ms cubic-bezier(.65, 0, .35, 1)';
    btn.style.display = 'flex';

    btn.onclick = function () {
        const { prNumber, prTitle, prUrl } = getPRInfo();
        const msg = `:pull_request: ${prNumber} | ${prTitle}\n${prUrl}`;
        // Copy to clipboard
        navigator.clipboard.writeText(msg).then(() => {
            btn.textContent = 'Copied!';
            setTimeout(() => { btn.textContent = 'Copy PR message'; }, 1200);
        });
    };

    // Insert button into PR header actions
    function insertButton() {
        const headerActions = document.querySelector('[data-component="PH_Actions"]');
        if (headerActions && !document.getElementById('create-pr-message-btn')) {
            headerActions.prepend(btn);
        }
    }

    // Try to insert immediately, and on DOM changes (for SPA navigation)
    insertButton();
    const observer = new MutationObserver(insertButton);
    observer.observe(document.body, { childList: true, subtree: true });
})();
