function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])) {
        return true;
    }
    else {
        return false;
    }
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(users => users.gender === gender).map(gender => gender.age);
    return result.reduce(((acc, amount) => acc + amount / result.length),0);
}
