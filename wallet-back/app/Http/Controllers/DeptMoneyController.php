<?php

namespace App\Http\Controllers;

use App\Deptmoney;
use Illuminate\Http\Request;

class DeptMoneyController extends Controller
{

    public function __construct()
    {
        //
    }

    public function showAllDepts()
    {
        return response()->json(Deptmoney::all());
    }

    public function showOneDept($id)
    {
        return response()->json(Deptmoney::find($id));
    }

    public function create(Request $request) {
        $this->validate($request,[
            'total'=>'required',
            'account_id'=>'required'
        ]);
        $dept=Deptmoney::create($request->all());
        return response()->json($dept,201);
    }

    public function update($id,Request $request) {
        $this->validate($request,[
            'total'=>'required',
        ]);
        $dept=Deptmoney::findOrFail($id);
        $dept->update($request->all());
        return response()->json($dept,200);


    }

    public function updateDept($id,Request $request){
        $data=Deptmoney::where('account_id',$id);
        $data->update($request->all());
        return response()->json("basarili",200);
    }

    public function delete($id){
        Deptmoney::findOrFail($id)->delete();
        return response('silme işlemi başarılı',200);
    }
}
