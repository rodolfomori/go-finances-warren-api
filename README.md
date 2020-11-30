<h1 align="center">
  <br>
Go Finances API :money_with_wings:
</h1>


<p align="center">“Do not expect brilliant results if your goals are unclear”!</blockquote>


<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#result">Result</a>
</p>

## :rocket: Technologies

This project was developed with the following technologies:

- Node
- Express
- TypeORM
- Docker
- Docker Compose
- Postgres
- Prettier
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn
v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/rodolfomori/go-finances-warren-api

# Run with docker
$ docker-compose up

```
<p> Routes </p>

```bash


   *GET* - api/balance => show all the transactions

   *POST* - api/transactions => insert a new transactions
    exemple:
    {
     "title":"Salary",
	   "value":"2000",
     "type":"income",  (income | outcome)
     "category":"Salary"
    }

   *POST* - api/transactions/import  => insert transctions from a CSV file
      exemple:
      [CSV]: https://github.com/rodolfomori/go-finances-warren-api/blob/master/src/__tests__/import_template.csv


```



<p>If you want to run the project from a local or remote container, you can run the command:</p>

```bash

$ docker-compose up --build -d

```




If you want to run the database (postgres) from a local or remote container, you can run the command:

```bash

$  docker run --name ask-me-postgres -e POSTGRES_PASSWORD=choose a password -p 5432:5432 -d postgres

Choose your password, and change it in .env file.

Change the DB address with a new one in .env.

```


## :sunny: Result


Made with ♥ by Rodolfo Mori :wave: [Get in touch!](https://www.linkedin.com/in/rodolfomori/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
