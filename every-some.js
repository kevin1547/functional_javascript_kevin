/*const zz = [{ id: 380, name: 'Ex Quis' },{ id: 517, name: 'Eu Ea' },{ id: 317, name: 'Ad Deserunt' },{ id: 345, name: 'Et Anim' },{ id: 317, name: 'Ad Deserunt' }]
const cc = [{ id: 380, name: 'Ex Quis' },{ id: 317, name: 'Ad Deserunt' },{ id: 345, name: 'Et Anim' },{ id: 317, name: 'Ad Deserunt' }]

const re = zz.some(c =>c === cc[i++])
console.log(re)*/

let i = 0
let box1
let box2 = []
function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        box1 = goodUsers[i++].id
        const result = submittedUsers.some(function(x){
            box2.push(x);
            //console.log(t)
            return x.id === box1
        })
        if(result === true){
            const result2 = box2.every(function(y){
                //console.log(box1)
                //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
                //console.log(y.id)
                return y.id === box1  
            })
            console.log(box2)
        }
        return result
    }
}
module.exports = checkUsersValid
 
     