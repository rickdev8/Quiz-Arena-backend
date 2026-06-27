function DefineRank(users: any) {
    const ranking = users
        .sort((a, b) => b.score - a.score)
        .map((user: any, index: number) => ({
            ...user,
            rank: index + 1,
        }));

        return ranking
}