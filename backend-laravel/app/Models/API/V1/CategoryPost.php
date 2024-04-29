<?php

namespace App\Models\API\V1;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryPost extends Model
{
    use HasFactory;
    protected $fillable = [
        "category_id",
        "blog_id"
    ];
    public function category() {
        return $this->belongsTo(Category::class, "category_id", "id");
    }
}
