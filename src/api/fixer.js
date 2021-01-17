import axios from "axios";

export  async  function fixer(list){
    let total = 0;
    console.log(list)
    const res = await axios.get('http://data.fixer.io/api/latest?access_key=0f498dd3309abc33978854351da4f35e')
    const arr = Object.entries(res.data.rates)
    list.forEach((current) => {
        if(current.split(' ')[3] === 'EUR')
            total += current.split(' ')[2];
        else
            total += current.split(' ')[2]/arr.find(element => element[0] === current.split(' ')[3])[1]
    })
    return total.toFixed(1);
}