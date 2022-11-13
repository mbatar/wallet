<?php

namespace App;


use Illuminate\Database\Eloquent\Model;


class Creditmoney extends Model
{

protected $fillable = [
    'total','account_id','description'
];

public function getAccount () {
    return $this->hasOne('App\Account','id','account_id');
}


}
