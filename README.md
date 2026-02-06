# Pet Manager - Avaliação Sênior

## Arquitetura e Padrões
- **Padrão Facade:** Centralização da lógica de negócios e estado.
- **Gerenciamento de Estado:** Reatividade com RxJS e `BehaviorSubject`.
- **Containerização:** Dockerfile multi-stage configurado para produção.
- **Health Checks:** Simulação de Liveness/Readiness através de rotas de monitoramento.

## Como Executar
1. Build da imagem: `docker build -t pet-manager .`
2. Executar container: `docker run -p 80:80 pet-manager`