const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
const timeHeader = document.getElementsByClassName('main__areaLeftBottomHeader');
const headersCurrent = ["workCurrent","playCurrent","studyCurrent","exerciseCurrent","socialCurrent","scCurrent"];
const headersPrevious = ["workPrevious","playPrevious","studyPrevious","exercisePrevious","socialPrevious","scPrevious"];

// const workPrev = document.getElementById('workPrevious');
// const playPrev = document.getElementById('playPrevious');
// const studyPrev = document.getElementById('studyPrevious');
// const exercisePrev = document.getElementById('exercisePrevious');
// const socialPrev = document.getElementById('socialPrevious');
// const scPrev = document.getElementById('scPrevious');

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
        // console.log(jsondata[0]['timeframes']['daily']['current']);
        if (daily.classList.contains('active')){
            for (i = 0; i < headersCurrent.length; i++) {
                document.getElementById(headersCurrent[i]).innerHTML = `${jsondata[i]['timeframes']['daily']['current']}`;
                document.getElementById(headersPrevious[i]).innerHTML = "Previous day - " + `${jsondata[i]['timeframes']['daily']['previous']}` + "hrs";
            }
        }
        else if (weekly.classList.contains('active')){
            for (i = 0; i < headersCurrent.length; i++) {
                document.getElementById(headersCurrent[i]).innerHTML = `${jsondata[i]['timeframes']['weekly']['current']}`;
                document.getElementById(headersPrevious[i]).innerHTML = "Last Week -  " + `${jsondata[i]['timeframes']['weekly']['previous']}` + "hrs";
            }
        }
        else if (monthly.classList.contains('active')){
            for (i = 0; i < headersCurrent.length; i++) {
                document.getElementById(headersCurrent[i]).innerHTML = `${jsondata[i]['timeframes']['monthly']['current']}`;
                document.getElementById(headersPrevious[i]).innerHTML = "Last Month -  " + `${jsondata[i]['timeframes']['monthly']['previous']}` + "hrs";
            }
        }
    });
}

