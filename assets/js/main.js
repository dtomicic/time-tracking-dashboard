const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
const headersCurrent = ["workCurrent","playCurrent","studyCurrent","exerciseCurrent","socialCurrent","scCurrent"];
const headersPrevious = ["workPrevious","playPrevious","studyPrevious","exercisePrevious","socialPrevious","scPrevious"];

window.onload = () => {
    getTime();
}

daily.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    daily.classList.toggle('active');
    getTime();
})

weekly.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    weekly.classList.toggle('active');
    getTime();
})

monthly.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    monthly.classList.toggle('active');
    getTime();
})


function getTime() {
    fetch("assets/data/data.json")
    .then(response => {
       return response.json();
    })
    .then(jsondata => {
        for (i = 0; i < headersCurrent.length; i++){

            const dailyCurr = jsondata[i]['timeframes']['daily']['current'];
            const dailyPrev = "Previous Day - " + jsondata[i]['timeframes']['daily']['previous'] + "hrs";

            const weekCurr = jsondata[i]['timeframes']['weekly']['current'];
            const weekPrev = "Last Week - " + jsondata[i]['timeframes']['weekly']['previous'] + "hrs";

            const monthCurr = jsondata[i]['timeframes']['monthly']['current'];
            const monthPrev = "Last Month - " + jsondata[i]['timeframes']['monthly']['previous'] + "hrs";

            if (daily.classList.contains('active')){
                document.getElementById(headersCurrent[i]).innerHTML = `${dailyCurr}`;
                document.getElementById(headersPrevious[i]).innerHTML = `${dailyPrev}`;
            }
            else if (weekly.classList.contains('active')){
                document.getElementById(headersCurrent[i]).innerHTML = `${weekCurr}`;
                document.getElementById(headersPrevious[i]).innerHTML = `${weekPrev}`;
            }
            else if (monthly.classList.contains('active')){
                document.getElementById(headersCurrent[i]).innerHTML = `${monthCurr}`;
                document.getElementById(headersPrevious[i]).innerHTML = `${monthPrev}`;
            }
        }
    });
}

