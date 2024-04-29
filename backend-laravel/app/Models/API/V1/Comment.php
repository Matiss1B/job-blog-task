<?php

namespace App\Models\API\V1;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = [
        "comment",
        "user_id",
        "blog_id"
    ];
    public function user() {
        return $this->belongsTo(User::class, "user_id", "id")->select(['id', 'name']);
    }
    public function blog() {
        return $this->belongsTo(Blog::class, "blog_id", "id")->select(['id', 'title']);
    }
}
