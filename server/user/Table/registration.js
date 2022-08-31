const db=require('../database');



 



const User = {
  
      create: (data, callBack) => {
        db.query(
          `INSERT INTO registration(name,email,number, gender,  password ) 
          values(?,?,?,?,?)`,
          [
            data.name,
            data.email,
            data.number,
            data.gender,
            data.password,
  
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
    getUserByUserNumber: (number, callBack) => {
      db.query(
        `SELECT * from registration where number = ?`,
        [number],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    },
    getUserByUserId: (id, callBack) => {
      db.query(
        `SELECT id,name,email,number, gender from registration where id = ?`,
        [id],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    },
    getUser: callBack => {
      db.query(
        `SELECT id,name,email,number, gender from registration`,
        [],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
    Userupdate: (data, callBack) => {
      db.query(
        `UPDATE registration set name=?, email=?, number=?, gender=?, password=? where id = ?`,
        [
          data.name,
          data.email,
          data.number,
          data.gender,
          data.password,
          data.id
        ],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    },
    
  };

  module.exports=User;