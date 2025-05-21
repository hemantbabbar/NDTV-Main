$(document).ready(function () {
    function tweetButtonClick() {
        let selectedText = document.getSelection().toString();
        /*window.open(
         "https://twitter.com/intent/tweet?url=https://www.linkedin.com/in/harsha-vardhan-ch-245197bb/&text=" +
         selectedText
         );*/
        console.log("This is your selected text: ", selectedText);
    }

    const textSelectionTooltipContainer = document.createElement("div");
    textSelectionTooltipContainer.setAttribute(
            "class",
            "TxSS_cn"
            );
    textSelectionTooltipContainer.setAttribute(
            "style",
            "visibility: hidden"
            );
    textSelectionTooltipContainer.innerHTML = `
<div class="TxSS_wr">
<ul class="TxSS_ul">
<li class="TxSS_li"><a href="javascript:void()" target="_blank" class="TxSS_lk"><svg class="vj_icn vj_twitter-fill">
                                        <use xlink:href="#vj_twitter-fill"></use>
                                        </svg></a></li>
<li class="TxSS_li"><a class="TxSS_lk" target="_blank" href="javascript:void()"><svg class="vj_icn vj_whatsapp-fill">
                                        <use xlink:href="#vj_whatsapp-fill"></use>
                                        </svg></a></li>

<li class="TxSS_li"><a href="javascript:void()" target="_blank" class="TxSS_lk"><svg class="vj_icn vj_facebook-fill">
                                        <use xlink:href="#vj_facebook-fill"></use>
                                        </svg></a></li>
<li class="TxSS_li"><a href="javascript:void()" target="_blank" class="TxSS_lk"><svg class="vj_icn vj_email-fill vj_ss-icn"><use xlink:href="#vj_email-fill"></use></svg></a></li>
</ul>
</div>
  `;

    const bodyElement = document.getElementsByTagName("BODY")[0];

    $("body").on("click", "#textShareTwitterBtn", tweetButtonClick);

    bodyElement.addEventListener("mouseup", function (e) {
        var textu = document.getSelection().toString();
        if (!textu.length) {
            textSelectionTooltipContainer.remove();
        }
    });

    document
            .getElementById("TxSS_selct")
            .addEventListener("mouseup", function (e) {
                let textu = document.getSelection().toString();
                let matchu = /\r|\n/.exec(textu);
                if (textu.length && !matchu) {
                    let range = document.getSelection().getRangeAt(0);
                    rect = range.getBoundingClientRect();
                    //rect_w = $(range).width();
                    //console.log(rect_w)
                    scrollPosition = $(window).scrollTop();
                    containerTop = scrollPosition + rect.top - 50 + "px";
                    containerLeft = rect.left + rect.width / 2 + "px";
                    textSelectionTooltipContainer.style.transform =
                            "translate3d(" + containerLeft + "," + containerTop + "," + "0px)";
                    bodyElement.appendChild(textSelectionTooltipContainer);
                    let tooltip_wdth = rect.width >= $('.TxSS_cn').outerWidth();
                    let cont_difference = tooltip_wdth ? rect.width - $('.TxSS_cn').outerWidth() : $('.TxSS_cn').outerWidth() - rect.width;
                    let containerCenter = tooltip_wdth ? rect.left + cont_difference / 2 + "px" : rect.left - cont_difference / 2 + "px";
                    $('.TxSS_cn').css({'visibility': 'visible', 'transform': "translate3d(" + containerCenter + "," + containerTop + "," + "0px)"});
                }
            });
});

