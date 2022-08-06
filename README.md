# Fantasy NBA League

The Fantasy NBA league consists of the Home and Detailed Page section built with redux store. The application provides statitics data about the NBA teams in 2020 league.

## Built With
- Vite
- React
- Redux

## Live Demo
[Live Demo Link](https://ubiquitous-hamster-a4bd6e.netlify.app/)

## Demo video
[Demo Video](https://www.loom.com/share/aa7a5bd262064f0098089e8ef4bec405)


## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- A web browser (e.g. Mozilla Firefox, Google Chrome etc.)
- git: This is a version control system used for source code management.
- A text editor (e.g Visual Studio Code (recommended), Sublime Text, Atom etc.)
- Browser Engine on your terminal preferably NodeJs
- Knowledge of HTML, CSS, JavaScript and React

### Setup

- With git, clone the code to your machine, or download a ZIP of all the files directly.
- [Download the ZIP file from this location](https://github.com/t-bello7/Micro-Space-Hub/archive/refs/heads/develop.zip) or run the following [git](https://git-scm.com/) command to clone the files to your machine:

```
git clone https://github.com/t-bello7/Micro-fantasy-nba-league.git
```

- Once the files are on your machine, open the **Micro-Space-Hub** folder in [Visual Studio Code](https://code.visualstudio.com/download).

## Install

- After opening the files in Visual Studio Code, open the **VS Code** integrated terminal and run the following commands:

```
yarn install
```

This will install all the packages and dependencies used in the project.

## Usage 
- Go to the (NBA RAPID API)[https://rapidapi.com/api-sports/api/api-nba/] and subscribe to get authentication keys for the NBA API
- Create a .env file in the project root directory and the enviroment variables with your key 

`
VITE_NBA_BASEURL=**The NBA API BASE URL**  
VITE_XRapidAPIKey=**Your RAPID API KEY**
VITE_XRapidAPIHost=**Your RAPID API HOST**
`
- Run the following command to start a live server on your computer
```
yarn dev
```
This will open up the project on a browser on `localhost:3000`

## Test
- Run the following command to run the test suite 
```
yarn test 
```
This will run the unit test 

## Authors

👤 **Oluwatomisin Bello**

- GitHub: [@t-bello](https://github.com/t-bello)
- Twitter: [@__tbello](https://twitter.com/__tbello)
- LinkedIn: [Oluwatomisin Bello](https://www.linkedin.com/in/tbello7)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Microverse.
- Redux ToolKit Team
- Nelson Sarkwa Ballhead-App-(Free-PSDs) Design 

## Resources Used
- https://rapidapi.com/api-sports/api/api-nba/
- https://www.behance.net/gallery/31579789/Ballhead-App-(Free-PSDs)
- https://github.com/microverseinc/curriculum-react-redux/blob/main/capstone/react_capstone.md
- https://github.com/antfu/vite-plugin-pwa/blob/main/examples/react-router/vite.config.ts
