


const user1 = {
    name: 'kim',
    age: 21,
    logInfo: function (){
        const inner = () => {
            console.log(this.name);
        }
        inner()
    }
};