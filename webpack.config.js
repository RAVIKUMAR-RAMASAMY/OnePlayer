const path = require('path');
const webpack = require('webpack');
const config = require('./package.json');

module.exports ={
    mode:'development',
    entry:'./src/onePlayer.ts',
    output:{
        filename:'One_Player.js'
    }
}