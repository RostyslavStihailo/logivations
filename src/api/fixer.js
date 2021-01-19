import axios from "axios";


//АPI не дозволяє передавати в себе квері параметри через безкоштовну підписку,
// але по дефолту повертає курси обміну до євро, у емейлі я надіслав скрін помилки ща вертає з сервера
// у документації апі сказано що це помилка доступу
export  async  function fixer(list){
    try {
        let total = 0;
        const res = await axios.get('http://data.fixer.io/api/latest?access_key=0f498dd3309abc33978854351da4f35e')
        const arr = Object.entries(res.data.rates)
        list.forEach((current) => {
            if (current.split(' ')[3] === 'EUR')
                total += current.split(' ')[2];
            else
                total += current.split(' ')[2] / arr.find(element => element[0] === current.split(' ')[3].toUpperCase())[1]
        })
        return total.toFixed(2);
    }catch (e) {
        console.log(e)
    }
}