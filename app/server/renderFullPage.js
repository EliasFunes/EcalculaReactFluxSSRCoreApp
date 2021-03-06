export default function renderFullPage(html, preloadedState){
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Your SSR React Router Node App initialised with data!</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u033c')}
            </script>
            <script src="bundle.js"></script>
        </body>
        </html>
    `
}

