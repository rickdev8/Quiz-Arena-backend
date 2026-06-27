function DefineRank(users: any) {
    const ranking = users
        .sort((a: any, b: any) => b.score - a.score)
        .map((user: any, index: number) => ({
            ...user,
            rank: index + 1,
        }));

        return ranking
}