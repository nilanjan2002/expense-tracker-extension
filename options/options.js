$(document).ready(function () {
    $("[data-limit-set]").click(function (e) {
        e.preventDefault();
        try {
            const limitValue = parseInt($("[data-limit-value]").val());
            if (isNaN(limitValue) || limitValue < 10) {
                throw new Error("Limit should be a Number > 10$")
            }
            if(chrome && chrome.storage){
                chrome.storage.sync.set({
                    limit: limitValue
                }, async () => {
                    const options = await chrome.storage.sync.get();
                    console.table(options);
                })
            }else{
                throw new Error("Chrome Storage api not available")
            }

        } catch (error) {
            console.log(error.message)
        }
    });
    $("[limit-reset-btn]").click(async function(){
        try {
            chrome.storage.sync.set({limit:10}, ()=>{
                chrome.storage.sync.get().then(
                    data=> console.log('after resetting limit ',data.limit)
                )
            })
        } catch (error) {
            console.error(error.message);
        }
    })
    $("[spend-reset-btn]").click(async function(){
        try {
            chrome.storage.sync.set({spend:0}, ()=>{
                chrome.storage.sync.get().then(
                    data=> console.log('after resetting total spent ',data.spent)
                )
            });
        } catch (error) {
            console.error(error.message);
        }
    })
})