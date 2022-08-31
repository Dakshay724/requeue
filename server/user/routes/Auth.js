const User = require("../Table/registration");
  const { hashSync, genSaltSync, compareSync } = require("bcrypt");
  const { sign } = require("jsonwebtoken");
  
  const auth= {
    UserCreated: (req, res) => {
      const body = req.body;
      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
      User.create(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    },
    login: (req, res) => {
      const body = req.body;
      User.getUserByUserNumber(body.number, (err, results) => {
        if (err) {
          console.log(err);
        }
        if (!results) {
          return res.json({
            success: 0,
            data: "Invalid number or password"
          });
        }
        const result = compareSync(body.password, results.password);
        if (result) {
          results.password = undefined;
          const jsontoken = sign({ result: results }, process.env.JWT_KEY, {
            expiresIn: "1h"
          });
          return res.json({
            success: 1,
            message: "login successfully",
            token: jsontoken
          });
        } else {
          return res.json({
            success: 0,
            data: "Invalid number or password"
          });
        }
      });
    },
    UsergetByUserId: (req, res) => {
      const id = req.params.id;
      User.getUserByUserId(id, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record not Found"
          });
        }
        results.password = undefined;
        return res.json({
          success: 1,
          data: results
        });
      });
    },
    Userget: (req, res) => {
     User.getUser((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results
        });
      });
    },
    UserUpdated: (req, res) => {
      const body = req.body;
      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
     User.Userupdate(body, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          message: "updated successfully"
        });
      });
    },
    
  };

  module.exports=auth;