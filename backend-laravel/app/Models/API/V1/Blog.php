<?php

namespace App\Models\API\V1;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    protected $fillable = [
        "title",
        "user_id",
        "description",
        "img",
    ];
    public function user() {
        return $this->belongsTo(User::class, "user_id", "id")->select(['id', 'name']);
    }
}
