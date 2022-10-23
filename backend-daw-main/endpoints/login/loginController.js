"use strict";
const login = require("../../models/login/login");
const config = require("../../models/services/config");

const { OAuth2Client } = require("google-auth-library");
const CLIENT_ID = config.GOOGLE_CLIENT_KEY_ID;
const client = new OAuth2Client(CLIENT_ID);

const checkInUser = async (req, res) => {

    try{

        let ticket = await client.verifyIdToken({
            idToken: req.body.credential,
            audience: CLIENT_ID,
        });

        let data_user = [];
        let result = [];

        if(ticket){

            const payload = ticket.getPayload();

            data_user = await login.findByEmail(payload.email);
            console.log("data", data_user );

            if(data_user.length > 0){ //Si lo encuentra devuelve el usuario

                return res.send({ code: "LOGIN", payload: data_user[0] });

            }else{

                result = await login.createUser([
                    payload.email,
                    payload.given_name,
                    payload.family_name,
                    "123"
                ]);

                data_user = await login.findByEmail(payload.email);

                return res.send({ code: "LOGIN", payload: data_user[0] });
            }


        }else{
            res.status(500).send({ code: "ERROR", payload: "Error con las credenciales" });
        }

    }catch(err){
        console.log("Error", err);

    }


};

const getData = async (req, res) => {
    let result = [];
    try {
        console.log("Fetching data");
        result = await login.getData();
    } catch (e) {
        console.log("Error: " + e);
        res.status(500).send(e);
        return;
    }
    res.send(result);
};

module.exports = {
    getData,
    checkInUser,
};