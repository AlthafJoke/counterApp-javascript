

let countEl = document.getElementById('count')

let count = 0

// increment button
function increment() {
    count += 1
    console.log(count)
    countEl.innerHTML = count

    
}
let username = "User!!"
let message = "Hello "
console.log( username + " " + message )

let welcomeEl = document.getElementById('welcome-el')
welcomeEl.innerText = message + username

// saving count value
saveEle = document.getElementById('save-el')
function save() {
    let store = count
    if (count != 0 ) {
        saveEle.textContent +=  store + ' - ' 

    }
    

    count = 0
    countEl.textContent = count


}

// clear history

function clearData() {
    store = ''
    console.log("clearing ....")
    saveEle.textContent = store
   

}




























