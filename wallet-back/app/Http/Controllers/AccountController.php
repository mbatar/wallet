<?php

namespace App\Http\Controllers;

use App\Account;
use App\User;
use App\Creditmoney;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AccountController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }


    public function testGet(){

        // $data['accounts']=Account::all();
        $data['accounts']=User::find(Auth::id())->accounts;
        foreach ($data['accounts'] as $d){
            $d['totaldept']=(int)Account::find($d->id)->getDeptMoneys()->sum('total');
            $d['totalcredit']=(int)Account::find($d->id)->getCreditMoneys()->sum('total');
            $d['credits']=Account::find($d->id)->getCreditMoneys()->get();
            $d['depts']=Account::find($d->id)->getDeptMoneys()->get();
            $d['balance']=(int)$d['totalcredit']-$d['totaldept'];

        }
        return response()->json($data);
    }

    public function showInfo($id){
        $data['credits']=Account::find($id)->getCreditMoneys()->get();
        $data['depts']=Account::find($id)->getDeptMoneys()->get();
        return response()->json($data);
    }


    public function showAllAccounts(){
        return response()->json(Account::all());
    }


    public function showOneAccount($id){

       return response()->json(Account::find($id));
    }

    public function showAccountDepts($id){
        return response()->json(Account::find($id)->getDeptMoneys()->get());
    }

    public function showAccountCredits($id){
        return response()->json(Account::find($id)->getCreditMoneys()->get());
    }

    public function create(Request $request){
        $request['user_id'] = Auth::id();
        $this->validate($request,[
            'name'=>'required',
            'person_name'=>'required',
            'address'=>'required',
            'tel'=>'required',
            'user_id'=>'required',
        ]);
        $account = Account::create($request->all());
        $responseAccount = Account::find($account->id);
        $responseAccount['totalcredit']=0;
        $responseAccount['totaldept']=0;
        $responseAccount['balance']=0;
        return response()->json($responseAccount,201);
    }

    public function update($id, Request $request){

        $account = Account::findOrFail($id);
        $account->update($request->all());
        return response()->json($account,200);
    }

    public function delete($id){
        $account=Account::findOrFail($id);
        $account->delete();
        return response($account,200);
    }
}
