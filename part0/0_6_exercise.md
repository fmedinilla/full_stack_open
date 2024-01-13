# Ejercicio 0.5
Crea un diagrama que represente la situación en la que el usuario crea una nueva nota utilizando la versión de una sola página de la aplicación.

## Solución
```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Go to https://studies.cs.helsinki.fi/exampleapp/spa

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    user->>browser: Write "Learning Web Basics" at input and click to Save button
    Note right of browser: el script en spa.js captura el evento de enviar formulario

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: Send to server from spa.js: {content: "Learning Web Basics", date: "2024-01-13T21:52:17.759Z"}
    activate server
    server -->>browser: Status code: 201 (created)
    deactivate server
    Note right of browser: el script en spa.js actualiza los datos del HTML
```