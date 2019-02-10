import Sequelize from 'sequelize'

let sequelize = new Sequelize('books_db', null, null, {
  host: 'ec2-54-243-128-95.compute-1.amazonaws.com',
  username: 'byjtzoxlasfoik',  
  password: '186b64e788378fbf5d217a3e95aa8cd6230f751c577cf39af6eeb3ad7d4331683',  
  database: 'dal69llph2o668',
  dialect: 'postgres' 
});