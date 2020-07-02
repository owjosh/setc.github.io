if (window.location.href.includes('/a/organizations/main/submissions/') || (window.location.href.includes('/a/admin/organizations/main/solicitations/'))) {
    FrontendApiManager.onReady("submissionForm", function (api) {

        function updateTotalNumRows(tableOfItems) {
            var tableOfItems = api.getField("companyRepsTable");
            var rowCount = tableOfItems.getRowCount();
            var numRowsField = api.getField("amountMembershipNeeded");
            var count = 0;
            $(".charge-item").each(function () {
                if (this.innerText == 'No') {
                    count++
                }
            });
            console.log(count)
            numRowsField.setValue(rowCount - count);
        }

        $(document).ready(function () {
            //check every second for updates
            setInterval(updateTotalNumRows, 1000);
        });
    });
}