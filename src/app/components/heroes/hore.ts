export interface IHeroCard {
    id: number;
    name: string;
    imagePath: string;
    battalionId: number;
    cityId: number;
}

export interface IHeroDetails extends IHeroCard {
    story: string;
    birthDay: Date;
    dateOfDeath: Date;
    cardNumber: number;
}