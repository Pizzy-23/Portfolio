# Portfólio — Luiz Gustavo Cavina

Site estático simples (HTML/CSS/JS) com tema roxo/preto. Lista projetos a partir dos perfis do GitHub `Pizzy-23` e `Pizzy23` e possui seção de destaques configurável em `script.js`.

## Como rodar local

- Abra o arquivo `index.html` no navegador.
- Para evitar limites de CORS da API do GitHub em contextos locais, prefira usar uma extensão de servidor local (ex.: Live Server do VSCode) ou:

```bash
python -m http.server 5500
```

Depois acesse `http://localhost:5500/Portfolio/`.

## Deploy no GitHub Pages

1. Crie um repositório público, por exemplo `portfolio`.
2. Suba os arquivos da pasta `Portfolio/` na raiz do repositório.
3. Em Settings → Pages: selecione `Deploy from a branch` e aponte para `main` (root).
4. A URL será algo como `https://USERNAME.github.io/portfolio/`.

## Personalização rápida

- Cores: edite variáveis CSS em `styles.css` (`--brand`, `--brand-2`, etc.).
- Destaques: ajuste o array `featured` em `script.js` (formato `owner/repo`).
- Texto do topo: título/subtítulo no `index.html`.

## Observações

- A API pública do GitHub tem rate limit sem token. Em uso pesado, considere adicionar um `GITHUB_TOKEN` e fazer proxy.
- Para destacar projetos privados, inclua-os manualmente na seção "Destaques" com links externos.
