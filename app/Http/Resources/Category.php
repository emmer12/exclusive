<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\SubCategory;
class Category extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);
        return [
            'id' => $this->id,
            'category' => $this->category,
            'sub_category' => subCategory::collection($this->sub_category),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            ];
    }
}
