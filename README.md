# 📝 Realtime To-do App

Aplicação colaborativa de tarefas com atualizações em **tempo real**, feita com:

- **Frontend:** React + Vite + TypeScript + TailwindCSS  
- **Backend:** Node.js + Express  
- **WebSocket:** Socket.IO  
- **Banco de dados:** MongoDB  

---

## 🚀 Funcionalidades

✅ Criar tarefas  
✅ Marcar como concluída  
✅ Remover tarefas  
✅ Atualização automática em tempo real entre usuários conectados  
✅ Layout responsivo com Tailwind CSS  

---

## 📷 Demonstração

![screenshot](https://user-images.githubusercontent.com/00000000/000000000-00000000.png)

---

## 🧑‍💻 Rodando localmente

### 🔧 Pré-requisitos

- Node.js  
- MongoDB instalado local ou Atlas (cloud)  

### 1. Clone o projeto

```bash
git clone https://github.com/WallanDavid/realtime-todo-app.git
cd realtime-todo-app
```

### 2. Backend

```bash
cd backend
npm install
```

Crie o arquivo `.env`:

```ini
PORT=4000
MONGO_URI=mongodb://localhost:27017/realtime_todo
```

> Ou use a URI do MongoDB Atlas.

Inicie o servidor:

```bash
npm run dev
```

### 3. Frontend

Abra outro terminal:

```bash
cd frontend
npm install
npm run dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

---

## 🌐 Comunicação em tempo real

A sincronização das tarefas entre todos os usuários é feita com Socket.IO, ouvindo os eventos:

- `task_created`  
- `task_updated`  
- `task_deleted`  

---

## 📦 Estrutura

```bash
realtime-todo-app/
├── backend/
│   └── server.js, models, .env
├── frontend/
│   └── src/, App.tsx, Tailwind, socket.ts
```

---

## 🛠️ Tecnologias usadas

- React, Vite, TypeScript  
- Tailwind CSS  
- Node.js, Express  
- MongoDB, Mongoose  
- Socket.IO  

---

## 📄 Licença

MIT © WallanDavid
