# Guia de Contribuição

Para manter a organização e a clareza do histórico deste projeto, seguimos os padrões de branch e merge descritos abaixo.

## 🌿 Estrutura de Branches

- **master (ou main):** Código estável e em produção. Jamais faça push direto nesta branch.
- **dev:** Branch de integração. Todo desenvolvimento novo deve passar por aqui antes da master.
- **legacy:** Snapshot imutável do código original pré-refatoração (Apenas leitura).
- **tipo-de-tareda/nome-da-tarefa:** Branches temporárias para novas funcionalidades ou correções.

## 🤝 Padrões de Merge e Commits

### 1. Feature → dev
- **Método:** `Merge Commit`.
- **Objetivo:** Preservar o histórico atômico do desenvolvimento, permitindo rastrear cada passo da construção.

### 2. dev → master
- **Método:** `Squash and Merge`.
- **Objetivo:** Manter a linha do tempo de produção limpa. Todos os commits da `dev` serão condensados em um único commit descritivo (ex: "Refatoração completa do sistema de arquivos").

---

## 🚀 Como contribuir

1. Crie uma branch a partir da `dev` (`git checkout -b feature/minha-melhoria`).
2. Faça seus commits com mensagens claras.
3. Abra um Pull Request para a branch `dev`.
4. Após a aprovação e merge na `dev`, a integração com a `master` será feita via Squash pelo mantenedor.
