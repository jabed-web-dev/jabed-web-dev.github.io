(function() {
window.addEventListener('load', () => {
    const html = document.documentElement
    const style = document.createElement('style')
    const css = `.dark{color-scheme:dark}.absolute{position:absolute}.top-px{top:1px}.right-px{right:1px}.z-\\[101\\]{z-index:101}.box-border{box-sizing:border-box}.h-6{height:1.5rem}.w-6{width:1.5rem}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.rounded-lg{border-radius:.5rem}.bg-slate-700{--tw-bg-opacity:1;background-color:rgb(51 65 85/var(--tw-bg-opacity))}.bg-slate-300{--tw-bg-opacity:1;background-color:rgb(203 213 225/var(--tw-bg-opacity))}.fill-slate-400{fill:#94a3b8}.fill-sky-300\\/20{fill:#7dd3fc33}.stroke-slate-500{stroke:#64748b}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}.outline-none{outline:2px solid #0000;outline-offset:2px}.active\\:border:active{border-width:1px}.active\\:border-solid:active{border-style:solid}.active\\:border-slate-500:active{--tw-border-opacity:1;border-color:rgb(100 116 139/var(--tw-border-opacity))}.active\\:border-slate-400:active{--tw-border-opacity:1;border-color:rgb(148 163 184/var(--tw-border-opacity))}.group:hover .group-hover\\:fill-slate-300{fill:#cbd5e1}.group:hover .group-hover\\:stroke-slate-700{stroke:#334155}`
    style.appendChild(document.createTextNode(css))
    document.head.appendChild(style)

    const dark = `<svg viewBox="0 0 24 24" fill="none" class="w-6 h-6 box-border bg-slate-700 group rounded-lg active:border-solid active:border active:border-slate-500"><path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" class="fill-slate-400 group-hover:fill-slate-300"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" class="fill-slate-400 group-hover:fill-slate-300"></path></svg>`
        , light = `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 box-border bg-slate-300 group rounded-lg active:border-solid active:border active:border-slate-400"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="fill-sky-300/20 stroke-slate-500 group-hover:stroke-slate-700"></path><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" class="stroke-slate-500 group-hover:stroke-slate-700"></path></svg>`
        , button = document.createElement('span');
    button.setAttribute('class', 'absolute top-px right-px text-slate-500 outline-none select-none cursor-pointer z-[101]');

    if (localStorage['color-scheme'] === 'dark' || (!('color-scheme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        button.innerHTML = dark;
        html.classList.add('dark');
    } else {
        button.innerHTML = light;
        html.classList.remove('dark');
    }

    button.addEventListener('click', (event) => {
        event.preventDefault();
        if (localStorage['color-scheme'] === 'dark' || (!('color-scheme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            button.innerHTML = light;
            html.classList.remove('dark');
            localStorage.setItem('color-scheme', 'light');
        } else {
            button.innerHTML = dark;
            html.classList.add('dark');
            localStorage.setItem('color-scheme', 'dark');
        }
    });

    // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem('color-scheme')
    html.appendChild(button)
});
})();
