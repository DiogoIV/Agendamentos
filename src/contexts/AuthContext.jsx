/*Login
 ↓
recebe dados.token
 ↓
localStorage.setItem('token', dados.token) que estar no header
 ↓
setToken(true)
 ↓
React renderiza novamente
 ↓
mostra ícone

O localStorage.setItem() não faz o React renderizar novamente.*/