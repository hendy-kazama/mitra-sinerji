<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SalesDetail;

class SalesDetailController extends Controller
{
    public function show($id){
        $detail = SalesDetail::with('barang')->where('sales_id',$id)->get();

        return response()->json(['data' => $detail]);
    }
}
