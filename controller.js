function deleteStoreItem(index) {
    model.store.splice(index, 1);
    console.log(model.store);
    storeView();
}

function personOneBuyStoreItem(index) {
    if (model.store[index].price <= model.points[0].points) {
        let currentPoints = model.points[0].points;
        let price = model.store[index].price;
        let newCurrentPoints = currentPoints - price;
        model.points[0].points = newCurrentPoints;
        model.log.push({
            text: `${model.points[0].name} kjøpte: '${model.store[index].reward}'... for ${model.store[index].price} poeng!`
        });
        storeView();
    } 
    else {
        alert ('Du må gjøre flere oppgaver før du kan kjøpe dette')
    };
};

function personTwoBuyStoreItem(index) {
    if (model.store[index].price <= model.points[1].points) {
        let currentPoints = model.points[1].points;
        let price = model.store[index].price;
        let newCurrentPoints = currentPoints - price;
        model.points[1].points = newCurrentPoints;
        model.log.push({
            text: `${model.points[1].name} kjøpte: '${model.store[index].reward}'... for ${model.store[index].price} poeng!`
        });
        storeView();
    } 
    else {
        alert ('Du må gjøre flere oppgaver før du kan kjøpe dette')
    };
};


function addReward() {

    let reward = model.addToStore.reward;
    let price = model.addToStore.price;
    let allowErik = model.addToStore.allowTwo;
    let allowIna = model.addToStore.allowOne;
    let allowBoth = model.addToStore.allowBoth;

if (price > 0) {
    model.store.push({
        reward: reward,
        price: price,
        allowErik: allowErik,
        allowIna: allowIna,
        allowBoth: allowBoth,
    })

    model.addToStore.reward = '';
    model.addToStore.price = '';
} 
else {
    alert ('Prisen må være større enn 0')
}


storeView();

};
