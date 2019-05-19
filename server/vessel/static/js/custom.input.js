$(`button[id="vessel-struct"]`).click(function f() {
    let ves_name = $(`input[id="vessel-name"]`)[0].value;
    let ves_len = $(`input[id="vessel-length"]`)[0].value;
    let ves_wid = $(`input[id="vessel-width"]`)[0].value;
    let ves_fr_len = $(`input[id="vessel-front-length"]`)[0].value;
    let bay_20_num = $(`input[id="bay-inch20-num"]`)[0].value;
    let eng_pos = $(`input[id="engine-pos"]`)[0].value;
    let eng_wid = $(`input[id="engine-width"]`)[0].value;
    let deck_max_lay = $(`input[id="deck-max-layer-num"]`)[0].value;
    let cab_max_lay = $(`input[id="cabin-max-layer-num"]`)[0].value;
    let deck_max_col = $(`input[id="deck-max-col-num"]`)[0].value;
    let cab_max_col = $(`input[id="cabin-max-col-num"]`)[0].value;
    // let mid_deal_wit = $(`input[name="mid-deal-wit"]:checked`).val();
    let data = {
        ves_name: ves_name,
        ves_len: ves_len,
        ves_wid: ves_wid,
        ves_fr_len: ves_fr_len,
        bay_20_num: bay_20_num,
        eng_pos: eng_pos,
        eng_wid: eng_wid,
        deck_max_lay: deck_max_lay,
        cab_max_lay: cab_max_lay,
        deck_max_col: deck_max_col,
        cab_max_col: cab_max_col,
        // mid_deal_wit: mid_deal_wit,
        //TODO:add ves_voy_info
    };
    console.log(data);
    $.ajax({
        url: '/vesselStruct/add_vessel/',
        type: 'POST',
        data: JSON.stringify(data),
        success: function (res) {
            console.log(res);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
        },
        dataType: "json",
    });
});