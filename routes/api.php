<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PembayaranController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\SalesDetailController;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('customer', CustomerController::class)->except(['create','show']);
Route::resource('barang', BarangController::class)->except(['create','show']);
Route::resource('sales', SalesController::class)->except(['create']);
Route::get('/sales/latest', [SalesController::class, 'latestRow']);
Route::get('/salesdetail/{id}', [SalesDetailController::class, 'show']);
