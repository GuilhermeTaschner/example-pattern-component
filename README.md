# 🧩 Pattern Components - Input Example

Este projeto tem como objetivo demonstrar **como estruturar e organizar componentes reutilizáveis utilizando o padrão de componentização (Pattern Components)** em aplicações React (com TypeScript).  
A aplicação gira em torno de um único exemplo prático: **um componente de input totalmente modularizado**.

## 📁 Estrutura do Projeto

```
src/
└── components/
    └── input/
        ├── examples/                # Exemplos variados de uso do Input
        │   ├── first-input.example.tsx
        │   ├── second-input.example.tsx
        │   └── ... até o oitavo
        ├── input-box.component.tsx
        ├── input-content.component.tsx
        ├── input-description.component.tsx
        ├── input-error.component.tsx
        ├── input-label.component.tsx
        ├── input-root.component.tsx
        ├── input.component.tsx      # Componente principal que agrega todos os subcomponentes
        └── index.tsx
```

### 🧱 Componentes do Input

Cada parte do input é um componente separado, seguindo o princípio de **Single Responsibility**:

- `input-root.component.tsx`: wrapper raiz, responsável pela estrutura geral.
- `input-label.component.tsx`: componente de label associado ao input.
- `input-content.component.tsx`: onde o input em si é renderizado.
- `input-error.component.tsx`: exibição de mensagens de erro.
- `input-description.component.tsx`: descrição adicional (acessibilidade ou dicas).
- `input-box.component.tsx`: encapsula o input com estilos e lógica extra, se necessário.
- `input.component.tsx`: composição final de todos os subcomponentes em um único componente de input.

### 🧪 Pasta `examples/`

Contém **demonstrações práticas e variações do componente `Input`**, como:

- Primeiro input básico (`first-input.example.tsx`)
- Inputs com descrição, erro, label customizada, etc.
- Até oito variações, cobrindo diferentes casos de uso.

Essa abordagem ajuda a ilustrar **como escalar um componente reutilizável** sem perder a modularidade.

## 💡 Objetivo

O propósito do projeto é:

- Demonstrar como aplicar **Pattern Components** na prática.
- Servir como referência para componentização escalável.
- Reforçar boas práticas de composição e reutilização de UI.

## 🚀 Como rodar

1. Clone o repositório:
   ```bash
   git clone https://github.com/GuilhermeTaschner/example-pattern-component.git
   ```

2. Instale as dependências:
   ```bash
   pnpm install
   ```

3. Rode o projeto:
   ```bash
   pnpm dev
   ```

---

## ✍️ Autor

Feito com foco educacional por [Guilherme Taschner](https://www.linkedin.com/in/guilherme-taschner-4b86a9248/).
