
import angular from 'angular'

import 'angular-route'

import appRoutes from './app.route'

import homeController from './controllers/home.controller'

var app =  angular
			.module('angularjs-node-webpack-seed',['ngRoute'])
			.config(appRoutes)
			.controller('homeController' , homeController)

