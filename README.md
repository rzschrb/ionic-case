# Ionic Tech Case
Um aplicativo desenvolvido com Ionic/Angular que demonstra boas práticas de desenvolvimento e integração com Capacitor para um caso técnico.

## 🚀 Funcionalidades Implementadas
- Sistema simples de autenticação com validação de formulários
- Dashboard com listagem utilizando ion-list
- Splash screen personalizada
- Suporte para iOS e Android
- Interface responsiva e moderna usando componentes Ionic
- Integração com Capacitor para recursos nativos

## 📋 Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn
- Ionic CLI

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/rzschrb/ionic-case.git
cd ionic-case
```
2. Instale as dependências:
```bash
npm install
ionic cap sync
```

## 💻 Executando o Projeto

### Desenvolvimento Web
```bash
npm start
```
### Build iOS
```bash
ionic cap add ios

ionic cap sync

ionic cap open ios
```

### Build Android
```bash
ionic cap add android

ionic cap sync

ionic cap open android
```

### Erro de Capacitor
Se o Capacitor não reconhecer as plataformas:
```bash
ionic cap sync
```

## 📱 Estrutura do Projeto

O projeto segue uma arquitetura modular com:

- `src/app/pages`: Páginas principais do aplicativo
- `src/app/services`: Serviços e lógica de negócios
- `src/theme`: Configurações de tema e estilos globais
- `src/assets`: Recursos estáticos como imagens e ícones