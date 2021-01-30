<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Barang;

class BarangController extends Controller
{
    public function index()
    {
        $barang = Barang::all();

        return response()->json(['data' => $barang, 'status' => 'success']);
    }

    public function store(Request $request)
    {
        $barang = Barang::create($request->all());

        return response()->json(['data' => $barang, 'status' => 'success']);
    }

    public function edit($id)
    {
        $barang = Barang::find($id);
        return response()->json(['data' => $barang, 'status' => 'success']);
        
    }

    public function update(Request $request, $id)
    {
        $barang = Barang::find($id);
        $barang->update($request->all());

        return response()->json(['status' => 'success']);
    }

    public function destroy($id)
    {
        $barang = Barang::find($id);
        $barang->delete();
        return response()->json(['status' => 'success']);
    }
}
