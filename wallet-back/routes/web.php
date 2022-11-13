<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix'=>'api'],function ($router){

    //GET (ACCOUNT) ROUTE AND FUNCTIONS
    $router->get('accounts','AccountController@showAllAccounts');
    $router->get('depts','DeptMoneyController@showAllDepts');
    $router->get('depts/{id}','DeptMoneyController@showOneDept');
    $router->get('credits','CreditMoneyController@showAllCredits');
    $router->get('credits/{id}','CreditMoneyController@showOneCredit');
    $router->get('accounts/{id}','AccountController@showOneAccount');
    $router->get('accountdepts/{id}','AccountController@showAccountDepts');
    $router->get('accountcredits/{id}','AccountController@showAccountCredits');
    $router->get('test','AccountController@testGet');
    $router->get('showInfo/{id}','AccountController@showInfo');
    $router->get('users','UserController@allUsers');
    $router->get('profile','UserController@profile');

    //POST ROUTE AND FUNCTIONS
    $router->post('accounts','AccountController@create');
    $router->post('depts','DeptMoneyController@create');
    $router->post('credits','CreditMoneyController@create');
    $router->post('register','AuthController@register');
    $router->post('login', 'AuthController@login');


    //PUT ROUTE AND FUNCTIONS
    $router->put('accounts/{id}','AccountController@update');
    $router->put('depts/{id}','DeptMoneyController@update');
    $router->put('credits/{id}','CreditMoneyController@update');
    $router->put('updatedept/{id}','DeptMoneyController@updateDept');
    $router->put('updatecredit/{id}','CreditMoneyController@updateCredit');

    //DELETE ROUTE AND FUNCTIONS
    $router->delete('accounts/{id}','AccountController@delete');
    $router->delete('depts/{id}','DeptMoneyController@delete');
    $router->delete('credits/{id}','CreditMoneyController@delete');
});
