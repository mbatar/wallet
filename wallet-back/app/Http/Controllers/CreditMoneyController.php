<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Creditmoney;

class CreditMoneyController extends Controller
{

    public function __construct()
    {
        //
    }

    public function showAllCredits(){
        return response()->json(Creditmoney::all());
    }

    public function showOneCredit($id){
        return response()->json(Creditmoney::find($id));
    }

    public function create(Request $request){
        $this->validate($request,[
            'total'=>'required',
            'account_id'=>'required'
        ]);
        $credit=Creditmoney::create($request->all());

        return response()->json($credit,201);
    }

    public function update($id,Request $request){
        $this->validate($request,[
            'total'=>'required'
        ]);
        $credit=Creditmoney::where('account_id',$id)->first();
        $credit->total=$credit->total+$request->total;
        $credit->save();
        return response()->json($credit,200);
    }


    public function delete($id){
        Creditmoney::findOrFail($id)->delete();
        return response('silme işlemi başarılı',200);
    }

}
