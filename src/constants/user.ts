export enum E_USER_STATUS {
    NONE = 'none',
    COMPLETED = 'completed',
    WAITING = 'wating',
    UPDATING = 'updating',
    FAIL = 'fail',
}

export enum E_TIER {
    UNRANK = 0,
    BRONZE = 5,
    SILVER = 10,
    GOLD = 15,
    DIAMOND = 20,
    PLATINUM = 25,
    MASTER = 30,
    CHALLENGER = 35,
}

export enum E_TIER_IMG {
    UNRANK = '/assets/imgs/tier-unrank.png',
    BRONZE = '/assets/imgs/tier-bronze.png',
    SILVER = '/assets/imgs/tier-silver.png',
    GOLD = '/assets/imgs/tier-gold.png',
    DIAMOND = '/assets/imgs/tier-diamond.png',
    PLATINUM = '/assets/imgs/tier-platinum.png',
    MASTER = '/assets/imgs/tier-master.png',
    CHALLENGER = '/assets/imgs/tier-challenger.png',
}
