"use strict";
function DefineRank(users) {
    const ranking = users
        .sort((a, b) => b.score - a.score)
        .map((user, index) => ({
        ...user,
        rank: index + 1,
    }));
    return ranking;
}
