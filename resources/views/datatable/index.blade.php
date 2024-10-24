{{-- <link rel="stylesheet" href="https://cdn.datatables.net/2.1.7/css/dataTables.dataTables.css" />  
<script src="https://cdn.datatables.net/2.1.7/js/dataTables.js"></script> --}}

<table class="datatablejs" route="{{ route('lottery.distributor.distributor-detail.index', [$lottery, $group]) }}">
    <thead>
        <tr>
            <th>Id</th>
            <th filter="true" data-name="model_name">Name</th>
            <th filter="true" data-name="model_name">Email</th>
        </tr>
    </thead>
    <tbody>
        
    </tbody>
</table>