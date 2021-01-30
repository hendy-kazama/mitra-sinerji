<?php

namespace App\Http\Controllers;

use App\Models\Pembayaran;
use Illuminate\Http\Request;

class PembayaranController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pembayaran = Pembayaran::all();

        return response()->json([
            'status' => 'success',
            'data' => $pembayaran,
        ]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $array_data = $request->all();

        $data = [];
        foreach($array_data as $item) {
            // dd($item);
            $data[] = [
                "name"          => $item["name"],
                "pembayaran"    => $item["pembayaran"],
                "bonus"         => ($item["persen"]/100)*$item["pembayaran"],
                "persentase"    => $item["persen"],
                "total"         => (($item["persen"]/100)*$item["pembayaran"])+$item["pembayaran"],
            ];
        }

        Pembayaran::insert($data);

        return response()->json(['status' => 'success']);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pembayaran  $pembayaran
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pembayaran  $pembayaran
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $pembayaran = Pembayaran::find($id);
        return response()->json(['status' => 'success', 'data' => $pembayaran], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pembayaran  $pembayaran
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $pembayaran = Pembayaran::find($id);
        $pembayaran->update(
                ["name"         => $request->name,
                "pembayaran"    => $request->pembayaran,
                "bonus"         => ($request->persentase/100)*$request->pembayaran,
                "persentase"    => $request->persentase,
                "total"         => (($request->persentase/100)*$request->pembayaran)+$request->pembayaran
        ]);

        return response()->json(['status' => 'success']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pembayaran  $pembayaran
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pembayaran = Pembayaran::find($id);
        $pembayaran->delete();
        return response()->json(['status' => 'success']);
    }
}
