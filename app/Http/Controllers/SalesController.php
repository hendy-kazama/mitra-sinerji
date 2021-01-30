<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sales;
use App\Models\SalesDetail;

class SalesController extends Controller
{
    public function latestRow(){
        $last = Sales::latest()->first();

        return response()->json(['last' => $last]);
    }

    public function index(){
        $sales = Sales::with(['detail_transaksi','customer'])->get();

        return response()->json(['data' => $sales, 'status' => 'success']);
    }

    public function store(Request $request)
    {
        $sales = Sales::create([
            'kode' => $request->kode,
            'tgl' => $request->tgl,
            'cust_id' => $request->cust_id,
            'subtotal' => $request->subtotal,
            'diskon' => $request->diskon,
            'ongkir' => $request->ongkir,
            'total_bayar' => $request->total_bayar,
        ]);
        
        $data = [];
        foreach($request->list_transaksi as $item) {
            $data[] = [
                "sales_id"          => $sales->id,
                "barang_id"         => $item["id"],
                "harga_bandrol"     => $item["harga_bandrol"],
                "qty"               => $item["qty"],
                "diskon_pct"        => $item["diskon_pct"],
                "diskon_nilai"      => $item["diskon_nilai"],
                "diskon"            => ($item["diskon"])?$item["diskon"]:0, 
                "harga_diskon"      => $item["harga_diskon"],
                "total"             => $item["total"],
            ];
        }

        SalesDetail::insert($data);

        return response()->json(['status' => 'success']);
    }
    public function show($id){
        $detail = SalesDetail::where('sales_id', $id)->get();

        return response()->json(['data' => $detail, 'status' => 'success']);
    }
}
