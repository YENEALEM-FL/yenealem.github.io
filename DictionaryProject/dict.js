$(function () {
    $('#searchButton').on('click', search);
  
    function search() {
        
        let searchKeyword = $('#inputWord').val().trim();
        console.log(searchKeyword);
        $.ajax({
            "url": `http://localhost:3000/api?keyword=${searchKeyword}`, 
            "type": "GET",
            "success": myAjaxSuccessFunction, 
            "error": ajaxFailure
        });

        function myAjaxSuccessFunction(data) {
            let searchResult = data;
            $('.wordSearched').empty();
            let wordtype='';
            let content='';
            for (let i = 0; i < searchResult.length; i++) {
                wordtype=searchResult[i].wordtype;
                if(wordtype.trim()!==''){
                    wordtype="("+wordtype+")";
                }
                content=searchResult[i].definition;
                $('.wordSearched').append('<p> <span class="number">' + (i + 1)+ '</span> <span class="wordtype">' + wordtype + '</span>'+ 
                    content + '</p>');

            }
          
        }
        function ajaxFailure(xhr, status, exception) {
            $('.wordSearched').html('<strong>Result not found</strong>');
        }
    }

});
