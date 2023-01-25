const SequelizeAuto = require('sequelize-auto');
const auto = new SequelizeAuto("summar", "admin", "summarmysql", {
      host: "summar.cv9xsydusdbz.ap-northeast-2.rds.amazonaws.com",
      port: "3306",
      dialect: "mysql",
      //noAlias: true // as 별칭 미설정 여부
   }
);
auto.run((err)=>{
   if(err) throw err;
})