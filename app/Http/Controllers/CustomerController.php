<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;

class CustomerController extends Controller
{
  
    public function index()
    {
        $customer = Customer::all();

        return response()->json(['data' => $customer, 'status' => 'success']);
    }

    public function store(Request $request)
    {
        $customer = Customer::create($request->all());

        return response()->json(['data' => $customer, 'status' => 'success']);
    }

    public function edit($id)
    {
        $customer = Customer::find($id);
        return response()->json(['data' => $customer, 'status' => 'success']);
        
    }

    public function update(Request $request, $id)
    {
        $customer = Customer::find($id);
        $customer->update($request->all());

        return response()->json(['status' => 'success']);
    }

    public function destroy($id)
    {
        $customer = Customer::find($id);
        $customer->delete();
        return response()->json(['status' => 'success']);
    }
}
