class DefaultRanking {

    static compute(settings, points) {
        let accumulatedPoints = 0;
        let level = 0;
        let levelProgress = 0;
        let currentLevelTotal = settings.basePoints;
        let levelGrow = settings.baseGrow;

        while (accumulatedPoints <= points) {
            levelProgress = points - accumulatedPoints;
            level++;
            accumulatedPoints += currentLevelTotal;
            currentLevelTotal += levelGrow;
        }

        return {
            rank        : level,
            rankProgress: levelProgress,
            rankTotal   : currentLevelTotal - levelGrow,
            total       : points
        };
    }

}

module.exports = DefaultRanking;
