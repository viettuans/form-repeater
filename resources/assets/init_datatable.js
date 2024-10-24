"use strict";
// option config select 2 has placeholder
function initDataTable() {
    function throttle(f, delay) {
        let timer = null;
        return function () {
            let context = this,
                args = arguments;
            clearTimeout(timer);
            timer = window.setTimeout(function () {
                f.apply(context, args);
            }, delay || 500);
        };
    }
    $("table.datatablejs").each(function () {
        let $table = $(this);
        let datatable = $table.DataTable({
            language: {
                url: "/public/quick-component/plugins/datatables/lang/vi.json",
            },
            processing: true,
            serverSide: true,
            ajax: {
                url: $table.attr("route"),
                type: "POST",
            },
            orderCellsTop: true,
            fixedHeader: true,
            ordering: false,
            lengthMenu: [15, 30, 50, 100, 150],
            drawCallback: function () {
                $('[data-toggle="tooltip"]').tooltip();
            },
            dom:
                "<'row mb-3'<'col-sm-12 col-md-6 d-flex align-items-center justify-content-start head-left'><'col-sm-12 col-md-6 d-flex align-items-center justify-content-end head-right'l>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-12 col-md-5 footer-left'i><'col-sm-12 col-md-7 footer-right'p>>",
        });
        
        let thead = $table.find("thead tr").clone();
        $table.find("thead").append(thead);

        $table.find("thead tr:eq(1) th").each(function (i) {
            const $this = $(this);
            if ($this.attr("filter") == "true") {
                const title = $this.text();
                const type = $this.attr("type");

                switch (type) {
                    case "select":
                        $this.html($($(this).attr("template")).html());
                        $("select", this).on("change", function () {
                            if (datatable.column(i).search() !== this.value) {
                                datatable.column(i).search(this.value).draw();
                            }
                        });
                        break;
                    case "number":
                        $this.html(
                            '<input type="number" min="0" class="form-control form-control-sm" placeholder="Tìm ' +
                                title.toLowerCase() +
                                '" />'
                        );
                        $("input", this).on("keyup change", function () {
                            if (datatable.column(i).search() !== this.value) {
                                datatable.column(i).search(this.value).draw();
                            }
                        });
                        break;
                    default:
                        $this.html(
                            '<input type="text" class="form-control form-control-sm" placeholder="Tìm ' +
                                title.toLowerCase() +
                                '" />'
                        );

                        $("input", this).keyup(
                            throttle(function () {
                                if (
                                    datatable.column(i).search() !== this.value
                                ) {
                                    datatable
                                        .column(i)
                                        .search(this.value)
                                        .draw();
                                }
                            })
                        );
                        break;
                }
            } else {
                $this.html("");
            }
        });
    });
}

(function () {
    "use strict";
    initDataTable();
})();
