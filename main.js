let male = document.getElementById('male');
let female = document.getElementById('female');
let poin = Math.round((Math.random()*100));
console.log(poin);

const getKet = poin => {
    const data = {
        ket: '',
        warna: ''
    }

    if(poin >0 && poin <= 20){
        data.ket = 'Dah laa putus aja !';
    }else if(poin > 20 && poin <= 40){
        data.ket = 'G banget!';
    }else if(poin > 40 && poin <= 60){
        data.ket = 'B Aja!';
    }else if(poin > 60 && poin <= 80){
        data.ket = 'Sabi si ini!';
    }else{
        data.ket = 'Cocok bat Gilss!';
    }

    return data;
};

document.getElementById('cek').addEventListener('click', () => {
    if(male.value !== '' && female.value !== ''){
        const con = document.getElementById('con');
        con.innerHTML = `
        <div class="row">
        <div class="col-md-12 text-center">
        <small>Loading</small>
        <br>
        <h1 class="display-4"><span id="loading">tes</span> %</h1>
        </div>
        </div>
        `;
        var numAnim = new CountUp('loading', 0, 100);
        numAnim.start();
        
        
        
        setTimeout(()=>{
            let data = getKet(poin);
            con.innerHTML = `
            <div class="row mb-4 mt-2">
            <div class="col-md-12 text-center">
            <h4><span>${male.value}</span> and <span>${female.value}</span></h4>
            <hr>
            </div>
            </div>
            <div class="row mb-4">
            <div class="col-md-12 text-center">
            <h1 class="display-4"><span id="poin"></span> Point</h1>
            <small>${data.ket}</small>
            </div>
            </div>
            <hr>
            <div class="row">
            <div class="col-md-12 text-center">
            <button class="btn btn-light" onclick="javascript:location.reload(true)">Coba Lagi</button>
            </div>
            </div>
            `;
        }, 2000);
        
        setTimeout(()=>{
            
            let numAnim2 = new CountUp('poin', 0, poin);
            numAnim2.start();
        }, 3000);
        
        
        
        
    }else{
        alert('Fill all field please!');
    }
});