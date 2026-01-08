# 🚀 Dynamic Data Portal

![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-Latest-C6538C?style=flat-square&logo=sass)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

Uma aplicação web moderna para **importar, editar e exportar dados** de forma dinâmica e intuitiva. Suporta múltiplos formatos de arquivo (JSON, CSV e Texto) com uma interface responsiva e user-friendly.

## ✨ Funcionalidades

- ✅ **Upload de Arquivos** - Suporte para JSON, CSV e Texto plano
- ✅ **Parser Inteligente** - Detecção automática de tipo de arquivo
- ✅ **Tabela Dinâmica** - Renderização automática baseada no conteúdo
- ✅ **Edição Inline** - Edite dados diretamente na tabela
- ✅ **Gerenciamento de Linhas** - Adicione e delete registros facilmente
- ✅ **Exportação Flexível** - Exporte em CSV ou JSON
- ✅ **Interface Responsiva** - Funciona perfeitamente em desktop e mobile
- ✅ **Componentes Standalone** - Arquitetura moderna do Angular

## 🛠️ Stack Tecnológico

- **Framework**: Angular 21 (Standalone Components)
- **Linguagem**: TypeScript 5.x
- **Estilos**: SCSS
- **Build Tool**: Angular CLI
- **Testes**: Vitest
- **Standalone**: ✅ Sem necessidade de módulos

## 📦 Instalação

### Pré-requisitos
- Node.js (v18+)
- npm ou yarn

### Clone e Setup

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/dynamic-data-portal.git
cd dynamic-data-portal

# Instale as dependências
npm install
```

## 🚀 Como Usar

### Iniciar o servidor de desenvolvimento

```bash
npm start
# ou
ng serve
```

Acesse `http://localhost:4200/` no seu navegador. A aplicação recarrega automaticamente quando você modifica os arquivos.

### Build para produção

```bash
ng build --configuration production
```

Os arquivos compilados serão salvos em `dist/`.

### Executar testes

```bash
npm test
# ou
ng test
```

## 📋 Estrutura do Projeto

```
src/
├── app/
│   ├── core/
│   │   ├── parsers/
│   │   │   └── file-parser.service.ts      # Serviço de parsing de arquivos
│   │   └── services/
│   │       └── export.service.ts           # Serviço de exportação
│   ├── features/
│   │   └── upload/
│   │       ├── components/
│   │       │   └── file-upload/            # Componente de upload
│   │       └── pages/
│   │           └── upload-page/            # Página principal
│   └── shared/
│       └── components/
│           └── dynamic-table/              # Tabela dinâmica
├── index.html
├── main.ts
└── styles.scss
```

## 💡 Como Funciona

### 1️⃣ **Upload de Arquivo**
- Selecione um arquivo (JSON, CSV ou Texto)
- O sistema detecta automaticamente o tipo

### 2️⃣ **Parsing & Visualização**
- Dados são parseados e renderizados em uma tabela
- Colunas geradas dinamicamente baseado no conteúdo

### 3️⃣ **Edição & Gerenciamento**
- **Editar**: Clique em "Editar" para modificar linhas
- **Deletar**: Remova registros com um clique
- **Adicionar**: Crie novas linhas vazias

### 4️⃣ **Exportação**
- Exporte para **CSV** (compatível com Excel)
- Exporte para **JSON** (estrutura preserve

)

## 🎨 Exemplos de Uso

### Importar JSON
```json
[
  { "nome": "João", "idade": 25 },
  { "nome": "Maria", "idade": 30 }
]
```

### Importar CSV
```csv
nome,idade
João,25
Maria,30
```

Ambos serão renderizados na mesma tabela interativa!

## 🔧 Serviços Principais

### FileParserService
Responsável por detectar e fazer parse de diferentes formatos:

```typescript
const result = this.parser.parse(content);
// { type: 'json', data: [...] }
```

### ExportService
Exporta dados em diferentes formatos:

```typescript
this.exportService.exportToCSV(data, 'filename.csv');
this.exportService.exportToJSON(data, 'filename.json');
```

## 📱 Interface

A aplicação possui:
- ✨ Design moderno com Bootstrap-inspired colors
- 🎯 Buttons com feedback visual (hover, active states)
- 📊 Tabelas responsivas com scroll automático
- ♿ Acessibilidade em primeiro lugar

## 🐛 Troubleshooting

### Erro: "Cannot find module"
Verifique os imports e caminhos relativos dos componentes.

### Arquivo não é reconhecido
Certifique-se que o formato é JSON, CSV válido ou texto plano UTF-8.

## 🚀 Melhorias Futuras

- [ ] Validação avançada de dados
- [ ] Suporte para mais formatos (Excel, XML)
- [ ] Histórico de edições (Undo/Redo)
- [ ] Filtros e busca avançada
- [ ] Temas personalizáveis (Dark Mode)
- [ ] Integração com backend (API)

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ como projeto de estudo em Angular.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para:
1. Fazer um Fork do projeto
2. Criar uma Branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📧 Contato

Se tiver dúvidas ou sugestões, abra uma [Issue](https://github.com/seu-usuario/dynamic-data-portal/issues).

---

**⭐ Se este projeto foi útil para você, considere deixar uma estrela!**


```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
