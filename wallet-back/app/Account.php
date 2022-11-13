<?php

namespace App;


use Illuminate\Database\Eloquent\Model;


class Account extends Model
{

    protected $fillable = [
        'name', 'person_name', 'address', 'tel','user_id'
    ];


    public function getDeptMoneys () {
        return $this->hasMany('App\Deptmoney','account_id','id');
    }

    public function getCreditMoneys () {
       return $this->hasMany('App\Creditmoney','account_id','id');
    }


}
