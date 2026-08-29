# 🥳 Atividade Prática 03 - Convite Virtual (React Native)

Este repositório contém a entrega da **Atividade Prática 03** desenvolvida para a disciplina de **Programação para Dispositivos Móveis II** do professor Jeferson de Souza Dias do curso de **Desenvolvimento de Software Multiplataforma** na **Fatec Itaquera**.

## 📌 Sobre o Projeto

O aplicativo consiste em um convite digital interativo para um evento de aniversário com a temática premium "Dark & Gold". Ele exibe as informações principais da festa, apresenta um design com fundo personalizado com ícones adaptados para mobile, além de contar com um cronômetro em tempo real calculando a contagem regressiva até a data do evento.

## 🎯 Requisitos da Atividade e Como Foram Aplicados

| Requisito Solicitado | Como foi implementado |
| :--- | :--- |
| **Apenas uma tela** | O fluxo inteiro ocorre no `App.js` utilizando os arquivos externos como componentes dentro de uma `ScrollView`. Não foram utilizadas bibliotecas de navegação (como React Navigation) para respeitar a regra da tela única. |
| **No mínimo três arquivos** | A arquitetura foi dividida exatamente nos nomes exigidos: `tela1.js` (Cabeçalho com tipografia e nome), `tela2.js` (Lógica e layout do Cronômetro) e `tela3.js` (Rodapé com data, local e contato). |
| **Data no padrão brasileiro** | A interface da `tela3.js` exibe a data do evento dividida visualmente, mas respeitando o formato nacional (DD/MM/AAAA), acompanhada de ícones temáticos. |
| **Cronômetro regressivo** | Foi implementada uma lógica utilizando os hooks `useState` e `useEffect` no arquivo `tela2.js`. O sistema calcula a diferença em milissegundos entre o momento atual e a data futura do evento, renderizando dinamicamente Dias, Horas, Minutos e Segundos. |
| **Criatividade no Layout**| Foi desenvolvido um tema sofisticado noturno. Para evitar falhas de carregamento de imagens externas, foi criado um componente de textura de fundo no `App.js` usando a biblioteca `@expo/vector-icons` com posicionamento absoluto negativo, garantindo responsividade perfeita no Android, iOS e Web. |

---

## 🚀 Como Executar o Projeto

Você pode testar este projeto de duas maneiras: diretamente no navegador via Snack Expo (forma mais rápida) ou localmente na sua máquina.

### Opção 1: Pelo Snack Expo (Direto no Navegador)
1. Acesse o [Snack Expo](https://snack.expo.dev/).
2. No painel esquerdo de arquivos, crie a seguinte estrutura (apagando o conteúdo padrão):
   - `App.js`
   - `src/tela1.js`
   - `src/tela2.js`
   - `src/tela3.js`
3. Copie e cole os respectivos códigos deste repositório em cada arquivo.
4. Selecione a aba **Web**, **iOS** ou **Android** no painel direito para visualizar e interagir com o aplicativo em tempo real.

### Opção 2: Localmente na sua Máquina
**Pré-requisitos:** Node.js instalado e o aplicativo *Expo Go* no seu dispositivo móvel (opcional).

1. Clone este repositório para a sua máquina:
   ```
   git clone [https://github.com/allanmsilva23/Aplicativo-Convite-Virtual.git](https://github.com/allanmsilva23/Aplicativo-Convite-Virtual.git)

```

2. Acesse a pasta do projeto:
```
cd Aplicativo-Convite-Virtual

```


3. Instale as dependências:
```
npm install

```


4. Inicie o servidor do Expo:
```
npx expo start

```


5. Escaneie o QR Code que aparecerá no terminal usando a câmera do seu celular (iOS) ou o app do Expo Go (Android).

---

## 🛠️ Tecnologias Utilizadas

* **React Native**
* **Expo (v54.0.0)**
* **JavaScript (ES6+)**
* **@expo/vector-icons** (Design e Texturização)
