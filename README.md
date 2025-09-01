# 📋 Projeto Login and Register

Sistema de login com frontend e backend separados, desenvolvido com TypeScript e Express.

## 🏗️ Estrutura do Projeto

```
Login-and-register/
├── Backend/
│   ├── src/
│   │   ├── controller/
│   │   │   └── login-controller.ts
│   │   ├── service/
│   │   │   └── login-service.ts
│   │   ├── router/
│   │   │   └── login-route.ts
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
├── Frontend/
│   └── index.html
├── package.json
└── README.md
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm

### 1. Instalar Dependências

Na pasta raiz do projeto:

```bash
npm install
```

No Backend:

```bash
cd Backend
npm install
cd ..
```

### 2. Executar o Projeto

Na pasta raiz, execute:

```bash
npm run dev
```

Este comando irá iniciar:

- **Frontend**: `http://127.0.0.1:3000`
- **Backend**: `http://localhost:3001`

> **Nota:** O projeto não requer arquivo `.env` pois usa valores padrão. O backend rodará automaticamente na porta 3001.

## 🔧 Endpoints da API

### Status do Servidor

```
GET http://localhost:3001/
```

**Resposta:**

```json
{
  "ok": true,
  "service": "backend-login",
  "ts": 1693834567890
}
```

### Login

```
POST http://localhost:3001/auth/login
```

**Body (JSON):**

```json
{
  "email": "testinho@gmail.com",
  "password": "teste"
}
```

**Resposta de Sucesso (200):**

```json
{
  "message": "Login bem sucedido!",
  "user": {
    "id": 1,
    "email": "testinho@gmail.com",
    "name": "William"
  }
}
```

**Resposta de Erro (401):**

```json
{
  "message": "Credenciais inválidas"
}
```

## 🧪 Testando a API

### Usando curl

```bash
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"testinho@gmail.com","password":"teste"}'
```

### Usando JavaScript no Frontend

```javascript
fetch("http://localhost:3001/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "testinho@gmail.com",
    password: "teste",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Erro:", error));
```

## 👤 Credenciais de Teste

**Email:** `testinho@gmail.com`  
**Senha:** `teste`

## 🛠️ Tecnologias Utilizadas

### Backend

- **TypeScript** - Linguagem principal
- **Express** - Framework web
- **Helmet** - Middleware de segurança
- **CORS** - Controle de acesso entre origens
- **ts-node** - Execução de TypeScript
- **tsx** - Runtime TypeScript moderno

### Frontend

- **HTML** - Estrutura da página
- **live-server** - Servidor de desenvolvimento

### Desenvolvimento

- **concurrently** - Execução paralela de comandos
- **nodemon** - Auto-reload do servidor

## 📝 Scripts Disponíveis

### Na Pasta Raiz

```bash
npm run dev      # Inicia frontend e backend simultaneamente
npm run backend  # Inicia apenas o backend
npm run frontend # Inicia apenas o frontend
```

### Na Pasta Backend

```bash
npm run dev   # Inicia o servidor em modo desenvolvimento
npm run build # Compila o TypeScript
npm run start # Inicia o servidor compilado
```

## ⚙️ Configurações Opcionais

### Variáveis de Ambiente

O projeto funciona sem configurações adicionais, mas você pode criar um arquivo `.env` na pasta `Backend` se desejar personalizar:

```env
PORT=3001
NODE_ENV=development
```

Se não existir o arquivo `.env`, o projeto usará os valores padrão.

## 🔍 Configurações de CORS

O backend está configurado para aceitar requisições das seguintes origens:

- `http://localhost:3000` (live-server)
- `http://127.0.0.1:3000` (live-server)
- `http://localhost:5173` (Vite, se necessário)
- `http://127.0.0.1:5173` (Vite, se necessário)

## 🚨 Solução de Problemas

### Backend não inicia

1. Verifique se todas as dependências estão instaladas
2. Certifique-se de estar na pasta raiz ao executar `npm run dev`
3. Verifique se a porta 3001 não está em uso

### Frontend não carrega

1. Verifique se o live-server está instalado globalmente: `npm install -g live-server`
2. Ou instale localmente: `npm install live-server`

### Erro de CORS

1. Verifique se as URLs no frontend estão apontando para `http://localhost:3001`
2. Confirme se o CORS está configurado corretamente no backend

### "tsx não é reconhecido"

1. Instale o tsx globalmente: `npm install -g tsx`
2. Ou use: `npx tsx src/index.ts`

## 📚 Estrutura do Código

### Backend

- **index.ts** - Configuração principal do servidor
- **login-controller.ts** - Lógica de controle do login
- **login-service.ts** - Serviço de autenticação (mock)
- **login-route.ts** - Definição das rotas de autenticação

### Frontend

- **index.html** - Interface de usuário para login

## 📋 Próximos Passos

- [ ] Implementar registro de usuários
- [ ] Adicionar validação de dados
- [ ] Implementar banco de dados
- [ ] Adicionar JWT para autenticação
- [ ] Melhorar interface do usuário
- [ ] Adicionar testes unitários

## 📞 Contato

Se encontrar algum problema, verifique:

1. Se todas as dependências estão instaladas
2. Se as portas 3000 e 3001 estão livres
3. Se o Node.js está na versão correta

---

**Desenvolvido para fins educacionais** 🎓
