# Auth Notes

- it's about the client connecting to the API, it's NOT about the the user that is logged in.
- to the server, the same user on the same computer connected from insomnia is different from the same user connected from the browser
- the server has amnsesia, it will not remember the client across requests
- http is stateless, there is no common data shared between client and server
- we need a way to help the server "remember" the client across requests

## Cookies
