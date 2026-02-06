Projeto técnico – Processo Seletivo SEPLAG/MT – Front-end Angular 
Solução robusta para gerenciamento de pets e tutores, focada em escalabilidade, manutenibilidade e padrões modernos de desenvolvimento Angular.
🏗️ Arquitetura e Decisões Técnicas

Para atender aos requisitos de nível sênior, a aplicação foi estruturada seguindo princípios de Clean Architecture e Desacoplamento:

    Padrão Facade: Implementado para centralizar a lógica de negócio e o gerenciamento de estado, servindo como uma interface única entre os componentes e os serviços de API.

    Gerenciamento de Estado Reativo: Utilização de BehaviorSubject (RxJS) para garantir a consistência dos dados em toda a aplicação sem acoplamento entre componentes irmãos.

    Componentização: Divisão clara entre componentes de página (Smart Components) e componentes de UI (Dumb Components).

    Interceptor de Segurança: Implementação de HttpInterceptor para injeção automática de tokens JWT e tratamento centralizado de erros de autenticação (401).

🚀 Tecnologias Utilizadas

    Angular 17+ (Standalone Components)

    RxJS (Programação Reativa)

    Tailwind CSS (Estilização Utilitária)

    Docker (Containerização)

    TypeScript (Tipagem Estrita)

📦 Como Executar
Localmente
Bash

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start

A aplicação estará disponível em http://localhost:4200.
Via Docker (Containerização)

O projeto conta com um Multi-stage Build para otimizar o tamanho da imagem final:
Bash

# Build da imagem
docker build -t pet-manager-app .

# Executar container
docker run -p 80:80 pet-manager-app

🛠️ O que foi implementado (Priorização)

Dada a restrição de tempo, a priorização foi guiada pelo Core Business e requisitos técnicos críticos:

    [x] Autenticação: Fluxo completo de login com persistência de token.

    [x] Listagem de Pets (Req. 1): Com busca reativa em tempo real.

    [x] Cadastro de Tutor (Req. 4): Validações complexas e tratamento de dados.

    [x] Vínculo Pet/Tutor (Req. 5): Implementação da relação de ID entre entidades.

    [x] Arquitetura Sênior: Estruturação com Facades e State Management.

    [x] DevOps: Dockerfile configurado para ambiente de produção (Nginx).

📝 Notas de Implementação (Roadmap)

    Testes Unitários: A estrutura Facade foi criada justamente para facilitar a injeção de Mocks em testes com Jasmine/Karma (Próximo Passo).

    Health Checks: Configurados no nível de infraestrutura via Docker HEALTHCHECK.

    Endpoints Adicionais: Os endpoints de Delete/Update foram mapeados e sua lógica segue o padrão estabelecido no PetService, priorizando-se neste momento a entrega dos requisitos funcionais obrigatórios.