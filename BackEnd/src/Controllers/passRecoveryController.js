const nodemailer = require('nodemailer');
const userSchema = require('../Models/userModel');
const mongoose = require('mongoose');
const uuidv1 = require('uuidv1');
const moment = require('moment');
const recoveryModel = require('../Models/Recovery');
const Recovery = mongoose.model("recoveries", recoveryModel);
const bcrypt = require('bcrypt');

const config = {
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 25,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
};

const transporter = nodemailer.createTransport(config);
module.exports = {
    async sendMail(req, res) {

    const { email } = req.body

    await userSchema.findOne({ email }).then((user) => {
        if (user) {
            const token = uuidv1()
            const expirationdate = moment().add(15, 'minutes').utc().format()
            const newRecovery = new Recovery({ email, token, expirationdate })
            newRecovery.save()
            .then(() => {
                var mailOptions = {
                    from: process.env.USER,
                    to: email,
                    subject: "Link de Redefinição de Senha",
                    html: "<p>Acesse o link abaixo para redefinir a senha de sua conta. Após 15 minutos, irá expirar o tempo limite!</p><p>http://localhost:3000/recovery/" + token + '</p>'
                }
                transporter.sendMail(mailOptions, (error) => {
                    if (error) console.log(error)
                    else res.render("message", {
                        message: "Você receberá um email com um link para redefinir sua senha. Após 15 minutos, irá expirar o tempo limite!"
                    })
                })
            }).catch((e) => {
                res.render("message", { message: "Ocorreu um erro interno!" });
            })
        }
        else
            res.render("message", { message: "Email inválido!" })
    })
  },

  async recovery(req, res) {
    const { token } = req.params
    Recovery.findOne({ token: token }).then((recovery) => {
        if (recovery) {
            if (moment(recovery.expirationdate).isAfter(moment.utc().format()))
                res.render("recovery", { token })
            else
                res.render("message", { message: "Token expirado!" })
        }
        else
            res.render("message", { message: "Token inválido!" })
    })
  },

  async redefinePass(req, res) {
    const { token } = req.params
    const { newpassword, confirmnewpassword } = req.body
    if (newpassword != confirmnewpassword)
        res.render("message", { message: "Senhas diferentes!" })
    else if (newpassword == null || confirmnewpassword == null || newpassword == undefined || confirmnewpassword == undefined)
        res.render("message", { message: "Preencha todos os campos!" })
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(newpassword))
        res.render("message", { message: "Sua senha não cumpre os requisitos!" })
    else {
        Recovery.findOne({ token: token }).then((recovery) => {
            if (recovery) {
                if (moment(recovery.expirationdate).isAfter(moment.utc().format())) {
                    userSchema.findOne({ email: recovery.email }).then((user) => {
                        if (user) {
                            if (moment(recovery.expirationdate).isAfter(moment.utc().format())) {
                                const salt = bcrypt.genSaltSync(10);

                                const encryptedPassword = bcrypt.hashSync(newpassword, salt);
                                userSchema.updateOne({
                                    email: recovery.email
                                }, {
                                    senha: encryptedPassword
                                }).then(() => {
                                    var mailOptions = {
                                        from: process.env.USER,
                                        to: recovery.email,
                                        subject: "Senha Redefinida com Sucesso",
                                        html: "<p>A senha de sua conta foi alterada!</p>"
                                    }
                                    try {               
                                        transporter.sendMail(mailOptions, (error) => {
                                            if (error) res.render("message", { message: "Ocorreu um erro interno!" })
                                            else res.render("message" , { message: "Senha alterada com sucesso!" })
                                        })
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }).catch(() => {
                                    res.render("message", { message: "Ocorreu um erro interno!" });
                                })
                                Recovery.deleteOne({ token: token })
                            }
                            else
                                res.render("message", { message: "Token expirado!" })
                        }
                        else
                            res.render("message", { message: "Ocorreu um erro interno!" })
                    })
                }
                else
                    res.render("message", { message: "Token expirado!" })
            }
            else
                res.render("message", { message: "Token inválido!" })
        })
    }
  }

}