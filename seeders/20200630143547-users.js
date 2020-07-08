"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Jenna",
          email: "j@j.com",
          password: bcrypt.hashSync("j", SALT_ROUNDS),
          imageurl:
            "https://lh3.googleusercontent.com/ivCCcQcLvAkHpmy9WpJM3TTbqH2H6BkXL1tF--giTp6qspjPvV7RoQT6-bYv3xinPfB7h__WsazLJpXKAYquKkBANjAHehGD4HN32QonYZkGaVJTBeM4Rrl8ejFR57l_xTXUuwE4dxitBhbP2GxEolcNN3Ys4c--1AiVeAE9E_x1IW64m9RglyROv7JVwgoJn2pCXTeY4ngMm10Zo1KfCbCMu-r0Vf5xouPDwAy9CZVxBE59p_9SjSSwBRAFpwMOX-l02uUjHKZ4x8SRzYWhZzWIs0Mfh3UGTpO7FTbLPCrgXnGbn6yfHsfC_jrmCuHM1qv1H8x2KOF-K8dQhkIVRUs92J4m9eaVWR3poKKQwa4ENPoD7wtwmpjT0tbWwPe1Fu_9tYJloPqc8FcQyB-6b9CAuRWLqCoAk2jlCErbPsBA2bBWn3alj6xx53KxRYKRAZbDXtbmFg8ZMkR3-7zlQwSYVTTjaoBTcx5eX_AuBNRaDajbR55QxlRb9Ibph6sEOw33RWGWnHFwkq9Fvd6u0n54vJKnkK5UpCvrlFxB5lNhHAeoFAAvyaEA0qtHoPLw5a7Rz41RUJSkfSBOh-TCBt-LzG2pMRrR8-kDQ3NVi4AG6uylkl5pd1JiTlOy2xpsHSKi7BLAsOu8SNnn-7faQevvgGtZVTwRcqEcKOGK8FmZvyDNQAP4vjrk=w828-h1472-no?authuser=0",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dummy",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
