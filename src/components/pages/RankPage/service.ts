import { E_TIER_IMG } from '@/constants/user';

export function getTierImage(tier: string) {
    switch (tier) {
        case 'Bronze':
            return E_TIER_IMG.BRONZE;
        case 'Silver':
            return E_TIER_IMG.SILVER;
        case 'Gold':
            return E_TIER_IMG.GOLD;
        case 'Platinum':
            return E_TIER_IMG.PLATINUM;
        case 'Diamond':
            return E_TIER_IMG.DIAMOND;
        case 'Challenger':
            return E_TIER_IMG.CHALLENGER;
        case 'Master':
            return E_TIER_IMG.MASTER;
        default:
            // unrank
            return E_TIER_IMG.UNRANK;
    }
}
