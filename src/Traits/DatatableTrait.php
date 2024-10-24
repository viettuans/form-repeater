<?php

namespace Viettuans\QuickComponent\Traits;

use Illuminate\Database\Eloquent\Builder;

trait DatatableTrait
{
    /**
     * getLimit
     */
    public function getLimit(): int
    {
        return (int) request('length');
    }

    /**
     * getPage
     */
    public function getPage(): int
    {
        return (int) (request('start') / request('length')) + 1;
    }

    /**
     * generateEditBtn
     */
    public function generateEditBtn(string $route, bool $ajax = false): string
    {
        if ($ajax) {
            return '<a title="Sửa" data-toggle="tooltip" href="javascript:void(0);" data-url="'.$route.'" class="btn btn-outline-info btn-sm btn-icon waves-effect waves-themed edit-button-ajax btn-action-table"><i class="fal fa-pen"></i></a>';
        }

        return '<a title="Sửa" data-toggle="tooltip" href="'.$route.'" class="btn btn-outline-info btn-sm btn-icon waves-effect waves-themed btn-action-table"><i class="fal fa-pen"></i></a>';
    }

    /**
     * generateDeleteBtn
     */
    public function generateDeleteBtn(string $route): string
    {
        return '<a title="Xóa" data-toggle="tooltip" data-method="DELETE"  data-url="'.$route.'" class="btn btn-outline-danger btn-sm btn-icon waves-effect waves-themed btn-delete-confirm btn-action-table"><i class="fal fa-trash-alt"></i></a>';
    }

    public function getFieldSearch(string $searchField): ?string
    {
        $value = null;
        // how to get value field search by $serachField like applySearchDatatable function
        foreach (request('columns') as $column) {
            $name = $column['name'];
            if ($name == $searchField) {
                $value = @$column['search']['value'];
                break;
            }
        }

        return $value;
    }

    /**
     * applySearchDatatable
     *
     * @return void
     */
    public function applySearchDatatable(Builder &$query, array $searchFields = [])
    {
        foreach (request('columns') as $column) {
            $value = @$column['search']['value'];
            $name = $column['name'];

            if (empty($column['searchable']) || $value === null) {
                continue;
            }

            if (in_array($name, $searchFields)) {
                $query->where($name, 'LIKE', '%'.$value.'%');
            } else {
                $query->where($name, $value);
            }
        }
    }
}
