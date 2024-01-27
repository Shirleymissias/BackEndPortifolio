import Sequelize from "sequelize";

//configurações da conexão com o banco de dados SQlite
const sequelize = new Sequelize ({
    dialect: 'sqlite',
    storage: 'database.sqlite'
    //Onde vc deseja q o arquivo do banco de dados seja armanzenado
});

//Testando a conexão
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão bem sucedida com o banco de dados.');
    } catch (error) {
        console.error('Erro ao conectar com o banco de dados: ', error);
    }
})();

export default sequelize 

