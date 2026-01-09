try{
    document.getElementById('WhatsAppForm').addEventListener('submit', function(event){
        event.preventDefault();
        phoneNumber = document.getElementById('tel').value;
        phoneNumber = cleanSpaces(phoneNumber);
        if (isNumeric(phoneNumber)) {
            prefix = document.getElementById('prefix').value;
            const tabs = chrome.tabs || browser.tabs;
            tabs.create({
                url: "https://api.whatsapp.com/send/?phone=" + prefix + phoneNumber + "&text&type=phone_number&app_absent=0"
            });
        } else {
            document.getElementById('tel').style.backgroundColor = "red";
        }
    })
}catch(e){
    console.error(e);
}

function isNumeric(str) {
  if (typeof str != "string") return false
  return !isNaN(str) && !isNaN(parseFloat(str))
}

function cleanSpaces(str) {
    phoneNumber = str.replace(/\s+/g, '')
    document.getElementById('tel').value = phoneNumber
    return phoneNumber
}